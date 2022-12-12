import React from 'react';
import { PatrimoniesContext } from '../../contexts/patrimoniesContext';
import { useAxios } from '../../hooks/useAxios';
import Box from '../Box';
import BoxContent from '../BoxContent';
import BoxHeader from '../BoxHeader';
import Button from '../Button';
import Container from '../Container'
import Flex from '../Flex';
import Input from '../Input';
import PageSelector from '../PageSelector';
import Table from '../Table';
import TableDirection from '../TableDirection';
import Tbody from '../Tbody';
import Td from '../Td';
import Th from '../Th';
import Thead from '../Thead';
import TopTableOptions from '../TopTableOptions';
import Tr from '../Tr';


const Patrimonies = () => {
  const { OpenModal, handleDelete, handleEdit } = React.useContext(PatrimoniesContext)
  const { data } = useAxios('patrimonies')
  return (
    <Container>
      <Box>
        <BoxHeader title='Resultados (0)'>
          <Button type='button' onClick={() => OpenModal()}>+ Adicionar</Button>
        </BoxHeader>
        <BoxContent>
          <TopTableOptions />
          <label htmlFor="search">Pesquisar</label>
          <Input type='search' />
          <Table>
            <Thead>
              <Tr>
                <Th>Id <TableDirection /></Th>
                <Th>Nome <TableDirection /></Th>
                <Th>Código <TableDirection /></Th>
                <Th>Local <TableDirection /></Th>
                <Th>Situação <TableDirection /></Th>
                <Th>Conservação <TableDirection /></Th>
                <Th>Ações <TableDirection /></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.patrimonies.map((patrimonies: any, index: number) => {
                return (

                  <Tr>
                    <Td>{index}</Td>
                    <Td>{patrimonies.name}</Td>
                    <Td>{patrimonies.code}</Td>
                    <Td>{patrimonies.place}</Td>
                    <Td>{patrimonies.situation}</Td>
                    <Td>{patrimonies.conservation}</Td>
                    <Td>
                      <Flex>
                        <Button type='button' onClick={() => handleEdit(patrimonies._id,
                          patrimonies.name,
                          patrimonies.code,
                          patrimonies.category,
                          patrimonies.place,
                          patrimonies.situation,
                          patrimonies.conservation,
                          patrimonies.origin,
                          patrimonies.price,
                          patrimonies.purchaseDate,
                          patrimonies.docNumber,
                          patrimonies.lifeCycle,
                          patrimonies.observation,
                          patrimonies.amount
                        )}>Editar</Button>
                        <Button type='button' onClick={() => handleDelete(patrimonies._id)}>Apagar</Button>
                      </Flex>

                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
          <PageSelector />
        </BoxContent>
      </Box>
    </Container>
  )
}

export default Patrimonies;
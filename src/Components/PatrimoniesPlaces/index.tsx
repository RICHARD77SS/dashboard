
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";
import EditRemove from "../EditRemove";
import Input from "../Input";
import InputBlock from "../InputBlock";
import Table from "../Table";
import Tbody from "../Tbody";
import Td from "../Td";
import Th from "../Th";
import Thead from "../Thead";
import Tr from "../Tr";
import React from 'react'
import { AsideContent, Aside } from './styles';
import { PlacesPatrimoniesContext } from "../../contexts/placesPatrimoniesContext";
import Flex from "../Flex";
import { useAxios } from "../../hooks/useAxios";

const PatrimoniesPlaces = () => {
  const { name, description, nameHandler, descriptionHandler, handleSubmit, handleEdit, handleDelete } = React.useContext(PlacesPatrimoniesContext)
  const { data } = useAxios('placespatrimonies')
  return (
    <Container>
      <h3>Locais</h3>
      <Content>
        <Box>
          <BoxHeader title="Resultados: 4" />
          <BoxContent>
            <p>Gerencie os locais onde os itens do patrimônio são inseridos.</p>
            <Content>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Nome da categoria</Th>
                    <Th>Ações</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.placesPatrimonies.map((palces: any, index: number) => {
                    return (
                      <Tr key={index}>
                        <Td>{palces.name}</Td>
                        <Td>
                          {palces.description !== 'fixed' ?
                            <Flex>
                              <Button type='button' onClick={() => handleEdit(palces._id, palces.name, palces.description)}>Editar</Button>
                              <Button type='button' onClick={() => handleDelete(palces._id)}>Apagar</Button>
                            </Flex>
                            : null}

                        </Td>
                      </Tr>
                    )
                  })}
                  
                </Tbody>
              </Table>
            </Content>
          </BoxContent>
        </Box>
        <Aside onSubmit={handleSubmit}>
          <BoxHeader title="+ Criar Categoria" />
          <BoxContent width="100%">
            <AsideContent>
              <InputBlock>
                <label htmlFor="name">Nome da Categoria</label>
                <Input type='text' value={name} onChange={nameHandler} />
              </InputBlock>
              <InputBlock>
                <label htmlFor="description">Descrição</label>
                <textarea title='area' name="" id="" value={description} onChange={descriptionHandler}></textarea>
              </InputBlock>
              <Button type='submit'>Criar</Button>
            </AsideContent>
          </BoxContent>
        </Aside>
      </Content>
    </Container>
  )
}

export default PatrimoniesPlaces;
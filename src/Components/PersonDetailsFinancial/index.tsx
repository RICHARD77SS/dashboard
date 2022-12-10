import React from 'react'
import Button from "../Button";
import PageSelector from "../PageSelector";
import Table from "../Table";
import Tbody from "../Tbody";
import Td from "../Td";
import Th from "../Th";
import Thead from "../Thead";
import TopTableOptions from "../TopTableOptions";
import Tr from "../Tr";
import { useAxios } from '../../hooks/useAxios';

import { Box, Top, TableContainer } from './styles'
import { FinancialContext } from '../../contexts/financialContext';
import { formatter } from '../../utils/formatMoneyBr';
interface Props {
  name?: String;
}
const PersonDetailsFinancial = ({ name }: Props) => {
  const { handleEdit, OpenRevenues, OpenExpenses } = React.useContext(FinancialContext)

  const { data } = useAxios('financial')
  return (
    <Box>
      <Top>
        <Button onClick={() => OpenRevenues()}>+ Adicionar receita</Button>


        <Button onClick={() => OpenExpenses()}>+ Adicionar Despesa</Button>
      </Top>
      <TopTableOptions />
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Data</Th>
              <Th>Nome</Th>
              <Th>Categoria</Th>
              <Th>Arquivo</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.financial.map((financial: any, index: number) => {
              const datef = new Date(financial.date)
              const formatedDate = datef.toLocaleDateString()
              if (name === financial.receivedFrom) {
                return (
                  <Tr key={index}>
                    <Td><Button onClick={() => handleEdit(financial._id,
                      financial.date,
                      financial.description,
                      financial.value,
                      financial.paidOut,
                      financial.receivedFrom,
                      financial.category,
                      financial.account,
                      financial.costCenter,
                      financial.typeOfPayment,
                      financial.documentNumber,
                      financial.competence,
                      financial.notes,
                      financial.file,
                      financial.frequenci,
                      financial.repetition)}>{formatedDate}</Button></Td>
                    <Td><Button >{financial.description}</Button></Td>
                    <Td><Button>{financial.category}</Button></Td>
                    <Td><Button>{financial.file}</Button></Td>
                    <Td><Button className={financial.revenuesExpenses ? 'green' : 'red'}>{financial.revenuesExpenses ? '' : '-'}&nbsp;{formatter.format(financial.value)}</Button></Td>
                  </Tr>
                )
              }
              return (
                <>
                </>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <PageSelector />
    </Box>
  )
}

export default PersonDetailsFinancial;
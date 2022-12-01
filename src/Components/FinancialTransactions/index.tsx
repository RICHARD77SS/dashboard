

import BoxContent from '../BoxContent';
import BoxHeader from '../BoxHeader';
import Button from '../Button';
import Container from '../Container';
import Input from '../Input';
import Table from '../Table';
import Th from '../Th';
import Thead from '../Thead';
import TopTableOptions from '../TopTableOptions';
import Tr from '../Tr';
import { BsArrowDown, BsArrowUp, BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import Tbody from '../Tbody';
import Td from '../Td';
import { FaPrint } from 'react-icons/fa';
import { AiFillCopy } from 'react-icons/ai';
import PageSelector from '../PageSelector';
import { Content, Flex, Box, Graph, Aside, AsideHeader, AsideContent, Flex2, Block } from './styles';
import ButtonContainer from '../ButtonContainer';
import GraphLineArea from '../GraphLineArea';
import TableContainer from '../TableContainer';
import { useAxios } from '../../hooks/useAxios';
import { formatter } from '../../utils/formatMoneyBr';
import React from 'react';
import { FinancialContext } from '../../contexts/financialContext';


const LineData = {
  labels: [
    '01/01/2022',
    '02/01/2022',
    '03/01/2022',
    '04/01/2022',
    '05/01/2022',
    '06/01/2022',
    '07/01/2022',
    '08/01/2022',
    '09/01/2022',
    '10/01/2022',
    '11/01/2022',
    '12/01/2022',
    '13/01/2022',
    '14/01/2022',
    '15/01/2022',
    '16/01/2022',
    '17/01/2022',
    '18/01/2022',
    '19/01/2022',
    '20/01/2022',
    '21/01/2022',
    '22/01/2022',
    '23/01/2022',
    '24/01/2022',
    '25/01/2022',
    '26/01/2022',
    '27/01/2022',
    '28/01/2022',
    '29/01/2022',
    '30/01/2022'
  ],
  datasets: [
    {
      fill: true,
      label: 'Receitas',
      data: [222, 212, 313, 414, 166, 778, 119, 0, 100, 200, 400, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100],
      borderColor: 'rgb(65, 176, 37)',
      backgroundColor: 'rgba(32, 248, 3, 0.5)',
    },
    {
      fill: true,
      label: 'Despesas',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(255, 15, 15)',
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
    },
    {
      fill: true,
      label: 'A receber',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(53, 174, 235)',
      backgroundColor: 'rgba(53, 181, 235, 0.5)',
    },
    {
      fill: true,
      label: 'A pagar',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(235, 93, 53)',
      backgroundColor: 'rgba(235, 99, 53, 0.5)',
    },
  ],
};
const FinancialTransactions = () => {
  const { handleEdit, handleDelete, OpenRevenues, OpenExpenses } = React.useContext(FinancialContext)
  const { data: dataFinancial } = useAxios('financial')

  return (
    <Container>
      <h3>Registros de transações</h3>
      <Content>
        <Flex2>
          <Input type='date' />
          <Input type='text' placeholder='Tipo' />
          <Input type='text' placeholder='status' />
          <Input type='text' placeholder='Contas' />
          <Input type='text' placeholder='Centros de custos' />
          <Input type='text' placeholder='Categorias' />
        </Flex2>
        <Flex>
          <Box>
            <Graph>
              <GraphLineArea data={LineData} />
            </Graph>
          </Box>
          <Aside>
            <AsideHeader>
              <h3>Previsão</h3>
              <p>De acordo com as datas selecionadas</p>
            </AsideHeader>
            <AsideContent>
              <p><b>Total recebido:</b></p>
              <p>R$ 0,00</p>
              <p><b>Total pago:</b></p>
              <span>R$ -0,00</span>
              <hr />
              <p><b>A receber:</b></p><p>R$ 0,00</p>
              <p><b>A pagar:</b></p><span>R$ -0,00</span>
              <hr />
              <Button>Mais relatórios</Button>
            </AsideContent>
          </Aside>
        </Flex>
        <Block>
          <BoxHeader title={`Resultados: 1 transações`}>
            <Button className='button1'>Transferência</Button>
            <Button className='button2' type='button' onClick={() => OpenRevenues()} >Adicionar receita</Button>
            <Button className='button3' type='button' onClick={() => OpenExpenses()}>Adicionar despesa</Button>
          </BoxHeader>
          <BoxContent>
            <TopTableOptions>
              <ButtonContainer>
                <label htmlFor="search">Pesquisar</label>
                <Input type='search' placeholder='buscar' />
              </ButtonContainer>
            </TopTableOptions>
            <TableContainer>

              <Table>
                <Thead>
                  <Tr>
                    <Th><Input type='checkbox' /></Th>
                    <Th>Data<p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Deacrição<p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Total<p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Contato<p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Categoria<p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Conta<p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Ações<p><BsArrowUp /><BsArrowDown /></p></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {dataFinancial?.financial.map((financial: any, index: number) => {
                    return (
                      <Tr key={index}>
                        <Td><Input type='checkbox' /></Td>
                        <Td>{financial.date.split('T')[0]}</Td>
                        <Td>{financial.description}</Td>
                        <Td>{formatter.format(financial.value)}</Td>
                        <Td>{financial.receivedFrom}</Td>
                        <Td>{financial.category}</Td>
                        <Td>{financial.account}</Td>
                        <Td>
                          <ButtonContainer>
                            <Button><FaPrint /></Button>
                            <Button type='button' onClick={() => handleEdit(financial._id,
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
                              financial.repetition)}><BsFillPencilFill /></Button>
                            <Button><AiFillCopy /></Button>
                            <Button type='button' onClick={() => handleDelete(financial._id)}><BsFillTrashFill /></Button>
                          </ButtonContainer>
                        </Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>
            </TableContainer>
            <PageSelector />
          </BoxContent>
        </Block>
      </Content>
    </Container>
  )
}

export default FinancialTransactions;
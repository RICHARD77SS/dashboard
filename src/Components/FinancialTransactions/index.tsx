

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
import { Content, Flex, Box,Graph,Aside, AsideHeader,AsideContent, Flex2, Block } from './styles';
import ButtonContainer from '../ButtonContainer';
import GraphLineArea from '../GraphLineArea';


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
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      borderColor: 'rgb(235, 93, 53)',
      backgroundColor: 'rgba(235, 99, 53, 0.5)',
    },
  ],
};
const FinancialTransactions = () => {
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
            <Button className='button2'>Adicionar receita</Button>
            <Button className='button3'>Adicionar despesa</Button>
          </BoxHeader>
          <BoxContent>
            <TopTableOptions>
              <ButtonContainer>
                <label htmlFor="search">Pesquisar</label>
                <Input type='search' placeholder='buscar'/>
              </ButtonContainer>
            </TopTableOptions>
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
                <Tr>
                  <Td><Input type='checkbox' /></Td>
                  <Td>20/03/2010</Td>
                  <Td>Description 1</Td>
                  <Td>R$ 1.000,00</Td>
                  <Td>Richard silva santos </Td>
                  <Td>Categorie</Td>
                  <Td>Count</Td>
                  <Td>
                    <ButtonContainer>
                      <Button><FaPrint /></Button>
                      <Button><BsFillPencilFill /></Button>
                      <Button><AiFillCopy /></Button>
                      <Button><BsFillTrashFill /></Button>
                    </ButtonContainer>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
            <PageSelector />
          </BoxContent>
        </Block>
      </Content>
    </Container>
  )
}

export default FinancialTransactions;
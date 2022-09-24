

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
import { Content, Flex, Box, Top,Classification, BoxColor,Graph,Aside, AsideHeader,AsideContent, Flex2, Block } from './styles';
import ButtonContainer from '../ButtonContainer';

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
            <Top>
              <Classification>
                <BoxColor className='a'></BoxColor>
                <p>Receitas</p>
              </Classification>
              <Classification>
                <BoxColor className='b'></BoxColor>
                <p>Despesas</p>
              </Classification>
              <Classification>
                <BoxColor className='c'></BoxColor>
                <p>A receber</p>
              </Classification>
              <Classification>
                <BoxColor className='d'></BoxColor>
                <p>A pagar</p>
              </Classification>
            </Top>
            <Graph>

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
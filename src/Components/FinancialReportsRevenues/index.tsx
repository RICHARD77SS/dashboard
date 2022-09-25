import Container from "../Container";
import Flex from "../Flex";
import Input from "../Input";
import PageSelector from "../PageSelector";
import ReportsHeader from "../ReportsHeader";
import Table from "../Table";
import TableContainer from "../TableContainer";
import TableDirection from "../TableDirection";
import Tbody from "../Tbody";
import Td from "../Td";
import Th from "../Th";
import Thead from "../Thead";
import TopTableOptions from "../TopTableOptions";
import Tr from "../Tr";
import { Hr, ResumeBox, ResumeFlex, ResumeBlock, ResumeContent } from "./styles";

const FinancialReportsRevenues = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Fluxo de caixa - Receitas / Despesas' />
      <Hr />
      <h3>Receitas</h3>
      <TopTableOptions>
      </TopTableOptions>
      <Flex>
        <label htmlFor="search">Pesquisar</label>
        <Input type='search' />
      </Flex>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Data <TableDirection /></Th>
              <Th>Descrição <TableDirection /></Th>
              <Th>Total <TableDirection /></Th>
              <Th>Categoria <TableDirection /></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>21/02/2020</Td>
              <Td>descriptions</Td>
              <Td>R$ 1.000,00</Td>
              <Td>categories</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <PageSelector />
      <Hr />
      <h3>Despesas</h3>
      <TopTableOptions>
      </TopTableOptions>
      <Flex>
        <label htmlFor="search">Pesquisar</label>
        <Input type='search' />
      </Flex>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Data <TableDirection /></Th>
              <Th>Descrição <TableDirection /></Th>
              <Th>Total <TableDirection /></Th>
              <Th>Categoria <TableDirection /></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>21/02/2020</Td>
              <Td>descriptions</Td>
              <Td>R$ 1.000,00</Td>
              <Td>categories</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <PageSelector />
      <Hr />
      <br />
      <br />
      <h3>Resumo</h3>
      <ResumeBox>
        <ResumeFlex>
          <ResumeBlock>
            <ResumeContent>
              <h4>Saldo anterior</h4>
              <p>Em 31/08/2022</p>
            </ResumeContent>
            <ResumeContent>
              <h4>Total de receitas no período</h4>
            </ResumeContent>
            <ResumeContent>
              <h4>Total de despesas no período</h4>
            </ResumeContent>
            <ResumeContent>
              <h4>A receber</h4>
            </ResumeContent>
            <ResumeContent>
              <h4>A pagar</h4>
            </ResumeContent>
            <ResumeContent>
              <h4>Transferências enviada</h4>
            </ResumeContent>
            <ResumeContent>
              <h4>Transferências recebida</h4>
            </ResumeContent>
            <ResumeContent>
              <h3>Saldo final</h3>
              <p>em 30/12/2022</p>
            </ResumeContent>
          </ResumeBlock>
          <ResumeBlock>
            <ResumeContent>
              <h4><span>R$ 1.000,00</span></h4>
              <br />
            </ResumeContent>
            <ResumeFlex>
              <ResumeBlock>
                <ResumeContent>
                  <pre><h4><span>R$ 1.000,00</span></h4></pre>
                </ResumeContent>
                <ResumeContent>
                  <h4><span>- R$ 0,00</span></h4>
                </ResumeContent>
              </ResumeBlock>
              <ResumeContent>
                <h4><span>= R$ 1.000,00</span></h4>
              </ResumeContent>
            </ResumeFlex>
            <ResumeFlex>
              <ResumeBlock>
                <ResumeContent>
                  <pre><h4><span>R$ 1.000,00</span></h4></pre>
                </ResumeContent>
                <ResumeContent>
                  <h4><span>- R$ 0,00</span></h4>
                </ResumeContent>
              </ResumeBlock>
              <ResumeContent>
                <h4><span>= R$ 1.000,00</span></h4>
              </ResumeContent>
            </ResumeFlex>
            <ResumeFlex>
              <ResumeBlock>
                <ResumeContent>
                  <pre><h4><span>R$ 2.000,00</span></h4></pre>
                </ResumeContent>
                <ResumeContent>
                  <h4><span>- R$ 0,00</span></h4>
                </ResumeContent>
              </ResumeBlock>
              <ResumeContent>
                <h4><span>= R$ 2.000,00</span></h4>
              </ResumeContent>
            </ResumeFlex>
            <ResumeContent>
              <h3>R$ 1.000,00</h3>
              <br />
            </ResumeContent>
          </ResumeBlock>
        </ResumeFlex>
        <ResumeContent>
          <h4>O resultado apresentado é baseado nos filtros selecionados no topo da página.</h4>
        </ResumeContent>
      </ResumeBox>
    </Container>
  )
}

export default FinancialReportsRevenues;
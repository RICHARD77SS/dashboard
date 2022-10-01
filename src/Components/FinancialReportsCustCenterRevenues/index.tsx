
import Container from '../Container';
import Flex from '../Flex';
import GraphLineArea from '../GraphLineArea';
import Input from '../Input';
import PageSelector from '../PageSelector';
import ReportsHeader from '../ReportsHeader';
import Table from '../Table';
import TableContainer from '../TableContainer';
import TableDirection from '../TableDirection';
import Tbody from '../Tbody';
import Td from '../Td';
import Th from '../Th';
import Thead from '../Thead';
import TopTableOptions from '../TopTableOptions';
import Tr from '../Tr';
import { Graph, ResumeBox, ResumeFlex, ResumeBlock, ResumeContent } from './styles';

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
const FinancialReportsCustCenterRevenues = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Fluxo de caixa - Receitas Centros de custos' />
      <h4>Período: 01/09/2022 á 30/12/2022</h4>
      <Graph>
        <GraphLineArea data={LineData} />
      </Graph>
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

export default FinancialReportsCustCenterRevenues;
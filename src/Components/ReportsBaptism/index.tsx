import Button from '../Button';
import GraphPieArea from '../GraphPieArea';
import ReportsHeader from '../ReportsHeader';
import Table from '../Table';
import Tbody from '../Tbody';
import Td from '../Td';
import Th from '../Th';
import Thead from '../Thead';
import Tr from '../Tr';
import { Container, Graph} from './styles';

const yes = 10
const no = 10

const PieData = {
  labels: ['Feminino', 'Masculino'],
  datasets: [
    {
      labels: '# of Votes',
      data: [yes, no],
      backgroundColor: [
        'rgba(253, 0, 0, 0.2)',
        'rgba(72, 235, 54, 0.2)',
      ],
      borderColor: [
        '#f61818',
        '#36eb39',
      ],
      borderWidth: 1,
    },
  ],
};
const ReportsBaptism = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Batizados' />
      <Graph>
        <GraphPieArea data={PieData} />
      </Graph>
      <Table>
        <Thead>
          <Tr>
            <Th>Tipo</Th>
            <Th>Pessoas</Th>
            <Th>Visualizar</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Batizado (sim)</Td>
            <Td>{yes}</Td>
            <Td><Button>Ver pessoas</Button></Td>
          </Tr>
          <Tr>
            <Td>Batizado (Não)</Td>
            <Td>{no}</Td>
            <Td><Button>Ver pessoas</Button></Td>
          </Tr>
        </Tbody>
      </Table>
      <br />
      <br />
      <br />
    </Container>
  )
}

export default ReportsBaptism;
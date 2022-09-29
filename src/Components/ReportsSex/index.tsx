import Button from '../Button';
import GraphPieArea from '../GraphPieArea';
import ReportsHeader from '../ReportsHeader';
import Table from '../Table';
import Tbody from '../Tbody';
import Td from '../Td';
import Th from '../Th';
import Thead from '../Thead';
import Tr from '../Tr';
import { Container, Graph } from './styles';


const male = 10
const female = 10

const PieData = {
  labels: ['Feminino', 'Masculino'],
  datasets: [
    {
      labels: '# of Votes',
      data: [male, female],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const ReportsSex = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Sexo' />
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
            <Td>Feminino</Td>
            <Td>{female}</Td>
            <Td><Button>Ver pessoas</Button></Td>
          </Tr>
          <Tr>
            <Td>Masculino</Td>
            <Td>{male}</Td>
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

export default ReportsSex;
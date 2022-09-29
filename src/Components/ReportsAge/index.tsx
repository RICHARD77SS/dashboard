import Button from '../Button';
import GraphPieArea from '../GraphPieArea';
import ReportsHeader from '../ReportsHeader';
import Table from '../Table';
import Tbody from '../Tbody';
import Td from '../Td';
import Th from '../Th';
import Thead from '../Thead';
import Tr from '../Tr';
import { Container, GraphContainer } from './styles';


const children = 2
const teenagers = 10
const youngPeople = 8
const adults = 5
const seniors = 4


const PieData = {
  labels: ['Crianças', 'Adolescentes', 'Jovens', 'Adultos', 'Idosos'],
  datasets: [
    {
      labels: '# of Votes',
      data: [children, teenagers, youngPeople, adults, seniors],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const ReportsAge = () => {
  return (
    <Container>

      <ReportsHeader logo='' corporation='Inc name' reportsName='Faixa etaria' />
      <GraphContainer>
        <GraphPieArea data={PieData} />
      </GraphContainer>
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
            <Td>Crianças</Td>
            <Td>{children}</Td>
            <Td><Button>Ver pessoas</Button></Td>
          </Tr>
          <Tr>
            <Td>Adolescentes</Td>
            <Td>{teenagers}</Td>
            <Td><Button>Ver pessoas</Button></Td>
          </Tr>
          <Tr>
            <Td>Jovens</Td>
            <Td>{youngPeople}</Td>
            <Td><Button>Ver pessoas</Button></Td>
          </Tr>
          <Tr>
            <Td>Adultos</Td>
            <Td>{adults}</Td>
            <Td><Button>Ver pessoas</Button></Td>
          </Tr>
          <Tr>
            <Td>Idosos</Td>
            <Td>{seniors}</Td>
            <Td><Button>Ver pessoas</Button></Td>
          </Tr>
        </Tbody>
      </Table>
      <br />
      <br />
      <br />
      <br />
    </Container>
  )
}

export default ReportsAge;
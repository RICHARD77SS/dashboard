
import GraphContainer from '../GraphConteiner';
import GraphPieArea from '../GraphPieArea';
import ReportsHeader from '../ReportsHeader';
import Table from '../Table';
import Tbody from '../Tbody';
import Td from '../Td';
import Th from '../Th';
import Thead from '../Thead';
import Tr from '../Tr';
import { Container } from './styles';

const localName = 2
const localName2 = 10
const localName3 = 8
const localName4 = 5
const localName5 = 4


const PieData = {
  labels: ['Crianças', 'Adolescentes', 'Jovens', 'Adultos', 'Idosos'],
  datasets: [
    {
      labels: '# of Votes',
      data: [localName, localName2, localName3, localName4, localName5],
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
const ReportsDistrict = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Bairro' />
      <GraphContainer>
        <GraphPieArea data={PieData} />
      </GraphContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Bairro</Th>
            <Th>Pessoas</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Bairro 1</Td>
            <Td>{localName}</Td>
          </Tr>
          <Tr>
            <Td>Bairro 2</Td>
            <Td>{localName2}</Td>
          </Tr>
          <Tr>
            <Td>Bairro 2</Td>
            <Td>{localName3}</Td>
          </Tr>
          <Tr>
            <Td>Bairro 2</Td>
            <Td>{localName4}</Td>
          </Tr>
          <Tr>
            <Td>Bairro 2</Td>
            <Td>{localName5}</Td>
          </Tr>
        </Tbody>
      </Table>
      <br />
      <br />
      <br />
    </Container>
  )
}

export default ReportsDistrict;
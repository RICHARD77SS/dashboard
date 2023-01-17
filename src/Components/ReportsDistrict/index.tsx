
import { useAxios } from '../../hooks/useAxios';
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


const ReportsDistrict = () => {
  const { data } = useAxios('person')
  let district = data?.person.map((person: any) => person.district)
  let districts = district.filter((item: any, i: any) => district.indexOf(item) === i)
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
          {districts?.map((district: any) => {
            return (
              <Tr>
                <Td>{district}</Td>
                <Td>{data?.person.map((person: any) => person.district).filter((i: any) => i === district).length}</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
      <br />
      <br />
      <br />
    </Container>
  )
}

export default ReportsDistrict;
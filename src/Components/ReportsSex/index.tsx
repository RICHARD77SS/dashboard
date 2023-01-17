import { Link } from 'react-router-dom';
import { useAxios } from '../../hooks/useAxios';
import Button from '../Button';
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


const ReportsSex = () => {
  const { data } = useAxios('person')
  let mens = data?.person.map((person: any, index: any) => {
    return person.sex === 'Masculino' ? person.sex : 0
  })
  let male = mens?.filter((i: string) => i === 'Masculino').length

  let womans = data?.person.map((person: any, index: any) => {
    return person.sex === 'Feminino' ? person.sex : 0
  })
  let female = womans?.filter((i: string) => i === 'Feminino').length
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
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Sexo' />
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
            <Td>Feminino</Td>
            <Td>{female}</Td>
            <Td><Link to='/people'><Button>Ver pessoas</Button></Link></Td>
          </Tr>
          <Tr>
            <Td>Masculino</Td>
            <Td>{male}</Td>
            <Td><Link to='/people'><Button>Ver pessoas</Button></Link></Td>
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
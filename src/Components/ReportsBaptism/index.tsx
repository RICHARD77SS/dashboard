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

const ReportsBaptism = () => {
  const { data } = useAxios('person')
  let baptism = data?.person.map((person: any) => person.baptized)
  const yes = baptism?.map((baptizm: any) => baptizm === 'Sim' ? baptizm : 0).filter((i: any) => i === 'Sim').length
  const no = baptism?.map((baptizm: any) => baptizm === 'Não' ? baptizm : 0).filter((i: any) => i === 'Não').length

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
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Batizados' />
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
            <Td>Batizado (sim)</Td>
            <Td>{yes}</Td>
            <Td><Link to='/people'>Ver pessoas</Link></Td>
          </Tr>
          <Tr>
            <Td>Batizado (Não)</Td>
            <Td>{no}</Td>
            <Td><Link to='/people'>Ver pessoas</Link></Td>
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
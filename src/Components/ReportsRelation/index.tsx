import { useAxios } from '../../hooks/useAxios';
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

const ReportsRelation = () => {
  const { data } = useAxios('person')

  let civilState = data?.person.map((person: any) => {
    return person.marital
  })

  const single = civilState?.map((state: string) => state === 'Solteiro(a)' ? state : 0).filter((i: string) => i === 'Solteiro(a)').length
  const married = civilState?.map((state: string) => state === 'Casado(a)' ? state : 0).filter((i: string) => i === 'Casado(a)').length
  const widowed = civilState?.map((state: string) => state === 'Viuvo(a)' ? state : 0).filter((i: string) => i === 'Viuvo(a)').length
  const divorced = civilState?.map((state: string) => state === 'Divorciado(a)' ? state : 0).filter((i: string) => i === 'Divorciado(a)').length
  const other = civilState?.map((state: string) => state === 'Outros' ? state : 0).filter((i: string) => i === 'Outros').length

  console.log(single)
  const PieData = {
    labels: ['Solteiro(a)', 'Casado(a)', 'Viúvo(a)', 'Divorciado(a)', 'Outros'],
    datasets: [
      {
        labels: '# of Votes',
        data: [single, married, widowed, divorced, other],
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
      <ReportsHeader logo='' corporation='Inc name' reportsName='Estado civil' />
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
            <Td>Solteiro(a)</Td>
            <Td>{single}</Td>
            <Td><Button>Ver pessoas</Button></Td>
          </Tr>
          <Tr>
            <Td>Casado(a)</Td>
            <Td>{married}</Td>
            <Td><Button>Ver pessoas</Button></Td>
          </Tr>
          <Tr>
            <Td>Viúvo(a)</Td>
            <Td>{widowed}</Td>
            <Td><Button>Ver pessoas</Button></Td>
          </Tr>
          <Tr>
            <Td>Divorciado(a)</Td>
            <Td>{divorced}</Td>
            <Td><Button>Ver pessoas</Button></Td>
          </Tr>
          <Tr>
            <Td>Outro</Td>
            <Td>{other}</Td>
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

export default ReportsRelation;
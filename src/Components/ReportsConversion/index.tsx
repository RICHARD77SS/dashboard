
import { useAxios } from '../../hooks/useAxios';
import GraphLineArea from '../GraphLineArea';
import Input from '../Input';
import ReportsHeader from '../ReportsHeader';
import {  Container,Content,Graph,  Table,Thead,Tr,Th,Tbody,Td } from './styles';



const ReportsConversion = () => {
  const {data}=useAxios('person')
  let conversionDate = data?.person.map((person: any) => person.conversion)
  console.log(conversionDate)

  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const LineData = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'conversão',
        data: [1222, 212, 313, 414, 166, 778, 919],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Data de conversão' />
      <Content>
        <Input type='data' />
        <Graph>
          <GraphLineArea data={LineData}/>
        </Graph>
        <h3>Resultados: 0</h3>
        <Table>
          <Thead>
            <Tr>
              <Th>Avatar</Th>
              <Th>Nome completo</Th>
              <Th>Data de conversão</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td><img src="" alt="" /></Td>
              <Td>User name</Td>
              <Td>08/09/2022</Td>
            </Tr>

          </Tbody>
        </Table>
      </Content>
    </Container>
  )
}

export default ReportsConversion;
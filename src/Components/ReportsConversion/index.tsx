import React from 'react'
import { useAxios } from '../../hooks/useAxios';
import { NowDate } from '../../utils/getDate';
import GraphLineArea from '../GraphLineArea';
import Input from '../Input';
import ReportsHeader from '../ReportsHeader';
import Table from '../Table';
import Tbody from '../Tbody';
import Td from '../Td';
import Th from '../Th';
import Thead from '../Thead';
import Tr from '../Tr';
import { Container, Content, Graph } from './styles';



const ReportsConversion = () => {
  const { data } = useAxios('person')
  let conversionDate = data?.person.map((person: any) => person.conversion.split('T')[0])

  const [now, setNow] = React.useState(NowDate)
  function nowHandler(event: any) {
    setNow(event.target.value)
  }
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const LineData = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'conversão',
        data: [0,0,0,0,0,0,0],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Data de conversão' />
      <Content>
        <Input type='date' value={now} onChange={nowHandler} />
        <Graph>
          <GraphLineArea data={LineData} />
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
            {data?.person.map((person: any) => {
              return (
                <Tr>
                  <Td><img src={person.image} alt="" /></Td>
                  <Td>{person.name}</Td>
                  <Td>{person.conversion.split('T')[0]}</Td>
                </Tr>
              )
            })}

          </Tbody>
        </Table>
      </Content>
    </Container>
  )
}

export default ReportsConversion;
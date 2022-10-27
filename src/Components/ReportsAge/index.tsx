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
import { Container, GraphContainer } from './styles';





const ReportsAge = () => {
  const { data: dataPerson } = useAxios('person')
  var date = new Date()
  var day = date.getDate()
  var month = date.getMonth() + 1
  var year = date.getFullYear()

  let Age = dataPerson?.person.map((person: any,
    index: number) => {
    var BirthYear = new Date(person.birth)
    var age = year - BirthYear.getFullYear()
    var mont = month - BirthYear.getFullYear()
    return mont < 0 || (mont === 0 && day < BirthYear.getDate()) ? age-- : age
  })

  let AgeGroup = Age?.map((age: any) => {
    let Group = ''
    if (age >= 0 && age <= 12) {
      Group = 'Criança'
    }
    if (age >= 12 && age <= 18) {
      Group = "Adolescente"
    }
    if (age >= 18 && age <= 28) {
      Group = "Jovem"
    }
    if (age >= 28 && age <= 55) {
      Group = "Adulto"
    }
    if (age >= 55 && age <= 145) {
      Group = "Idoso"
    }

    return Group
  })

  let child = AgeGroup?.map((agp: string, index: number) => { return agp === 'Criança' ? agp : 0 })
  let adolescent = AgeGroup?.map((agp: string, index: number) => { return agp === 'Alolescente' ? agp : 0 })
  let young = AgeGroup?.map((agp: string, index: number) => { return agp === 'Jovem' ? agp : 0 })
  let adults = AgeGroup?.map((agp: string, index: number) => { return agp === 'Adulto' ? agp : 0 })
  let seniors = AgeGroup?.map((agp: string, index: number) => { return agp === 'Idoso' ? agp : 0 })

  let Crianca = child?.filter((i: string) => i === 'Criança').length
  let Adolescente = adolescent?.filter((i: string) => i === 'Adolescente').length
  let Jovem = young?.filter((i: string) => i === 'Jovem').length
  let Adulto = adults?.filter((i: string) => i === 'Adulto').length
  let Idoso = seniors?.filter((i: string) => i === 'Idoso').length

  const PieData = {
    labels: ['Crianças', 'Adolescentes', 'Jovens', 'Adultos', 'Idosos'],
    datasets: [
      {
        labels: '# of Votes',
        data: [Crianca, Adolescente, Jovem, Adulto, Idoso],
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
            <Td>{Crianca}</Td>
            <Td><Button>Ver pessoas</Button></Td>
          </Tr>
          <Tr>
            <Td>Adolescentes</Td>
            <Td>{Adolescente}</Td>
            <Td><Button>Ver pessoas</Button></Td>
          </Tr>
          <Tr>
            <Td>Jovens</Td>
            <Td>{Jovem}</Td>
            <Td><Button>Ver pessoas</Button></Td>
          </Tr>
          <Tr>
            <Td>Adultos</Td>
            <Td>{Adulto}</Td>
            <Td><Button>Ver pessoas</Button></Td>
          </Tr>
          <Tr>
            <Td>Idosos</Td>
            <Td>{Idoso}</Td>
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
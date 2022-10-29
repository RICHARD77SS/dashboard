import { Link } from 'react-router-dom';
import { useAxios } from '../../hooks/useAxios';
import Button from '../Button';
import GraphBars from '../GraphBars';
import ReportsHeader from '../ReportsHeader';
import { Container, Graph } from './styles';



const ReportsBirth = () => {
  const { data } = useAxios('person')

  let janeiro = data?.person.map((person: any, index: any) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 1 ? data.getMonth() + 1 : null
  })
  let jan = janeiro?.filter((i: number) => i === 2).length

  let fevereiro = data?.person.map((person: any, index: any) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 2 ? data.getMonth() + 1 : null
  })
  let fev = fevereiro?.filter((i: number) => i === 2).length

  let marco = data?.person.map((person: any, index: any) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 3 ? data.getMonth() + 1 : null
  })
  let mar = marco?.filter((i: number) => i === 3).length

  let abril = data?.person.map((person: any, index: any) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 4 ? data.getMonth() + 1 : null
  })
  let abr = abril?.filter((i: number) => i === 4).length

  let maio = data?.person.map((person: any, index: any) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 5 ? data.getMonth() + 1 : null
  })
  let mai = maio?.filter((i: number) => i === 5).length

  let junho = data?.person.map((person: any, index: any) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 6 ? data.getMonth() + 1 : null
  })
  let jun = junho?.filter((i: number) => i === 6).length

  let julho = data?.person.map((person: any, index: any) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 7 ? data.getMonth() + 1 : null
  })
  let jul = julho?.filter((i: number) => i === 7).length

  let agosto = data?.person.map((person: any, index: any) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 8 ? data.getMonth() + 1 : null
  })
  let ago = agosto?.filter((i: number) => i === 8).length

  let setembro = data?.person.map((person: any, index: any) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 9 ? data.getMonth() + 1 : null
  })
  let set = setembro?.filter((i: number) => i === 9).length

  let outubro = data?.person.map((person: any, index: any) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 10 ? data.getMonth() + 1 : null
  })
  let out = outubro?.filter((i: number) => i === 10).length

  let novembro = data?.person.map((person: any, index: any) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 11 ? data.getMonth() + 1 : null
  })
  let nov = novembro?.filter((i: number) => i === 11).length

  let dezembro = data?.person.map((person: any, index: any) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 12 ? data.getMonth() + 1 : null
  })
  let dez = dezembro?.filter((i: number) => i === 12).length


  const labels = ['Janeiro', 'Fevereiro', 'Maço', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const dat = {
    labels,
    datasets: [
      {
        label: 'Total',
        data: [jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Aniversariantes' />
      <Graph>
        <GraphBars data={dat} />
      </Graph>
      <Link to='/birthday'><Button>Ir para Página de aniversariantes</Button></Link>
      <br />
      <br />
      <br />
    </Container>
  )
}

export default ReportsBirth;
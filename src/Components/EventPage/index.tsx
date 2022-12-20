import { Link, useParams } from 'react-router-dom';
import { useAxios } from '../../hooks/useAxios';
import { formatter } from '../../utils/formatMoneyBr';
import Box from '../Box';
import BoxContent from '../BoxContent';
import BoxHeader from '../BoxHeader';
import Button from '../Button';
import Container from '../Container';
import InputBlock from '../InputBlock';
import { Flex, Block } from './styles'
import TableContainer from '../TableContainer';
import Table from '../Table';
import Thead from '../Thead';
import Th from '../Th';
import Tr from '../Tr';
import Tbody from '../Tbody';
import Td from '../Td';
import GraphLineArea from '../GraphLineArea';
import GraphBars from '../GraphBars';

const EventPage = () => {
  const { data } = useAxios('events')
  const { data: dataRegister } = useAxios('eventsregister')
  const { id } = useParams()


  let eventPage = dataRegister?.eventsRegister.map((events: any) => {
    return (
      events.evento === data?.events[`${id}`]._id ? events : false
    )
  }).filter((i: any) => i !== false)

  let dateNow = new Date()
  var month = dateNow.getMonth() + 1
  var year = dateNow.getFullYear()

  let date = new Date(`${year}-${month}-01`)

  function getAllDays(years: any, months: any) {
    let date = new Date(years, months + 1, 1);
    let dates = []

    while (date.getMonth() === months + 1) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1)
    }
    return dates
  }
  function getAllPastDays(years: any, months: any) {
    let date = new Date(years, months, 1);
    let dates = []

    while (date.getMonth() === months) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1)
    }
    return dates
  }

  let daysInMonth = getAllDays(date.getFullYear(), date.getMonth())
  let daysInPastMonth = getAllPastDays(date.getFullYear(), date.getMonth())

  let registersInDays = daysInMonth?.map((days: any) => eventPage?.map((event: any) => days?.toISOString().split('T')[0] === event.date.split('T')[0] ? 1 : 0).reduce((acc: number, item: number) => acc + item))

  let registersInPastDays = daysInPastMonth?.map((days: any) => eventPage?.map((event: any) => days?.toISOString().split('T')[0] === event.date.split('T')[0] ? 1 : 0).reduce((acc: number, item: number) => acc + item))


  const labels = ['L1'];
  const dataBar = {
    labels,
    datasets: [
      {
        label: 'Total de vagas',
        data: [data?.events[`${id}`].numberOfVacancies],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Pendentes',
        data: [eventPage?.length],
        backgroundColor: 'rgba(235, 174, 53, 0.5)',
      },
      {
        label: 'Confirmados',
        data: [0],
        backgroundColor: 'rgba(86, 53, 235, 0.5)',
      },
      {
        label: 'Disponivel',
        data: [data?.events[`${id}`].numberOfVacancies - eventPage?.length],
        backgroundColor: 'rgba(19, 252, 81, 0.5)',
      },
    ],
  };
  const LineData = {
    labels: daysInMonth?.map((days: any) => days.getDate()),
    datasets: [
      {
        fill: true,
        label: 'Mês atual',
        data: registersInDays,
        borderColor: 'rgb(255, 162, 235)',
        backgroundColor: 'rgba(255, 162, 235, 0.5)',
      },
      {
        fill: true,
        label: 'Mês anterior',
        data: registersInPastDays,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  let copy = `http://localhost:3000/schedule/event/eventregister/${id}`
  return (
    <Container>
      <Box width='100%'>
        <BoxHeader title='Informações'>
          <Link to={`/scheduleevents`}>
            <Button type='button'>Voltar</Button>
          </Link>
          <Link to={`/schedule/event/eventregister/${id}`}>
            <Button type='button'>Pagina</Button>
          </Link>
          <Button onClick={() => navigator.clipboard.writeText(copy)} type='button'>Link</Button>
          <Link to={`/schedule/event/addevent/${id}`}>
            <Button type='button'>Editar</Button>
          </Link>
        </BoxHeader>
        <BoxContent width='100%'>
          <Flex>
            <InputBlock>
              <p>Título</p>
              <p><b>{data?.events[`${id}`].name}</b></p>
            </InputBlock>
            <InputBlock>
              <p>Subtítulo</p>
              <p><b>{data?.events[`${id}`].subName}</b></p>
            </InputBlock>
            <InputBlock>
              <p>Data</p>
              <p><b>{data?.events[`${id}`].startDate.split('T')[0]} a {data?.events[`${id}`].endDate.split('T')[0]}</b></p>
            </InputBlock>
            <InputBlock>
              <p>Valor</p>
              <p><b>{formatter.format(data?.events[`${id}`].value)}</b></p>
            </InputBlock>
          </Flex>
        </BoxContent>
      </Box>
      <Box width='50%'>
        <BoxHeader title='Inscrições'></BoxHeader>
        <BoxContent width='100%'>
          <Block>
            <h2>0</h2>
            <p>Confirmados</p>
          </Block>
          <Flex>
            <Block>
              <h2>{eventPage?.length}</h2>
              <p>Pendentes</p>

            </Block>
            <Block>
              <h2>0</h2>
              <p>Cancelados</p>

            </Block>
            <Block>
              <h2>{data?.events[`${id}`].numberOfVacancies - eventPage?.length}</h2>
              <p>Disponiveis</p>
            </Block>
          </Flex>
        </BoxContent>
      </Box>
      <Box width='50%'>
        <BoxHeader title='Faturamento'></BoxHeader>
        <BoxContent>
          <Block>
            <h2>R$ 0,00</h2>
            <p>Total recebido</p>
          </Block>
        </BoxContent>
      </Box>
      <Box width='50%'>
        <BoxHeader title='Lotes'></BoxHeader>
        <BoxContent>
          <GraphBars data={dataBar} />
        </BoxContent>
      </Box>
      <Box width='50%'>
        <BoxHeader title='Inscrições por período'></BoxHeader>
        <BoxContent>
          <GraphLineArea data={LineData} />
        </BoxContent>
      </Box>
      <Box width='50%'>
        <BoxHeader title='Inscrições'></BoxHeader>
        <BoxContent>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Status</Th>
                  <Th>E-mail</Th>
                  <Th>Telefone</Th>
                  <Th>Data</Th>
                </Tr>
              </Thead>
              <Tbody>
                {eventPage?.map((events: any, index: number) => {
                  return (
                    <Tr key={index}>
                      <Td>{events.name}</Td>
                      <Td>{events.status}</Td>
                      <Td>{events.email}</Td>
                      <Td>{events.phone}</Td>
                      <Td>{events.date.split('T')[0]}</Td>
                    </Tr>

                  )
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </BoxContent>
      </Box>
    </Container>
  )
}

export default EventPage;
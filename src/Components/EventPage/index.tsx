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
  const { id } = useParams()
  console.log(id)




  const labels = ['L1'];

  const dataBar = {
    labels,
    datasets: [
      {
        label: 'Total de vagas',
        data: [1],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Pendentes',
        data: [1],
        backgroundColor: 'rgba(235, 174, 53, 0.5)',
      },
      {
        label: 'Confirmados',
        data: [1],
        backgroundColor: 'rgba(86, 53, 235, 0.5)',
      },
      {
        label: 'Disponivel',
        data: [1],
        backgroundColor: 'rgba(19, 252, 81, 0.5)',
      },
    ],
  };
  const LineData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    datasets: [
      {
        fill: true,
        label: 'Mês atual',
        data: [1],
        borderColor: 'rgb(255, 162, 235)',
        backgroundColor: 'rgba(255, 162, 235, 0.5)',
      },
      {
        fill: true,
        label: 'Mês anterior',
        data: [1],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <Container>
      <Box width='100%'>
        <BoxHeader title='Informações'>
          <Button type='button'>Voltar</Button>
          <Button type='button'>Pagina</Button>
          <Button type='button'>Link</Button>
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
              <h2>0</h2>
              <p>Pendentes</p>

            </Block>
            <Block>
              <h2>0</h2>
              <p>Cancelados</p>

            </Block>
            <Block>
              <h2>0</h2>
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
                <Tr>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </BoxContent>
      </Box>
    </Container>
  )
}

export default EventPage;
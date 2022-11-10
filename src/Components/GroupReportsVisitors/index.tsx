import React from 'react';
import { MeetingsContext } from '../../contexts/meetingsContext';
import { useAxios } from '../../hooks/useAxios';
import GraphLineArea from '../GraphLineArea';
import Input from '../Input';
import ReportsHeader from '../ReportsHeader';

import { Container, Content, Graph, Block, Flex } from './styles';



const GroupReportsVisitors = () => {
  const { data: dataMeetings } = useAxios('meetings')
  const { period, periodHandler } = React.useContext(MeetingsContext)

  let participantsAndDate = dataMeetings?.meetings.reduce((acc: any, item: any) => {
    if (!acc[item.date.split('T')[0]]) {
      acc[item.date.split('T')[0]] = item.participants.length
    } else {
      acc[item.date.split('T')[0]].push(item.participants)
    }
    return acc
  }, {})

  let visitorsAndDate = dataMeetings?.meetings.reduce((acc: any, item: any) => {
    if (!acc[item.date.split('T')[0]]) {
      acc[item.date.split('T')[0]] = item.visitors.length
    } else {
      acc[item.date.split('T')[0]].push(item.visitors)
    }
    return acc
  }, {})

  let participantsValues: any = participantsAndDate ? Object.values(participantsAndDate) : 0

  let visitorsValues: any = visitorsAndDate ? Object.values(visitorsAndDate) : 0

  let sum: number[] = [];

  for (var i = 0; i < participantsValues.length; i++) {
    sum.push((participantsValues[i] + visitorsValues[i]));
  }

  const labels = participantsAndDate ? Object.keys(participantsAndDate).map((gdate: any) => new Date(gdate).getMonth() + 1 === new Date(period).getMonth() + 1 ? gdate : -1).filter((date: any) => date !== -1) : 0;

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Participantes',
        data: participantsAndDate ? Object.values(participantsAndDate) : 0,
        borderColor: 'rgb(255, 162, 235)',
        backgroundColor: 'rgba(255, 162, 235, 0.5)',
      },
      {
        fill: true,
        label: 'Visitantes',
        data: visitorsAndDate ? Object.values(visitorsAndDate) : 0,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        fill: true,
        label: 'Total',
        data: sum,
        borderColor: 'rgb(53, 235, 159)',
        backgroundColor: 'rgba(93, 235, 53, 0.5)',
      },
    ],
  };

  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Frequências de Participantes e Visitantes' />
      <Content>
        <Block>
          <h3>Resultados referentes ao mês</h3>
          <Flex>
            <Input type='date' value={period} onChange={periodHandler} />
          </Flex>
        </Block>
        <Graph>
          <GraphLineArea data={data} />
        </Graph>
      </Content>
    </Container>
  )
}

export default GroupReportsVisitors;
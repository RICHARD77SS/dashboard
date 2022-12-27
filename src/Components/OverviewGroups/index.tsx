import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Content from "../Content";
import GrapPieArea from "../GraphPieArea";

import { Status, Situation, Graph, MeetingsContainer } from "./styles";
import { Link } from 'react-router-dom';
import { useAxios } from "../../hooks/useAxios";
const OverviewGroups = () => {
  let dateNow = new Date()
  let monthNow = dateNow.getMonth()


  const { data: groupCategory } = useAxios('groupCategory')
  const { data: dataGroups } = useAxios('groups')
  const { data: dataMeetings } = useAxios('meetings')

  let label = groupCategory?.groupCategory.map((name: any) => name.name)

  let groupCategoryValues = label?.map((labels: any) => {
    return dataGroups?.groups.map((groups: any) => groups.category).flat(1).filter((category: any) => category === labels).length
  })
  const PieData = {

    labels: label,
    datasets: [
      {
        labels: '# of Votes',
        data: groupCategoryValues,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  let allGroups = dataGroups?.groups.length

  let active = dataGroups?.groups.map((groups: any) =>
    dataMeetings?.meetings.map((meetings: any) => groups.name === meetings.group ? parseInt(meetings.date.split('T')[0].split('-')[1]) === monthNow ? 1 : 0 : 0).reduce((acc: number, item: number) => acc + item)).filter((item: any) => item !== 0).length

  let inactive = allGroups - active

  return (
    <Content>
      <Box width='500px'>
        <BoxHeader title='Situação de grupos'>
        </BoxHeader>
        <BoxContent>
          <Status>
            <Situation>
              <p>Todos</p>
              <h2>{allGroups}</h2>
              <p>100%</p>
            </Situation>
            <Situation>
              <p>Ativos</p>
              <h2>{active}</h2>
              <p>{active / allGroups * 100}%</p>
            </Situation>
            <Situation>
              <p>Inativos</p>
              <h2>{inactive}</h2>
              <p>{inactive / allGroups * 100}%</p>
            </Situation>
          </Status>
          <p>Grupos que enviaram frequência de reunião nos últimos 30 dias são automaticamente marcados como ATIVOS.</p>
        </BoxContent>
      </Box>
      <Box width='400px'>
        <BoxHeader title="Grupos">
          <Button><Link to='/groupcategories' >Ver Todos</Link></Button>
        </BoxHeader>
        <BoxContent width='400px'>
          <Graph>
            <GrapPieArea data={PieData} />
          </Graph>
        </BoxContent>
      </Box>
      <Box width='400px'>
        <BoxHeader title='Reuniões'>
          <Button><Link to='/groupreports/meetings'>Ver todos</Link></Button>
        </BoxHeader>
        <BoxContent>
          {dataMeetings?.meetings.map((meetings: any) => parseInt(meetings.date?.split('T')[0]?.split('-')[1]) === monthNow ?
            <MeetingsContainer>
              <h3>{meetings.subject}</h3>
              <h5>{meetings.date?.split('T')[0]}</h5>
            </MeetingsContainer>
            : null)}
        </BoxContent>
      </Box>
    </Content>
  )
}

export default OverviewGroups;
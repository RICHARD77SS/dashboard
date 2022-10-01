import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Content from "../Content";
import GrapPieArea from "../GraphPieArea";

import { Status, Situation, Graph } from "./styles";
import { Link } from 'react-router-dom';

const PieData = {
  labels: ['Crianças', 'Adolescentes', 'Jovens', 'Adultos', 'Casais', 'Famílias', 'New categorie'],
  datasets: [
    {
      labels: '# of Votes',
      data: [6, 2, 3, 5, 2, 5, 10],
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
const OverviewGroups = () => {
  return (
    <Content>
      <Box>
        <BoxHeader title='Situação'>
        </BoxHeader>
        <BoxContent>
          <Status>
            <Situation>
              <p>Todos</p>
              <h2>0</h2>
              <p>100%</p>
            </Situation>
            <Situation>
              <p>Ativos</p>
              <h2>0</h2>
              <p>NaN%</p>
            </Situation>
            <Situation>
              <p>Inativos</p>
              <h2>0</h2>
              <p>NaN%</p>
            </Situation>
          </Status>
          <p>Grupos que enviaram frequência de reunião nos últimos 30 dias são automaticamente marcados como ATIVOS.</p>
        </BoxContent>
      </Box>
      <Box>
        <BoxHeader title="Grupos">
          <Button><Link to='/groupcategories' >Ver Todos</Link></Button>
        </BoxHeader>
        <BoxContent>
          <Graph>
            <GrapPieArea data={PieData} />
          </Graph>
        </BoxContent>
      </Box>
      <Box>
        <BoxHeader title='Reuniões'>
          <Button><Link to='/groupreports/meetings'>Ver todos</Link></Button>
        </BoxHeader>
        <BoxContent>

        </BoxContent>
      </Box>
    </Content>
  )
}

export default OverviewGroups;
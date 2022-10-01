import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Content from "../Content"
import GraphLineArea from "../GraphLineArea";
import Input from "../Input";

import { Graph } from './styles';

const LineData = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  datasets: [
    {
      fill: true,
      label: 'Receitas',
      data: [1222, 212, 313, 414, 166, 778, 919, 0, 100, 200, 400, 500],
      borderColor: 'rgb(65, 176, 37)',
      backgroundColor: 'rgba(32, 248, 3, 0.5)',
    },
    {
      fill: true,
      label: 'Despesas',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(255, 15, 15)',
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
    },
    {
      fill: true,
      label: 'A receber',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(53, 174, 235)',
      backgroundColor: 'rgba(53, 181, 235, 0.5)',
    },
    {
      fill: true,
      label: 'A pagar',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(235, 93, 53)',
      backgroundColor: 'rgba(235, 99, 53, 0.5)',
    },
  ],
};

const LineData2 = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  datasets: [
    {
      fill: true,
      label: 'Receitas',
      data: [1222, 212, 313, 414, 166, 778, 919, 0, 100, 200, 400, 500],
      borderColor: 'rgb(65, 176, 37)',
      backgroundColor: 'rgba(32, 248, 3, 0.5)',
    },
    {
      fill: true,
      label: 'Despesas',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(255, 15, 15)',
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
    },
    {
      fill: true,
      label: 'A receber',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(53, 174, 235)',
      backgroundColor: 'rgba(53, 181, 235, 0.5)',
    },
    {
      fill: true,
      label: 'A pagar',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(235, 93, 53)',
      backgroundColor: 'rgba(235, 99, 53, 0.5)',
    },
  ],
};

const FinancialGraphs = () => {
  return (
    <Content>
      <Box>
        <BoxHeader>
          <h3>Resumo anual</h3>
          <Input type='text' list='year' placeholder='  Periodo' />
          <datalist id='year'>
            <option value='2022' />
            <option value='2021' />
            <option value='2020' />
            <option value='2019' />
            <option value='2018' />
          </datalist>
        </BoxHeader>
        <BoxContent>
          <Graph>
            <GraphLineArea data={LineData} />
          </Graph>
        </BoxContent>
      </Box>
      <Box>
        <BoxHeader>
          <h3>Resumo mensal</h3>
          <Input type='text' list='month' placeholder='  Periodo' />
          <datalist id='month'>
            <option value='setembro - 2022' />
            <option value='agosto - 2022' />
            <option value='julho - 2022' />
            <option value='junho - 2022' />
            <option value='maio - 2022' />
            <option value='abril - 2022' />
            <option value='março - 2022' />
            <option value='fevereiro - 2022' />
            <option value='janeiro - 2022' />
          </datalist>
        </BoxHeader>
        <BoxContent>
          <Graph>
            <GraphLineArea data={LineData2} />
          </Graph>
        </BoxContent>
      </Box>
    </Content>
  )
}

export default FinancialGraphs;
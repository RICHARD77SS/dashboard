import React from 'react'
import { useAxios } from '../../hooks/useAxios';
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Content from "../Content"
import GraphLineArea from "../GraphLineArea";


import { Graph } from './styles';



const FinancialGraphs = () => {
  const { data: dataFinancial } = useAxios('financial')

  let dateNow = new Date()
  var day = dateNow.getDate()
  var month = dateNow.getMonth() + 1
  var year = dateNow.getFullYear()
  const [financialMonth, setFinancialMonth] = React.useState('1')
  const [financialYear, setFinancialYear] = React.useState(year.toString())

  let date = new Date(`${financialYear}-${financialMonth}-01`)

  function getAllDays(years: any, months: any) {
    const date = new Date(years, months, 1);
    const dates = []

    while (date.getMonth() === months) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return dates
  }


  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


  const monthDays: number[] = getAllDays(date.getFullYear(), date.getMonth()).map((date: any) => new Date(date).getDate())

  let days = dataFinancial?.financial.map((financial: any) => {
    return { "data": new Date(financial.date.split('T')[0]), "valor": financial.value, "despesas": financial.revenuesExpenses, "status": financial.paidOut }
  })


  let daysValuesRevenues = monthDays?.map((dayy: any) => {
    let vals = days?.map((dateDay: any) => dateDay.data.getDate() + 1 === dayy && dateDay.data.getMonth() + 1 === parseInt(financialMonth) && dateDay.despesas === true && dateDay.status === 'Pago' ? dateDay.valor : 0).filter((dd: any) => dd !== 0)

    return vals?.length === 0 ? 0 : vals?.reduce(function (soma: any, i: any) {
      return soma + i;
    });
  })
  let daysValuesExpenses = monthDays?.map((dayy: any) => {
    let vals = days?.map((dateDay: any) => dateDay.data.getDate() + 1 === dayy && dateDay.data.getMonth() + 1 === parseInt(financialMonth) && dateDay.despesas === false && dateDay.status === 'Pago' ? dateDay.valor : 0).filter((dd: any) => dd !== 0)

    return vals?.length === 0 ? 0 : vals?.reduce(function (soma: any, i: any) {
      return soma + i;
    });
  })
  let daysValuesRevenuesPending = monthDays?.map((dayy: any) => {
    let vals = days?.map((dateDay: any) => dateDay.data.getDate() + 1 === dayy && dateDay.data.getMonth() + 1 === parseInt(financialMonth) && dateDay.despesas === true && dateDay.status === 'Pendente' ? dateDay.valor : 0).filter((dd: any) => dd !== 0)

    return vals?.length === 0 ? 0 : vals?.reduce(function (soma: any, i: any) {
      return soma + i;
    });
  })
  let daysValuesExpensesPending = monthDays?.map((dayy: any) => {
    let vals = days?.map((dateDay: any) => dateDay.data.getDate() + 1 === dayy && dateDay.data.getMonth() + 1 === parseInt(financialMonth) && dateDay.despesas === false && dateDay.status === 'Pendente' ? dateDay.valor : 0).filter((dd: any) => dd !== 0)

    return vals?.length === 0 ? 0 : vals?.reduce(function (soma: any, i: any) {
      return soma + i;
    });
  })


  let monthValuesRevenues = months?.map((monthss: any) => {
    let vals = days?.map((dateDay: any) => monthss === dateDay.data.getMonth() + 1 && dateDay.data.getFullYear() === parseInt(financialYear) && dateDay.despesas === true && dateDay.status === 'Pago' ? dateDay.valor : 0).filter((dd: any) => dd !== 0)

    return vals?.length === 0 ? 0 : vals?.reduce(function (soma: any, i: any) {
      return soma + i;
    });
  })
  let monthValuesExpenses = months?.map((monthss: any) => {
    let vals = days?.map((dateDay: any) => monthss === dateDay.data.getMonth() + 1 && dateDay.data.getFullYear() === parseInt(financialYear) && dateDay.despesas === false && dateDay.status === 'Pago' ? dateDay.valor : 0).filter((dd: any) => dd !== 0)

    return vals?.length === 0 ? 0 : vals?.reduce(function (soma: any, i: any) {
      return soma + i;
    });
  })


  let monthValuesRevenuesPending = months?.map((monthss: any) => {
    let vals = days?.map((dateDay: any) => monthss === dateDay.data.getMonth() + 1 && dateDay.data.getFullYear() === parseInt(financialYear) && dateDay.despesas === true && dateDay.status === 'Pendente' ? dateDay.valor : 0).filter((dd: any) => dd !== 0)

    return vals?.length === 0 ? 0 : vals?.reduce(function (soma: any, i: any) {
      return soma + i;
    });
  })

  let monthValuesExpensesPending = months?.map((monthss: any) => {
    let vals = days?.map((dateDay: any) => monthss === dateDay.data.getMonth() + 1 && dateDay.data.getFullYear() === parseInt(financialYear) && dateDay.despesas === false && dateDay.status === 'Pendente' ? dateDay.valor : 0).filter((dd: any) => dd !== 0)

    return vals?.length === 0 ? 0 : vals?.reduce(function (soma: any, i: any) {
      return soma + i;
    });
  })


  function monthValueHandler(event: any) {
    setFinancialMonth(event.target.value)
  }
  function yearValueHandler(event: any) {
    setFinancialYear(event.target.value)
  }


  const LineData = {

    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [
      {
        fill: true,
        label: 'Receitas',
        data: monthValuesRevenues,
        borderColor: 'rgb(65, 176, 37)',
        backgroundColor: 'rgba(32, 248, 3, 0.5)',
      },
      {
        fill: true,
        label: 'Despesas',
        data: monthValuesExpenses,
        borderColor: 'rgb(255, 15, 15)',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
      },
      {
        fill: true,
        label: 'A receber',
        data: monthValuesRevenuesPending,
        borderColor: 'rgb(53, 174, 235)',
        backgroundColor: 'rgba(53, 181, 235, 0.5)',
      },
      {
        fill: true,
        label: 'A pagar',
        data: monthValuesExpensesPending,
        borderColor: 'rgb(235, 93, 53)',
        backgroundColor: 'rgba(235, 99, 53, 0.5)',
      },
    ],
  };

  const LineData2 = {
    labels: monthDays,
    datasets: [
      {
        fill: true,
        label: 'Receitas',
        data: daysValuesRevenues,
        borderColor: 'rgb(65, 176, 37)',
        backgroundColor: 'rgba(32, 248, 3, 0.5)',
      },
      {
        fill: true,
        label: 'Despesas',
        data: daysValuesExpenses,
        borderColor: 'rgb(255, 15, 15)',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
      },
      {
        fill: true,
        label: 'A receber',
        data: daysValuesRevenuesPending,
        borderColor: 'rgb(53, 174, 235)',
        backgroundColor: 'rgba(53, 181, 235, 0.5)',
      },
      {
        fill: true,
        label: 'A pagar',
        data: daysValuesExpensesPending,
        borderColor: 'rgb(235, 93, 53)',
        backgroundColor: 'rgba(235, 99, 53, 0.5)',
      },
    ],
  };
  return (
    <Content>
      <Box>
        <BoxHeader>
          <h3>Resumo anual</h3>
          <select title='year' onChange={(event) => yearValueHandler(event)}>
            <option value={year} >{year}</option>
            <option value={year - 1} >{year - 1}</option>
            <option value={year - 2} >{year - 2}</option>
            <option value={year - 3} >{year - 3}</option>
            <option value={year - 4} >{year - 4}</option>
            <option value={year - 5} >{year - 5}</option>
          </select>
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
          <select title='month' onChange={(event) => monthValueHandler(event)}>
            <option value='1' >Janeiro</option>
            <option value='2' >Fevereiro</option>
            <option value='3' >Março</option>
            <option value='4' >Abril</option>
            <option value='5' >Maio</option>
            <option value='6' >Junho</option>
            <option value='7' >Julho</option>
            <option value='8' >Agosto</option>
            <option value='9' >Setembro</option>
            <option value='10' >Outubro</option>
            <option value='11' >Novembro</option>
            <option value='12' >Dezembro</option>
          </select>
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
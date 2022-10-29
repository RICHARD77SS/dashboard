import React from 'react'
import { FiUser, FiUsers } from "react-icons/fi";
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";

import GraphLineArea from "../GraphLineArea"

import { Flex, Graph, Grid1, GraphContainer, Datalist, Div, User, Image } from './styles'
import Block from "../Block";
import GraphPieArea from "../GraphPieArea";
import { Link } from 'react-router-dom';
import { useAxios } from "../../hooks/useAxios";
import Content from '../Content';


const OverviewPersons = () => {
  const { data: dataPerson } = useAxios('person')
  const { data: dataCategory } = useAxios('category')

  var date = new Date()
  var day = date.getDate()
  var month = date.getMonth() + 1
  var year = date.getFullYear()

  let birthdayMonth = dataPerson?.person.map((person: any) => {
    let dateBirth = new Date(person.birth).getMonth() + 1
    return dateBirth === month ? { name: person.name, image: person.image } : null;
  });

  function getAllDays(years: any, months: any) {
    const date = new Date(years, months, 1);
    const dates = []

    while (date.getMonth() === months) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return dates
  }
  //------------------------------------
  let monthString: number[] = getAllDays(date.getFullYear(), date.getMonth()).map((date: any) => new Date(date).getDate())
  let semanalString: string[] = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex']
  let anualString: string[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'ago', 'set', 'out', 'nov', 'dez']

  let jan = dataPerson?.person.map((person: any, index: any) => {
    const registerMonth = new Date(person.registerDate).getMonth() + 1
    return registerMonth === 1 ? registerMonth : 0
  })?.filter((i: number) => i === 1).length

  let feb = dataPerson?.person.map((person: any, index: any) => {
    const registerMonth = new Date(person.registerDate).getMonth() + 1
    return registerMonth === 2 ? registerMonth : 0
  })?.filter((i: number) => i === 2).length


  let mar = dataPerson?.person.map((person: any, index: any) => {
    const registerMonth = new Date(person.registerDate).getMonth() + 1
    return registerMonth === 3 ? registerMonth : 0
  })?.filter((i: number) => i === 3).length

  let abr = dataPerson?.person.map((person: any, index: any) => {
    const registerMonth = new Date(person.registerDate).getMonth() + 1
    return registerMonth === 4 ? registerMonth : 0
  })?.filter((i: number) => i === 4).length

  let may = dataPerson?.person.map((person: any, index: any) => {
    const registerMonth = new Date(person.registerDate).getMonth() + 1
    return registerMonth === 5 ? registerMonth : 0
  })?.filter((i: number) => i === 5).length


  let jun = dataPerson?.person.map((person: any, index: any) => {
    const registerMonth = new Date(person.registerDate).getMonth() + 1
    return registerMonth === 6 ? registerMonth : 0
  })?.filter((i: number) => i === 6).length


  let jul = dataPerson?.person.map((person: any, index: any) => {
    const registerMonth = new Date(person.registerDate).getMonth() + 1
    return registerMonth === 7 ? registerMonth : 0
  })?.filter((i: number) => i === 7).length


  let aug = dataPerson?.person.map((person: any, index: any) => {
    const registerMonth = new Date(person.registerDate).getMonth() + 1
    return registerMonth === 8 ? registerMonth : 0
  })?.filter((i: number) => i === 8).length


  let sep = dataPerson?.person.map((person: any, index: any) => {
    const registerMonth = new Date(person.registerDate).getMonth() + 1
    return registerMonth === 9 ? registerMonth : 0
  })?.filter((i: number) => i === 9).length


  let oct = dataPerson?.person.map((person: any, index: any) => {
    const registerMonth = new Date(person.registerDate).getMonth() + 1
    return registerMonth === 10 ? registerMonth : 0
  })?.filter((i: number) => i === 10).length


  let nov = dataPerson?.person.map((person: any, index: any) => {
    const registerMonth = new Date(person.registerDate).getMonth() + 1
    return registerMonth === 11 ? registerMonth : 0
  })?.filter((i: number) => i === 11).length


  let dez = dataPerson?.person.map((person: any, index: any) => {
    const registerMonth = new Date(person.registerDate).getMonth() + 1
    return registerMonth === 12 ? registerMonth : 0
  })?.filter((i: number) => i === 12).length

  //--------------------------------

  let monday = dataPerson?.person.map((person: any, index: any) => {
    let day = new Date(person.registerDate).getDay() + 1
    return day === 1 ? day : 0
  })?.filter((i: number) => i === 1).length


  let tuesday = dataPerson?.person.map((person: any, index: any) => {
    let day = new Date(person.registerDate).getDay() + 1
    return day === 2 ? day : 0
  })?.filter((i: number) => i === 2).length


  let wednesday = dataPerson?.person.map((person: any, index: any) => {
    let day = new Date(person.registerDate).getDay() + 1
    return day === 3 ? day : 0
  })?.filter((i: number) => i === 3).length

  let thursday = dataPerson?.person.map((person: any, index: any) => {
    let day = new Date(person.registerDate).getDay() + 1
    return day === 4 ? day : 0
  })?.filter((i: number) => i === 4).length


  let friday = dataPerson?.person.map((person: any, index: any) => {
    let day = new Date(person.registerDate).getDay() + 1
    return day === 5 ? day : 0
  })?.filter((i: number) => i === 5).length


  let saturnday = dataPerson?.person.map((person: any, index: any) => {
    let day = new Date(person.registerDate).getDay() + 1
    return day === 6 ? day : 0
  })?.filter((i: number) => i === 6).length


  let sunday = dataPerson?.person.map((person: any, index: any) => {
    let day = new Date(person.registerDate).getDay() + 1
    return day === 7 ? day : 0
  })?.filter((i: number) => i === 7).length


  //--------------------------------

  let dayDate = dataPerson?.person.map((person: any, index: any) => {
    let dayDate = new Date(person.registerDate).getDate()
    return dayDate
  })
  let perMonth = monthString?.map((day: any) => {
    return dayDate?.map((dateDay: any) => dateDay).filter((dt: any) => dt === day).length
  })

  //--------------------
  const [periodo, setPeriodo] = React.useState('Mensal')
  function periodoHandler(event: any) {
    setPeriodo(event.target.value)
  }

  let homens = dataPerson?.person.map((person: any, index: any) => {
    return person.sex === 'masculino' ? person.sex : 0
  })
  let mens = homens?.filter((i: string) => i === 'masculino').length

  let mulheres = dataPerson?.person.map((person: any, index: any) => {
    return person.sex === 'feminino' ? person.sex : 0
  })
  let mulh = mulheres?.filter((i: string) => i === 'feminino').length

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



  let Crianca = AgeGroup?.map((agp: string, index: number) => { return agp === 'Criança' ? agp : 0 })?.filter((i: string) => i === 'Criança').length
  let Adolescente = AgeGroup?.map((agp: string, index: number) => { return agp === 'Alolescente' ? agp : 0 })?.filter((i: string) => i === 'Adolescente').length
  let Jovem = AgeGroup?.map((agp: string, index: number) => { return agp === 'Jovem' ? agp : 0 })?.filter((i: string) => i === 'Jovem').length
  let Adulto = AgeGroup?.map((agp: string, index: number) => { return agp === 'Adulto' ? agp : 0 })?.filter((i: string) => i === 'Adulto').length
  let Idoso = AgeGroup?.map((agp: string, index: number) => { return agp === 'Idoso' ? agp : 0 })?.filter((i: string) => i === 'Idoso').length


  let cat = dataCategory?.category.map((category: any, index: number) => {

    return category.categoryName
  })

  let valueCategory = cat?.map((categ: any) => {
    return dataPerson?.person.map((person: any) => person.category).filter((category: any) => category === categ).length
  })




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

  const PieDataCategories = {
    labels: cat,
    datasets: [
      {
        labels: '# of Votes',
        data: valueCategory,
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

  const labels = periodo === 'Mensal' ? monthString : periodo === 'Semanal' ? semanalString : periodo === 'Anual' ? anualString : null;
  const LineData = {
    labels,
    datasets: [
      {
        fill: true,
        label: periodo === 'Mensal' ? 'Mes Atual' : periodo === 'Semanal' ? 'Semana Atual' : periodo === 'Anual' ? 'Ano Atual' : null,
        data: periodo === 'Mensal' ? perMonth : periodo === 'Semanal' ? [monday, tuesday, wednesday, thursday, friday, saturnday, sunday] : periodo === 'Anual' ? [jan, feb, mar, abr, may, jun, jul, aug, sep, oct, nov, dez] : null,
        borderColor: 'rgb(255, 162, 235)',
        backgroundColor: 'rgba(255, 162, 235, 0.5)',
      },
      {
        fill: true,
        label: periodo === 'Mensal' ? 'Mes Anterior' : periodo === 'Semanal' ? 'Semana Anterior' : periodo === 'Anual' ? 'Ano Anterior' : null,
        data: periodo === 'Mensal' ? perMonth : periodo === 'Semanal' ? [monday, tuesday, wednesday, thursday, friday, saturnday, sunday] : periodo === 'Anual' ? [jan, feb, mar, abr, may, jun, jul, aug, sep, oct, nov, dez] : null,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Content>
      <Block>
        <Grid1>
          <Div>
            <FiUsers size="25" />
            <p>Total de pessoas:</p>
            <h3>{dataPerson?.person.length}</h3>
          </Div>
          <Div>
            <FiUser size="25" />

            <h3>{mens / dataPerson?.person.length * 100}% <span>({mens})</span> </h3>
            <p>Total de Homens</p>
          </Div>
          <Div>
            <FiUser size="25" />
            <h3>{mulh / dataPerson?.person.length * 100}% <span>({mulh})</span></h3>
            <p>Total de Mulheres </p>
          </Div>
        </Grid1>
        <Box width='620px'>
          <BoxHeader title='Novos Convertidos'>
            <Datalist>
              <select title='period' placeholder='  Selecione o periodo' value={periodo} onChange={periodoHandler} >
                <option value="Mensal" >Mensal</option>
                <option value="Semanal">Semmanal</option>
                <option value="Anual">Anual</option>
              </select>
            </Datalist>
          </BoxHeader>
          <BoxContent>
            <Graph>
              <GraphLineArea data={LineData} />
            </Graph>
          </BoxContent>
        </Box>
        <Content>
          <Box width='300px'>
            <BoxHeader title='Cadastros recentes'>

              <Button><Link to='/people' >Ver Todos</Link></Button>
            </BoxHeader>
            <BoxContent>
              {dataPerson?.person.map((person: any, index: number) => {

                return (
                  <User key={index}>
                    <Image>
                      <img src={person.image} alt="" />
                    </Image>
                    <p>{person.name}</p>
                  </User>
                )
              })}
            </BoxContent>
          </Box>
          <Box width='300px'>
            <BoxHeader title='Aniversariantes do mês'>
            </BoxHeader>
            <BoxContent>
              {birthdayMonth?.map((person: any, index: number) => {
                if (person?.name || person?.image)
                  return (
                    <User key={index}>
                      <Image>
                        <img src={person?.image} alt="" />
                      </Image>
                      <p>{person?.name}</p>
                    </User>

                  )
                return <></>
              })}
            </BoxContent>
          </Box>
        </Content>

      </Block>
      <Flex>
        <Box width='350px'>
          <BoxHeader title='Categorias'>
            <Button><Link to='/categories' >Ver Todos</Link></Button>
          </BoxHeader>
          <BoxContent>
            <GraphContainer>
              <GraphPieArea data={PieDataCategories} />
            </GraphContainer>
          </BoxContent>
        </Box>
        <Box width='350px'>
          <BoxHeader title='Faixa etária'>
          </BoxHeader>
          <BoxContent>
            <GraphContainer>
              <GraphPieArea data={PieData} />
            </GraphContainer>
          </BoxContent>
        </Box>
      </Flex>
    </Content>
  )
}

export default OverviewPersons;
import { FiUser, FiUsers } from "react-icons/fi";
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Input from "../Input";
import GraphLineArea from "../GraphLineArea"

import { Graph, Graph1, Grid1, GraphContainer, Datalist, Div, User, Image } from './styles'
import Content from "../Content";
import Block from "../Block";
import GraphPieArea from "../GraphPieArea";
import { Link } from 'react-router-dom';


const PieDataCategories = {
  labels: ['Categorie', 'Categorie1'],
  datasets: [
    {
      labels: '# of Votes',
      data: [12, 19 ],
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
const PieData = {
  labels: ['Crianças', 'Adolescentes', 'Jovens', 'Adultos', 'Idosos'],
  datasets: [
    {
      labels: '# of Votes',
      data: [12, 19, 3, 5, 2],
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const LineData = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Ano atual',
      data: [122, 212, 313, 414, 166, 778, 2919],
      borderColor: 'rgb(255, 162, 235)',
      backgroundColor: 'rgba(255, 162, 235, 0.5)',
    },
    {
      fill: true,
      label: 'Ano anterior',
      data: [1222, 212, 313, 414, 166, 778, 919],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};



const OverviewPersons = () => {
  return (
    <Content>
      <Block>
        <Grid1>
          <Div>
            <FiUsers size="25" />
            <h3>1</h3>
            <p>Total de pessoas</p>
          </Div>
          <Div>
            <FiUser size="25" />
            <h3>0.0% <span>(0)</span> </h3>
            <p>Total de Homens</p>
          </Div>
          <Div>
            <FiUser size="25" />
            <h3>0.0% <span>(0)</span></h3>
            <p>Total de Mulheres </p>
          </Div>
        </Grid1>

        <Content>
          <Box>
            <BoxHeader title='Cadastros recentes'>

              <Button><Link to='/people' >Ver Todos</Link></Button>
            </BoxHeader>
            <BoxContent>
              <User>
                <Image>
                  <img src="https://img.freepik.com/vetores-gratis/astronauta-bonito-montando-foguete-e-acenando-a-mao-dos-desenhos-animados-icone-ilustracao-conceito-de-icone-de-tecnologia-cientifica_138676-2130.jpg?w=740&t=st=1664997511~exp=1664998111~hmac=0e0f26a1417993c6751a47745c3406bc9f8407caca60fc3f31f4b53b6f6c051f" alt="" />
                </Image>
                <p>User name</p>
              </User>
              <User>
                <Image>
                  <img src="https://img.freepik.com/vetores-gratis/astronauta-bonito-montando-foguete-e-acenando-a-mao-dos-desenhos-animados-icone-ilustracao-conceito-de-icone-de-tecnologia-cientifica_138676-2130.jpg?w=740&t=st=1664997511~exp=1664998111~hmac=0e0f26a1417993c6751a47745c3406bc9f8407caca60fc3f31f4b53b6f6c051f" alt="" />
                </Image>
                <p>User name</p>
              </User>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Categorias'>
              <Button><Link to='/categories' >Ver Todos</Link></Button>
            </BoxHeader>
            <BoxContent>
              <Graph1>
                <GraphPieArea data={PieDataCategories} />
              </Graph1>
            </BoxContent>
          </Box>
        </Content>
        <Box>
          <BoxHeader title='Novos Convertidos'>
            <Datalist>
              <Input placeholder='  Selecione' id='period' type='text' list='periods' />
              <datalist id='periods'>
                <option value="Mensal"></option>
                <option value="Semestral"></option>
                <option value="Anual"></option>
              </datalist>
            </Datalist>
          </BoxHeader>
          <BoxContent>
            <Graph>
              <GraphLineArea data={LineData} />
            </Graph>
          </BoxContent>
        </Box>
      </Block>
      <Block>
        <Box>
          <BoxHeader title='Faixa etária'>
          </BoxHeader>
          <BoxContent>
            <GraphContainer>
              <GraphPieArea data={PieData} />
            </GraphContainer>
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader title='Aniversariantes do mês'>
          </BoxHeader>
          <BoxContent>

          </BoxContent>
        </Box>
      </Block>
    </Content>
  )
}

export default OverviewPersons;
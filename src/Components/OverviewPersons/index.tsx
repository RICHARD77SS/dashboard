import { FiUser, FiUsers } from "react-icons/fi";
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import Input from "../Input";
import GraphLineArea from "../GraphLineArea"

import { Grid1, GraphContainer, Datalist, Div } from './styles'
import Content from "../Content";
import Block from "../Block";
import GrapPieArea from "../GrapPieArea";


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

const LineLabel = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const LineData = {
  LineLabel,
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
    <Container>
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

                <Button>Ver todos</Button>
              </BoxHeader>
              <BoxContent>

              </BoxContent>
            </Box>
            <Box>
              <BoxHeader title='Categorias'>
                <Button>Ver todos</Button>
              </BoxHeader>
              <BoxContent>

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
              <GraphLineArea data={LineData} />
            </BoxContent>
          </Box>
        </Block>
        <Block>
          <Box>
            <BoxHeader title='Faixa etária'>
            </BoxHeader>
            <BoxContent>
              <GraphContainer>
                <GrapPieArea data={PieData} />
              </GraphContainer>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Aniversariantes'>
              <Button>Ver todos</Button>
            </BoxHeader>
            <BoxContent>

            </BoxContent>
          </Box>
        </Block>
      </Content>
    </Container>
  )
}

export default OverviewPersons;
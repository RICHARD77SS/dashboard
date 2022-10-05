import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";
import Flex from "../Flex";
import GraphLineArea from "../GraphLineArea";
import Input from "../Input";

import { Card, CardBg, CardImg, Liders, SubLiderImg, LiderImg } from './styles'
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

const ViewGroup = () => {
  return (
    <Container>
      <Content>
        <Card>
          <CardBg>
            <img src="https://img.freepik.com/vetores-gratis/juventude-plana-pessoas-abracando-juntos_52683-13322.jpg?w=740&t=st=1663693866~exp=1663694466~hmac=e0160b834b8bc53200224a2d0c6e2318b32138fbc2add06e7b49d4837cc5227b" alt="" />
          </CardBg>
          <CardImg>
            <img src="https://img.freepik.com/vetores-gratis/ele-ressuscitou-letras-contra-um-fundo-de-nuvens-e-sol-plano-de-fundo-para-parabens-pela-ressurreicao-de-cristo-ilustracao-vetorial-eps10_87521-2831.jpg?w=740&t=st=1663708091~exp=1663708691~hmac=dd44f2ad46aa3924458538b14d54ed56498aec24b49bd0e556746328697f4207" alt="" />
          </CardImg>
          <h4>Group name</h4>
          <p>0 pessoas</p>
          <p>Liderança</p>
          <Liders>
            <SubLiderImg>
              <img src="https://img.freepik.com/fotos-gratis/mulher-de-negocios-executivo-em-um-escritorio_1303-16020.jpg?w=740&t=st=1663694328~exp=1663694928~hmac=510f0aaa58d630452c9bd0e7ac087d41af956778c00d5398202f1bb8b83ea1bb" alt="" />
            </SubLiderImg>
            <LiderImg>
              <img src="https://img.freepik.com/fotos-gratis/mulher-de-negocios-executivo-em-um-escritorio_1303-16020.jpg?w=740&t=st=1663694328~exp=1663694928~hmac=510f0aaa58d630452c9bd0e7ac087d41af956778c00d5398202f1bb8b83ea1bb" alt="" />
            </LiderImg>
            <SubLiderImg>
              <img src="https://img.freepik.com/fotos-gratis/mulher-de-negocios-executivo-em-um-escritorio_1303-16020.jpg?w=740&t=st=1663694328~exp=1663694928~hmac=510f0aaa58d630452c9bd0e7ac087d41af956778c00d5398202f1bb8b83ea1bb" alt="" />
            </SubLiderImg>
          </Liders>
        </Card>
        <Box>
          <BoxHeader title='Pessoas'>
            <Button>+ Adicionar</Button>
          </BoxHeader>
          <BoxContent>
            <Input type='search' />
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader title='Pessoas'>
            <Button>Editar</Button>
            <Button>Remover</Button>
          </BoxHeader>
          <BoxContent>
            <Flex>
              <p><b>Data de abertura:</b></p>
              <p>21/03/2013</p>
            </Flex>
            <Flex>
              <p><b>Dia da semana</b></p>
              <p>Terça-feira(Noite)</p>
            </Flex>
            <Flex>
              <p><b>Perfil:</b></p>
              <p>Masculino/feminino</p>
            </Flex>
            <Flex>
              <p><b>Categorias:</b></p>
              <p> Famílias; Casais; Adultos; Jovens; Adolescentes; Crianças</p>
            </Flex>
            <Flex>
              <p><b>Grupo de origem:</b></p>
              <p>Groupname</p>
            </Flex>
            <Flex>
              <p><b>Lider 1:</b></p>
              <p>Lider</p>
            </Flex>
            <Flex>
              <p><b>Lider 2:</b></p>
              <p>Lider</p>
            </Flex>
            <Flex>
              <p><b>Lider 3:</b></p>
              <p>Lider</p>
            </Flex>
            <Flex>
              <p><b>Lider 4:</b></p>
              <p>Lider</p>
            </Flex>
            <Flex>
              <p><b>Endereço:</b></p>
              <p>Endereço</p>
            </Flex>
          </BoxContent>
        </Box>
      </Content>
      <Content>
        <Box>
          <BoxHeader title='Reuniões recentes'>
            <Button>+ Nova reunião</Button>
          </BoxHeader>
          <BoxContent>
            <h3>Não há dados</h3>
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader title='Presentes nas últimas reuniões'>
            <Button>+ Nova reunião</Button>
          </BoxHeader>
          <BoxContent>
            <GraphLineArea data={LineData} />
          </BoxContent>
        </Box>
      </Content>
      <Content>
        <Box>
          <BoxHeader title='Anotações'>
            <Button>+ Nova reunião</Button>
          </BoxHeader>
          <BoxContent>
            <textarea title='text' name="" id="" >area</textarea>
            <Button>Salvar</Button>
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader title='Grupos filhos'>
            <Button>+ Nova reunião</Button>
          </BoxHeader>
          <BoxContent>
            <h3>Não há dados</h3>
          </BoxContent>
        </Box>
      </Content>
    </Container>
  )
}

export default ViewGroup;

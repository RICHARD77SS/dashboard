import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import FlexBetween from "../FlexBetween";
import Input from "../Input";
import Tab from "../Tab";
import TabsPerson from "../TabsPersons";

import { Top, Image, BasicInfos, Block, BlockContainer, Aside, Box, Group, Infos } from './styles'


interface Props {
  name?: string;
}
const PersonDetails = ({ name, ...Props }: Props) => {
  return (
    <Container {...Props}>
      <Top>
        <Image>
          <img src="" alt="user image" />
        </Image>
        <BasicInfos>
          <h2>{name}</h2>
          <FlexBetween>
            <Block>
              <p><b>Idade:</b>22</p>
              <p><b>Categorias:</b>nenhum</p>
              <p><b>Cargos:</b>nenhum</p>
            </Block>
            <Block>
              <p><b>Endereço:</b>endereço</p>
              <p><b>Telefones:</b>+55 11 99832-3324</p>
              <p><b>E-mail:</b>Email@email.com</p>
            </Block>
          </FlexBetween>
        </BasicInfos>
        <Button>Imprimir</Button>
      </Top>
      <BlockContainer>
        <Aside>
          <Box>
            <BoxHeader title='Grupos'>

            </BoxHeader>
            <BoxContent>
              <Group>
                <img src="" alt="group image" />
                <Block>
                  <p>Group name</p>
                  <p><span>Lider 1</span></p>
                </Block>
              </Group>
              <Group>
                <img src="" alt="" />
                <Block>
                  <p>Group name</p>
                  <p><span>Participante</span></p>
                </Block>
              </Group>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Ensino'></BoxHeader>
            <BoxContent></BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Acompanhamento pessoal'></BoxHeader>
            <BoxContent>
              <Input type="text" value='' disabled />
            </BoxContent>
          </Box>
        </Aside>
        <Infos>
          <TabsPerson>
            <Tab title='Informações'>

            </Tab>
            <Tab title='Campos adicionais'>

            </Tab>
            <Tab title='Financeiro'>

            </Tab>
            <Tab title='Editar'>

            </Tab>
            <Tab title='Permissões'>

            </Tab>
            <Tab title='Remover'>

            </Tab>
          </TabsPerson>
        </Infos>
      </BlockContainer>
    </Container>
  )
}

export default PersonDetails;
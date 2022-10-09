import React from 'react'
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import FlexBetween from "../FlexBetween";
import Input from "../Input";
import Tab from "../Tab";
import TabsPerson from "../TabsPersons";
import { useParams } from 'react-router-dom';
import { Top, Image, BasicInfos, Block, BlockContainer, Aside, Box, Group, Infos } from './styles'

import { useAxios } from '../../hooks/useAxios';

const PersonDetails = () => {
  const { data } = useAxios('person')
  const { id } = useParams();
  return (
    <Container >
      <Top>
        <Image>
          <img src="" alt="user image" />
        </Image>
        <BasicInfos>
          <h2>{data?.person[`${id}`].name}</h2>
          <FlexBetween>
            <Block>
              <p><b>Idade:</b>{data?.person[`${id}`].birth}</p>
              <p><b>Categorias:</b>{data?.person[`${id}`].category}</p>
              <p><b>Cargos:</b>{data?.person[`${id}`].office}</p>
            </Block>
            <Block>
              <p><b>Endereço:</b>{data?.person[`${id}`].address},{data?.person[`${id}`].city},{data?.person[`${id}`].state},{data?.person[`${id}`].number}</p>
              <p><b>Telefones:</b>{data?.person[`${id}`].phone1}, {data?.person[`${id}`].phone2}</p>
              <p><b>E-mail:</b>{data?.person[`${id}`].email}</p>
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
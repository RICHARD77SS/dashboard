import Aside from "../Aside";
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";
import EditRemove from "../EditRemove";
import Input from "../Input";
import InputBlock from "../InputBlock";
import Table from "../Table";
import Tbody from "../Tbody";
import Td from "../Td";
import Th from "../Th";
import Thead from "../Thead";
import Tr from "../Tr";

import {AsideContent } from './styles';

const PatrimoniesPlaces = () => {
  return (
    <Container>
      <h3>Locais</h3>
      <Content>
        <Box>
          <BoxHeader title="Resultados: 4" />
          <BoxContent>
            <p>Gerencie os locais onde os itens do patrimônio são inseridos.</p>
            <Content>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Nome da categoria</Th>
                    <Th>Ações</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Indefinido</Td>
                    <Td><EditRemove /></Td>
                  </Tr>
                  <Tr>
                    <Td>Almoxerifado</Td>
                    <Td><EditRemove /></Td>
                  </Tr>
                  <Tr>
                    <Td>Templo principal</Td>
                    <Td><EditRemove /></Td>
                  </Tr>
                  <Tr>
                    <Td>Estacionamento</Td>
                    <Td><EditRemove /></Td>
                  </Tr>
                </Tbody>
              </Table>
            </Content>
          </BoxContent>
        </Box>
        <Aside>
          <BoxHeader title="+ Criar Local" />
          <AsideContent>
            <InputBlock>
              <label htmlFor="name">Nome do local</label>
              <Input type='text' />
            </InputBlock>
            <InputBlock>
              <label htmlFor="description">Descrição</label>
              <textarea title='area' name="" id="" ></textarea>
            </InputBlock>
            <Button>Criar</Button>
          </AsideContent>
        </Aside>
      </Content>
    </Container>
  )
}

export default PatrimoniesPlaces;
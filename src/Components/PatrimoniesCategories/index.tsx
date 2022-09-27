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

const PatrimoniesCategories = () => {
  return (
    <Container>
      <h3>Categorias</h3>
      <Content>
        <Box>
          <BoxHeader title="Resultados: 7" />
          <BoxContent>
            <p>Gerencie as categorias de patrimônio.</p>
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
                    <Td>Outros</Td>
                    <Td><EditRemove /></Td>
                  </Tr>
                  <Tr>
                    <Td>Imóveis</Td>
                    <Td><EditRemove /></Td>
                  </Tr>
                  <Tr>
                    <Td>Ferramentas</Td>
                    <Td><EditRemove /></Td>
                  </Tr>
                  <Tr>
                    <Td>Vaículos</Td>
                    <Td><EditRemove /></Td>
                  </Tr>
                  <Tr>
                    <Td>Equipamentos</Td>
                    <Td><EditRemove /></Td>
                  </Tr>
                  <Tr>
                    <Td>Computadores</Td>
                    <Td><EditRemove /></Td>
                  </Tr>
                  <Tr>
                    <Td>Móveis</Td>
                    <Td><EditRemove /></Td>
                  </Tr>
                </Tbody>
              </Table>
            </Content>
          </BoxContent>
        </Box>
        <Aside>
          <BoxHeader title="+ Criar Categoria" />
          <AsideContent>
            <InputBlock>
              <label htmlFor="name">Nome da Categoria</label>
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

export default PatrimoniesCategories;
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

import { AsideContent } from './styles';

const FinancialAccount = () => {
  return (
    <Container>
      <h3>Contas</h3>
      <Content>
        <Box>
          <BoxHeader title="Resultados: 2" />
          <BoxContent>
            <p>Cadastre suas contas bancárias ou caixas.</p>
            <Content>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Nome da categoria</Th>
                    <Th>Descrição</Th>
                    <Th>Ações</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Name categorie</Td>
                    <Td>Descrição</Td>
                    <Td><EditRemove /></Td>
                  </Tr>
                </Tbody>
              </Table>
            </Content>
          </BoxContent>
        </Box>
        <Aside>
          <BoxHeader title="+ Criar conta"/>
          <AsideContent>
            <InputBlock>
              <label htmlFor="name">Nome da conta</label>
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

export default FinancialAccount;
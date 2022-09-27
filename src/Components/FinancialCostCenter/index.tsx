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

import { Aside, AsideHeader, AsideContent } from './styles';

const FinancialCostCenter = () => {
  return (
    <Container>
      <h3>Centro de custos</h3>
      <Content>
        <Box>
          <BoxHeader title="Resultados: 2" />
          <BoxContent>
            <p>Gerencie os centros de custos da sua instituição.</p>
            <Content>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Nome </Th>
                    <Th>Descrição</Th>
                    <Th>Ações</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Name </Td>
                    <Td>Descrição</Td>
                    <Td><EditRemove /></Td>
                  </Tr>
                </Tbody>
              </Table>
            </Content>
          </BoxContent>
        </Box>
        <Aside>
          <AsideHeader>
            <h3>+ Criar centro de custo</h3>
          </AsideHeader>
          <AsideContent>
            <InputBlock>
              <label htmlFor="name">Nome do centro de custo</label>
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

export default FinancialCostCenter;
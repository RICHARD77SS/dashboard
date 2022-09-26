import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";
import EditRemove from "../EditRemove";
import Flex from "../Flex";
import Input from "../Input";
import InputBlock from "../InputBlock";
import Table from "../Table";
import Tbody from "../Tbody";
import Td from "../Td";
import Th from "../Th";
import Thead from "../Thead";
import Tr from "../Tr";

import { Block, BlockHeader, BlockContent, Aside, AsideHeader, AsideContent } from './styles';

const FinancialCategories = () => {
  return (
    <Container>
      <h3>Categorias</h3>
      <Content>
        <Box>
          <BoxHeader title="Resultados: 2" />
          <BoxContent>
            <p>Gerencie todas as categorias de transações financeiras.</p>
            <Content>
              <Block>
                <BlockHeader>
                  <h3>Receitas (1)</h3>
                </BlockHeader>
                <BlockContent>
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
                </BlockContent>
              </Block>
              <Block>
                <BlockHeader className='red'>
                  <h3>Despesas (1)</h3>
                </BlockHeader>
                <BlockContent>
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
                </BlockContent>
              </Block>
            </Content>
          </BoxContent>
        </Box>
        <Aside>
          <AsideHeader>
            <h3>+ Criar categoria</h3>
          </AsideHeader>
          <AsideContent>
            <InputBlock>
              <label htmlFor="name">Nomde da categoria</label>
              <Input type='text' />
            </InputBlock>
            <InputBlock>
              <label htmlFor="description">Descrição</label>
              <textarea title='area' name="" id="" ></textarea>
            </InputBlock>
            <InputBlock>
              <label htmlFor="type">Tipo</label>
              <Flex>
                <Flex>
                  <Input id='revenues' type='checkbox' />
                  <label htmlFor="revenues"> <p>Receitas</p> </label>
                </Flex>
                <Flex>
                  <Input id='expenses' type='checkbox' />
                  <label htmlFor="expenses"> <p>Despesas</p> </label>
                </Flex>
              </Flex>
            </InputBlock>
            <Button>Criar</Button>
          </AsideContent>
        </Aside>
      </Content>
    </Container>
  )
}

export default FinancialCategories;
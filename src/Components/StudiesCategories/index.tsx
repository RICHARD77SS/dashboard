import Aside from '../Aside';
import Box from '../Box';
import BoxContent from '../BoxContent';
import BoxHeader from '../BoxHeader';
import Button from '../Button';
import Container from '../Container';
import EditRemove from '../EditRemove';
import Input from '../Input';
import Table from '../Table';
import Tbody from '../Tbody';
import Td from '../Td';
import Th from '../Th';
import Thead from '../Thead';
import Tr from '../Tr';
import { Content, InputBox } from './styles';

const StudiesCategories = () => {
  return (
    <Container>
      <h3>Categorias de estudo</h3>
      <Content>
        <Box>
          <BoxHeader title={`Resultados: 0`}>

          </BoxHeader>
          <BoxContent>
            <p>Gerencie as caregorias de estudos.</p>
            <Table>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>NameHere</Td>
                  <Td><EditRemove /></Td>
                </Tr>
              </Tbody>
            </Table>
          </BoxContent>
        </Box>
        <Aside>
          <BoxHeader title='+ Criar Categoria' />
          <BoxContent>
            <InputBox>
              <label htmlFor='categorieName'>Nome da categoria</label>
              <Input type='text' id='categorieName' />
            </InputBox>
            <InputBox>
              <label htmlFor="description">Descrição</label>
              <textarea title='textarea' name="" id="description" cols={30} rows={10}></textarea>
            </InputBox>
            <Button>Criar</Button>
          </BoxContent>
        </Aside>
      </Content>
    </Container>
  )
}

export default StudiesCategories;
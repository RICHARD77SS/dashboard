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

const Schools = () => {
  return (
    <Container>
      <h3>Escolas</h3>
      <Content>
        <Box>
          <BoxHeader title={`Resultados: 0`}>

          </BoxHeader>
          <BoxContent>
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
          <BoxHeader title='+ Criar escola' />
          <BoxContent>
            <InputBox>
              <label htmlFor='scoolName'>Nome da escola</label>
              <Input type='text' id='scoolName' />
            </InputBox>
            <InputBox>
              <label>Gestores</label>
              <Input placeholder='  Selecione' id='mananger' type='text' list='manangers' />
              <datalist id='manangers'>
                <option value="Lider name here"></option>
              </datalist>
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

export default Schools;
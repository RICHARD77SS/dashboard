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

const Classes = () => {
  return (
    <Container>
      <h3>Turmas</h3>
      <Content>
        <Box>
          <BoxHeader title={`Resultados: 0`}>

          </BoxHeader>
          <BoxContent>
            <Table>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Horário</Th>
                  <Th>Escola</Th>
                  <Th>Status</Th>
                  <Th>Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>NameHere</Td>
                  <Td>horarios</Td>
                  <Td>Escola</Td>
                  <Td>status</Td>
                  <Td><EditRemove /></Td>
                </Tr>
              </Tbody>
            </Table>
          </BoxContent>
        </Box>
        <Aside>
          <BoxHeader title='+ Criar turma' />
          <BoxContent>
            <InputBox>
              <label htmlFor='scoolName'>Nome da turma</label>
              <Input type='text' id='scoolName' />
            </InputBox>
            <InputBox>
              <label>Escola</label>
              <Input placeholder='  Selecione' id='school' type='text' list='schools' />
              <datalist id='schools'>
                <option value="Scool name here" />
              </datalist>
            </InputBox>
            <InputBox>
              <label>Horário</label>
              <Input placeholder='  Selecione' id='hour' type='text' list='hours' />
              <datalist id='hours'>
                <option value="Não definido" />
                <option value="Manhã" />
                <option value="Tarde" />
                <option value="Noite" />
              </datalist>
            </InputBox>
            <InputBox>
              <label>Status</label>
              <Input placeholder='  Selecione' id='statu' type='text' list='status' />
              <datalist id='status'>
                <option value="Preparando turma" />
                <option value="Em andamento" />
                <option value="Pausada" />
                <option value="Finalizada" />
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

export default Classes;
<h3>Turmas</h3>
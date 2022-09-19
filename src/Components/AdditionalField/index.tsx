import Button from '../Button';
import Input from '../Input';
import { Container, Content, Field, Header, FieldContent, Table, Tr, Th, Td, AddField, FieldHeader, Box, BoxHeader, BoxContent, InputContainer, InputContainerB, Thead, Tbody } from './styles';

const AdditionalField = () => {
  return (
    <Container>
      <Content>
        <Field>
          <Header>
            <h3>Resultados: 0</h3>
          </Header>
          <FieldContent>
            <h4>Adicione novos campos ao formulario</h4>
            <Table>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Pessoas</Th>
                  <Th>Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Name here</Td>
                  <Td>type here</Td>
                  <Td><Button>Editar</Button><Button>Remover</Button></Td>
                </Tr>
              </Tbody>
            </Table>
          </FieldContent>
        </Field>
        <AddField>
          <FieldHeader>
            <h3>Criar campo</h3>
          </FieldHeader>
          <FieldContent>
            <h3>Escolha um tipo (exemplos abaixo):</h3>
            <Box>
              <BoxHeader>
                <h3>Tipo Checkbox</h3>
              </BoxHeader>
              <BoxContent>
                <p>Aqui é uma pergunta de exemplo</p>
                <InputContainer>
                  <Input id='r1' type='checkbox' />
                  <label htmlFor="r1">Resposta 1</label>
                </InputContainer>
                <InputContainer>
                  <Input id='r2' type='checkbox' />
                  <label htmlFor="r2">Resposta 2</label>
                </InputContainer>
                <InputContainer>
                  <Input id='r3' type='checkbox' />
                  <label htmlFor="r3">Resposta 3</label>
                </InputContainer>
                <Button>Criar novo</Button>
              </BoxContent>
            </Box>
            <Box>
              <BoxHeader>
                <h3>Tipo Radio</h3>
              </BoxHeader>
              <BoxContent>
                <p>Aqui é uma pergunta de exemplo</p>
                <InputContainer>
                  <Input id='p1' type='radio' />
                  <label htmlFor="p1">Resposta 1</label>
                </InputContainer>
                <InputContainer>
                  <Input id='p2' type='radio' />
                  <label htmlFor="p2">Resposta 2</label>
                </InputContainer>
                <InputContainer>
                  <Input id='p3' type='radio' />
                  <label htmlFor="p3">Resposta 3</label>
                </InputContainer>
                <Button>Criar novo</Button>
              </BoxContent>
            </Box>
            <Box>
              <BoxHeader>
                <h3>Tipo Texto</h3>
              </BoxHeader>
              <BoxContent>
                <p>Aqui é uma pergunta de exemplo</p>
                <InputContainerB>
                  <Input id='text' type='text' />
                  <label htmlFor="text">Pergunta</label>
                </InputContainerB>
                <Button>Criar novo</Button>
              </BoxContent>
            </Box>
            <Box>
              <BoxHeader>
                <h3>Tipo Área de Texto</h3>
              </BoxHeader>
              <BoxContent>
                <p>Aqui é uma pergunta de exemplo</p>
                <InputContainerB>
                  <textarea title="textarea" name="" id="" cols={30} rows={10}></textarea>
                  <label htmlFor="text">Pergunta</label>
                </InputContainerB>
                <Button>Criar novo</Button>
              </BoxContent>
            </Box>
          </FieldContent>
        </AddField>
      </Content>
    </Container>
  )
}

export default AdditionalField;
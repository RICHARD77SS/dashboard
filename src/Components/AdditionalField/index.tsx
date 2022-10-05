import React from 'react'
import Button from '../Button';
import Input from '../Input';
import { Container, Content, Field, Header, FieldContent, AddField, FieldHeader, Box, BoxHeader, BoxContent, InputContainer, InputContainerB} from './styles';
import NewImputFieldCheck from '../NewImputFieldCheck';
import NewImputFieldRadio from '../NewImputFieldRadio';
import NewImputFieldText from '../NewImputFieldText';
import NewImputFieldTextArea from '../NewImputFieldTextArea';
import Flex from '../Flex';
import Table from '../Table';
import Thead from '../Thead';
import Tr from '../Tr';
import Th from '../Th';
import Tbody from '../Tbody';
import Td from '../Td';


const AdditionalField = () => {
  const [openCheck, setOpenCheck] = React.useState(false)
  const [openRadio, setOpenRadio] = React.useState(false)
  const [openText, setOpenText] = React.useState(false)
  const [openTextArea, setOpenTextArea] = React.useState(false)
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
            <Flex>

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
                  <Button onClick={() => { setOpenCheck(true) }}>Criar novo</Button>
                </BoxContent>
                {openCheck ?
                  <NewImputFieldCheck onClick={() => { setOpenCheck(false) }}>
                    <Button onClick={() => { setOpenCheck(false) }}>Close</Button>
                  </NewImputFieldCheck>

                  : null}
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
                  <Button onClick={() => { setOpenRadio(true) }}>Criar novo</Button>
                </BoxContent>
                {openRadio ?
                  <NewImputFieldRadio onClick={() => { setOpenRadio(false) }}>
                    <Button onClick={() => { setOpenRadio(false) }}>Close</Button>
                  </NewImputFieldRadio>

                  : null}
              </Box>
            </Flex>
            <Flex>

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
                  <Button onClick={() => { setOpenText(true) }}>Criar novo</Button>
                </BoxContent>
                {openText ?
                  <NewImputFieldText onClick={() => { setOpenText(false) }}>
                    <Button onClick={() => { setOpenText(false) }}>Close</Button>
                  </NewImputFieldText>

                  : null}
              </Box>
              <Box>
                <BoxHeader>
                  <h3>Tipo Área de Texto</h3>
                </BoxHeader>
                <BoxContent>
                  <p>Aqui é uma pergunta de exemplo</p>
                  <InputContainerB>
                    <textarea title="textarea" name="" id="" ></textarea>
                    <label htmlFor="text">Pergunta</label>
                  </InputContainerB>
                  <Button onClick={() => { setOpenTextArea(true) }}>Criar novo</Button>
                </BoxContent>
                {openTextArea ?
                  <NewImputFieldTextArea onClick={() => { setOpenTextArea(false) }}>
                    <Button onClick={() => { setOpenTextArea(false) }}>Close</Button>
                  </NewImputFieldTextArea>

                  : null}
              </Box>
            </Flex>
          </FieldContent>
        </AddField>
      </Content>
    </Container>
  )
}

export default AdditionalField;
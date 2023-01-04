import React from 'react'
import Button from '../Button';
import Input from '../Input';
import { Container, Content, Field, Header, FieldContent, AddField, FieldHeader, Box, BoxHeader, BoxContent, InputContainer, InputContainerB } from './styles';
import NewImputFieldCheck from '../ModalNewInputFieldCheck';
import NewImputFieldRadio from '../ModalNewInputFieldRadio';
import NewImputFieldText from '../ModalNewInputFieldText';
import NewImputFieldTextArea from '../ModalNewInputFieldTextArea';
import Flex from '../Flex';
import Table from '../Table';
import Thead from '../Thead';
import Tr from '../Tr';
import Th from '../Th';
import Tbody from '../Tbody';
import Td from '../Td';

import { useAxios } from '../../hooks/useAxios';
import { ExtraFieldsContext } from '../../contexts/extraFieldsContext';

const AdditionalField = () => {
  const { data } = useAxios('extraFields')
  var Lenght = data?.extraFields?.length
  const {
    handleDelete,
    handleEdit,
    openCheck,
    openModalCheck,
    setOpenCheck,
    openRadio,
    setOpenRadio,
    openText,
    setOpenText,
    openTextArea,
    setOpenTextArea,
    openModalRadio,
    openModalText,
    openModalTextArea
  } = React.useContext(ExtraFieldsContext)

  return (
    <Container>
      <br />
      <br />
      <br />
      <Content>
        <Field>
          <Header>
            <h3>Resultados:{Lenght}</h3>
          </Header>
          <FieldContent>
            <h4>Adicione novos campos ao formulario</h4>
            <Table>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>tipo</Th>
                  <Th>Opções</Th>
                  <Th>Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.extraFields?.map((fields: any, index: any) => {
                  return (
                    <Tr key={index}>
                      <Td>{fields?.inputName}</Td>
                      <Td>{fields?.inputType}</Td>
                      <Td>
                        {fields?.inputType !== 'text' && fields?.inputType !== 'textarea' ?
                          Object.keys(fields?.inputOption).map((option: string) =>
                            fields.inputOption[option].option + '; ') : null}
                      </Td>
                      <Td>
                        <Flex>
                          <Button onClick={() => handleEdit(fields._id, fields.inputName, fields.inputOption, fields.inputType)}>Editar</Button>
                          <Button onClick={() => handleDelete(fields._id)}>Remover</Button>
                        </Flex>
                      </Td>
                    </Tr>
                  )
                })}
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
                  <Button onClick={() => { openModalCheck() }}>Criar novo</Button>
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
                  <Button onClick={() => { openModalRadio() }}>Criar novo</Button>
                </BoxContent>
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
                  <Button onClick={() => { openModalText() }}>Criar novo</Button>
                </BoxContent>
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
                  <Button onClick={() => { openModalTextArea() }}>Criar novo</Button>
                </BoxContent>
              </Box>
            </Flex>
          </FieldContent>
        </AddField>
      </Content>
    </Container>
  )
}

export default AdditionalField;
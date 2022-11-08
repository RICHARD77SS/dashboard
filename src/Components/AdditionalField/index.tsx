import React from 'react'
import Button from '../Button';
import Input from '../Input';
import { Container, Content, Field, Header, FieldContent, AddField, FieldHeader, Box, BoxHeader, BoxContent, InputContainer, InputContainerB } from './styles';
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

import { useAxios } from '../../hooks/useAxios';
import { ExtraFieldsContext } from '../../contexts/extraFieldsContext';
import AdditionalFieldEdit from '../AdditionalFieldEdit';

const AdditionalField = () => {
  const { data } = useAxios('extraFields')
  var Lenght = data?.extraFields?.length
  const {
    handleDelete,
    openModalEdit1,
    OpenModal1,
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
      {openModalEdit1 ?
        <AdditionalFieldEdit></AdditionalFieldEdit>
        : null}
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
                  console.log(Object.keys(fields?.inputOption).map((keyName: any, i: number) => fields?.inputOption[keyName]))
                  return (
                    <Tr key={index}>
                      <Td>{fields?.inputName}</Td>
                      <Td>{fields?.inputType}</Td>
                      <Td>
                        {fields?.inputType !== 'text' && fields?.inputType !== 'textarea' ? Object.keys(fields?.inputOption).map((option: string, index: number) => fields?.inputOption[option] + '; ') : null}
                      </Td>
                      <Td>
                        <Flex>
                          <Button onClick={() => OpenModal1(index, fields.inputName)}>Editar</Button>
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
                  <Button onClick={() => { openModalRadio() }}>Criar novo</Button>
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
                  <Button onClick={() => { openModalText() }}>Criar novo</Button>
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
                  <Button onClick={() => { openModalTextArea() }}>Criar novo</Button>
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
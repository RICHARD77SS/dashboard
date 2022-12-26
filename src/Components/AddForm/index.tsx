import React from 'react'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from '../Button';
import Content from "../Content";
import Flex from '../Flex';
import FlexBetween from '../FlexBetween';
import Input from '../Input';

import InputBlock from "../InputBlock";
import TextArea from '../TextArea';
import TextEditor from '../TextEditor';

import { Container, Inputs, Buttons } from './styles';
import { FormsContext } from '../../contexts/formsContext';
import { useAxios } from '../../hooks/useAxios';
import { useParams } from 'react-router-dom';
const AddForm = () => {
  const { data } = useAxios('forms')
  const { id } = useParams()
  const { title,
    caption,
    status,
    notification,
    description,
    additionalFields,
    titleHandler,
    captionHandler,
    statusHandler,
    notificationHandler,
    descriptionHandler,
    additionalFieldsHandler,
    AddFields,
    RemoveFields,
    AddOptions,
    RemoveOptions,
    optionsHandler,
    options,
    handleSubmit,
    setId,
    setDescription,
    setTitle,
    setCaption,
    setStatus,
    setNotification,
    setAdditionalFields,
    id: userId
  } = React.useContext(FormsContext)
  React.useEffect(() => {
    if (parseInt(id!) >= 0) {
      setId(data?.forms[`${id}`]._id)
      setDescription(data?.forms[`${id}`].description)
      setTitle(data?.forms[`${id}`].title)
      setCaption(data?.forms[`${id}`].caption)
      setStatus(data?.forms[`${id}`].status)
      setNotification(data?.forms[`${id}`].notification)
      setAdditionalFields(data?.forms[`${id}`].additionalFields)
    }
  }, [data?.forms, id, setAdditionalFields, setCaption, setDescription, setId, setNotification, setStatus, setTitle, userId])
  console.log(additionalFields)
  return (
    <Container onSubmit={handleSubmit}>
      <Content>
        <Box>
          <BoxHeader title='Resumo' />
          <BoxContent>
            <InputBlock>
              <label htmlFor="title">Título</label>
              <Inputs id='title' type='text' value={title} onChange={titleHandler} />
            </InputBlock>
            <InputBlock>
              <label htmlFor="subtitle">Subtítulo</label>
              <Inputs id='subtitle' type='text' value={caption} onChange={captionHandler} />
            </InputBlock>
            <InputBlock>
              <label htmlFor="status">Status</label>
              <select id='status' value={status} onChange={statusHandler} >
                <option value='Publicado' >Publicado</option>
                <option value='Não Publicado' >Não Publicado</option>
              </select>
            </InputBlock>
            <Flex>
              <Input type='checkbox' onChange={notificationHandler} checked={notification} />
              <p>Receber notificação por e-mail<br /> a cada preenchimento</p>
            </Flex>
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader title='Descrição' />
          <BoxContent>
            <TextArea height='200px'>
              <TextEditor value={description} setValue={setDescription} />
            </TextArea>
          </BoxContent>
        </Box>
      </Content>
      {additionalFields?.map((fields: any, index: number) => {
        return (
          <>
            <Box key={index}>
              <BoxHeader>
                <Flex>
                  <Button type='button'><BiDownArrow /></Button>
                  <Button type='button'><BiUpArrow /></Button>
                </Flex>
                <Button type='button'><BsTrash /></Button>
              </BoxHeader>
              <Flex>
                <BoxContent>
                  <InputBlock>
                    <label htmlFor="fieldname">Nome do campo</label>
                    <Inputs id='fieldname' type='text' name='name' value={fields.name} onChange={(event) => additionalFieldsHandler(event, index)} />
                  </InputBlock>
                  <InputBlock>
                    <label htmlFor="type">Tipo</label>
                    <select id='type' name='type' value={fields.type} onChange={(event) => additionalFieldsHandler(event, index)}>
                      <option value='Texto' >Texto</option>
                      <option value='Área de texto' >Area de texto</option>
                      <option value='Multipla escolha' >Multipla escolha</option>
                      <option value='Seleção unica' >Selção unica</option>
                      <option value='Caixa de seleção' >Caixa de seleção</option>
                      <option value='Data' >Data</option>
                      <option value='Numero' >Numero</option>
                    </select>
                  </InputBlock>
                  <InputBlock>
                    <FlexBetween>
                      <InputBlock>
                        <p><b>Obrigatório</b></p>
                        <Flex>
                          <label htmlFor="yes">Sim</label>
                          <Input id='yes' type='radio' name='required' value='true' onChange={(event) => additionalFieldsHandler(event, index)} checked={fields.required === 'true' ? true : false} />
                        </Flex>
                        <Flex>
                          <label htmlFor="no">Não</label>
                          <Input id='no' type='radio' name='required' value='false' onChange={(event) => additionalFieldsHandler(event, index)} checked={fields.required === 'false' ? true : false} />
                        </Flex>
                      </InputBlock>
                      <InputBlock>
                        <p><b>Ocultar campo na<br /> págína do formulário</b> </p>
                        <Flex>
                          <label htmlFor="yess">Sim</label>
                          <Input id='yess' type='radio' name='hidden' value='true' onChange={(event) => additionalFieldsHandler(event, index)} checked={fields.hidden === 'true' ? true : false} />
                        </Flex>
                        <Flex>
                          <label htmlFor="nop">Não</label>
                          <Input id='nop' type='radio' name='hidden' value='false' onChange={(event) => additionalFieldsHandler(event, index)} checked={fields.hidden === 'false' ? true : false} />
                        </Flex>
                      </InputBlock>
                    </FlexBetween>
                  </InputBlock>
                  <Buttons type='button' onClick={() => { RemoveFields(index) }}>Delete</Buttons>
                </BoxContent>
                {fields.type.toString() === 'Multipla escolha' || fields.type.toString() === 'Seleção unica' || fields.type.toString() === 'Caixa de seleção' ?
                  <BoxContent>
                    <>
                      {
                        options?.map((option: any, index: number) => {
                          return (
                            <InputBlock key={index}>
                              <Input type='text' value={option.value} name='value' onChange={(event) => optionsHandler(event, index)} />
                              <Buttons type='button' onClick={() => { RemoveOptions(index) }}>Delete</Buttons>
                            </InputBlock>)
                        })}
                      <Button type='button' onClick={() => { AddOptions() }}>Add</Button>
                    </>
                  </BoxContent>
                  : null
                }
              </Flex>
            </Box>
          </>
        )
      })}
      <Buttons type='button' onClick={() => { AddFields() }}>+ Adicionar novo campo</Buttons>
      <br />
      <br />
      <Buttons type='submit'>Salvar</Buttons>
      <br />
      <br />
      <br />
    </Container >
  )
}

export default AddForm;
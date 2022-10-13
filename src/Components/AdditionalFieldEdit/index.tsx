import Button from "../Button";
import Input from "../Input";
import InputBlock from "../InputBlock";
import { ExtraFieldsContext } from "../../contexts/extraFieldsContext";
import React from "react";

import { Container, Content, Form } from './styles'
import { useAxios } from "../../hooks/useAxios";



const AdditionalFieldEdit = () => {
  const { data } = useAxios('extraFields')
  const {
    handleEdit,
    inputName,
    inputType,
    inputOption,
    inputNameHandle,
    inputOptionHandle,
    setInputType,
    inputOptionFocusOut,
    closeModall,
    setId,
    index,
    id
  } = React.useContext(ExtraFieldsContext)

  React.useEffect(() => {
    setInputType("text")
    let indexx = index
    let ids = data?.extraFields[indexx]?._id
    setId(ids)

  }, [])
  const type = inputType


  return (
    <Container>

      <Content>
        <Form>
          <Button onClick={() => { closeModall() }}>Close</Button>
          <InputBlock>

            <label htmlFor="name">Nome do campo</label>
            <Input
              id='name'
              placeholder='Nome do campo'
              type={type}
              value={inputName}
              onChange={inputNameHandle}

            />
          </InputBlock>
          <InputBlock >
            <label htmlFor=" ">Opções</label>
            <Input
              type='type'
              placeholder='Escreva aqui (o campo vazio será removido)'
              onChange={inputOptionHandle}
              onBlur={inputOptionFocusOut}
            />
            <Input
              type='type'
              placeholder='Escreva aqui (o campo vazio será removido)'
              onChange={inputOptionHandle}
              onBlur={inputOptionFocusOut}
            />
            <Input
              type='type'
              placeholder='Escreva aqui (o campo vazio será removido)'
              onChange={inputOptionHandle}
              onBlur={inputOptionFocusOut}
            />
            <div id="options">

            </div>
          </InputBlock>
          <Button type='button'>Adicionar</Button>
          <Button type='submit' onClick={() => { handleEdit(id) }}>Enivar</Button>
        </Form>
      </Content>
    </Container>
  )
}

export default AdditionalFieldEdit;
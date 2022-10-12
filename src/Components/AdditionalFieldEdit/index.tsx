import Button from "../Button";
import Input from "../Input";
import InputBlock from "../InputBlock";
import { ExtraFieldsContext } from "../../contexts/extraFieldsContext";
import React from "react";

import { Container, Content, Form } from './styles'


interface Props {
  id?: string;
}
const AdditionalFieldEdit = ({id}:Props) => {
  const {
    handleSubmit,
    inputName,
    inputType,
    inputOption,
    inputNameHandle,
    inputTypeHandle,
    inputOptionHandle,
    setInputType,
    inputOptionFocusOut,
    closeModall,
    setId
  } = React.useContext(ExtraFieldsContext)
  setInputType("text")
  const type = inputType
  setId(id)
  return (
    <Container>
      
      <Content>
        <Form onSubmit={handleSubmit}>
          <Button onClick={()=>{closeModall()}}>Close</Button>
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
              value={inputOption}
              onChange={inputOptionHandle}
              onBlur={inputOptionFocusOut}
            />
            <Input
              type='type'
              placeholder='Escreva aqui (o campo vazio será removido)'
              value={inputOption}
              onChange={inputOptionHandle}
              onBlur={inputOptionFocusOut}
            />
            <Input
              type='type'
              placeholder='Escreva aqui (o campo vazio será removido)'
              value={inputOption}
              onChange={inputOptionHandle}
              onBlur={inputOptionFocusOut}
            />
            <div id="options">

            </div>
          </InputBlock>
          <Button type='button'>Adicionar</Button>
          <Button type='submit'>Enivar</Button>
        </Form>
      </Content>
    </Container>
  )
}

export default AdditionalFieldEdit;
import Button from "../Button";
import Input from "../Input";
import InputBlock from "../InputBlock";
import { ExtraFieldsContext } from "../../contexts/extraFieldsContext";
import React from "react";

import { Container, Content } from './styles'
import { AiOutlineCloseCircle } from "react-icons/ai";
import Close from "../Close";
import Form from "../Form";


const ModalAdditionalFieldEdit = () => {
  const {
    handleSubmit,
    inputName,
    inputOption,
    inputNameHandle,
    inputOptionHandle,
    CloseModal,
    AddOption,
    RemoveOption
  } = React.useContext(ExtraFieldsContext)

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Button type='button' onClick={() => { CloseModal() }}><AiOutlineCloseCircle size='30' /></Button>
          <InputBlock>
            <label htmlFor="name">Nome do campo</label>
            <Input
              id='name'
              placeholder='Nome do campo'
              type='text'
              value={inputName}
              onChange={inputNameHandle}
            />
          </InputBlock>
          <InputBlock >
            <label htmlFor=" ">Opções</label>
            {inputOption?.map((option: any, index: number) => {
              return (
                <InputBlock>
                  <Input
                    type='type'
                    placeholder='Escreva aqui (o campo vazio será removido)'
                    name='option'
                    value={option.option}
                    onChange={(event) => inputOptionHandle(event, index)}
                  />
                  <Button type='button' onClick={() => RemoveOption(index)}>Apagar</Button>
                </InputBlock>
              )
            })}
            <Button type='button' name='new' onClick={() => { AddOption() }}>+ Adicionar nova opção</Button>
          </InputBlock>
          <Button type='submit'>Enivar</Button>
        </Form>
      </Content>
      <Close onClick={() => { CloseModal() }}></Close>
    </Container>
  )
}

export default ModalAdditionalFieldEdit;
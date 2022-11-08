import React from "react";
import Button from "../Button";
import FlexBetween from "../FlexBetween";
import Input from "../Input";
import InputBlock from "../InputBlock";
import { Container, Content, Form, BoxHeader, BoxContent, BoxFooter, Closed } from './styles'

import { ExtraFieldsContext } from "../../contexts/extraFieldsContext";
interface Props {
  children?: React.ReactNode;
  onClick?: any;
}
const NewImputFieldRadio = ({ children, onClick }: Props) => {
  const { handleSubmit,
    inputName,
    inputNameHandle,
    inputOptionHandle,
    setInputType
  } = React.useContext(ExtraFieldsContext)

  React.useEffect(() => {
    setInputType("radio")
  }, [setInputType])
  function Add() {
    let campo = document.getElementById('options')
    let input = document.createElement('input')
    campo?.append(input)
    let options = campo?.children
    let size = options!.length
    for (let i = 0; i < size; i++) {
      options![i].setAttribute('type', 'text')
      options![i].setAttribute('name', `option${i}`)
      options![i].setAttribute('placeholder', 'Escreva aqui (o campo vazio será removido)')
      options![i].addEventListener('change', inputOptionHandle)
    }
  }
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <BoxHeader>
            <FlexBetween>
              <h3>Criar</h3>
              {children}
            </FlexBetween>
          </BoxHeader>
          <BoxContent>
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
              <div id="options">

              </div>
            </InputBlock>
            <Button type='button' onClick={() => Add()}>+ Adicionar nova opção</Button>
          </BoxContent>
          <BoxFooter>
            <Button type='submit'>Salvar</Button>
          </BoxFooter>
        </Form>
      </Content>
      <Closed onClick={onClick}></Closed>
    </Container>
  )
}

export default NewImputFieldRadio;
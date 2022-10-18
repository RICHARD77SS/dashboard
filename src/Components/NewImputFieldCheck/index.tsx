import Button from "../Button";
import FlexBetween from "../FlexBetween";
import Input from "../Input";
import InputBlock from "../InputBlock";
import { Container, Content, Form, BoxHeader, BoxContent, BoxFooter, Closed } from './styles'

import { ExtraFieldsContext } from "../../contexts/extraFieldsContext";
import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: any;
}
const NewImputFieldCheck = ({ children, onClick }: Props) => {
  const { handleSubmit,
    inputName,
    inputNameHandle,
    inputOptionHandle,
    setInputType,
    inputOptionFocusOut
  } = React.useContext(ExtraFieldsContext)

  React.useEffect(() => {
    setInputType("checkbox")
  }, [setInputType])

  function add() {

    let campo = document.getElementById('options')
    let input = document.createElement('input')
    campo?.append(input)
    let options = campo?.children
    let size = options!.length
    for (let i = 0; i < size; i++) {
      options![i].setAttribute('type', `text`)
      options![i].setAttribute('placeholder', `Escreva aqui (o campo vazio será removido)`)
      options![i].addEventListener('change', () => inputOptionHandle)
      options![i].addEventListener('blur', () => inputOptionFocusOut)
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
              <label htmlFor=" ">Opções</label>
              <Input
                type='text'
                placeholder='Escreva aqui (o campo vazio será removido)'
                onChange={inputOptionHandle}
                name='option1'
              />
              <Input
                type='text'
                placeholder='Escreva aqui (o campo vazio será removido)'
                onChange={inputOptionHandle}
                name='option2'
              />
              <Input
                type='text'
                placeholder='Escreva aqui (o campo vazio será removido)'
                onChange={inputOptionHandle}
                name='option3'
              />
              <div id="options">

              </div>
            </InputBlock>
            <Button type='button' onClick={() => { add() }}>bt</Button>
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

export default NewImputFieldCheck;
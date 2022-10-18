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
            </InputBlock>
            <Button type='button'>+ Adicionar nova opção</Button>
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
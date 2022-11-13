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
    inputOption,
    setInputType,
    RemoveOption,
    AddOption
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
              {inputOption?.map((option: any, index: any) => {
                return (
                  <InputBlock key={index}>
                    <Input
                      name='visitor'
                      type='text'
                      onChange={(event) => inputOptionHandle(event, index)}
                      value={option.visitor}
                    />
                    <Button type='button' onClick={() => RemoveOption(index)}>Apagar</Button>
                  </InputBlock>
                )
              })}
            </InputBlock>
            <Button type='button' onClick={() => AddOption()}>+ Adicionar nova opção</Button>
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
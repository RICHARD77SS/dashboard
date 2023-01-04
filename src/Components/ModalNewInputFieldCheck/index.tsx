import Button from "../Button";
import FlexBetween from "../FlexBetween";
import Input from "../Input";
import InputBlock from "../InputBlock";
import { Container, Content, BoxHeader, BoxContent, BoxFooter } from './styles'

import { ExtraFieldsContext } from "../../contexts/extraFieldsContext";
import React from "react";
import Close from "../Close";
import Form from "../Form";
import { AiOutlineCloseCircle } from "react-icons/ai";


const ModalNewImputFieldCheck = () => {
  const { handleSubmit,
    inputName,
    inputNameHandle,
    inputOptionHandle,
    inputOption,
    setInputType,
    RemoveOption,
    AddOption,
    closeModalCheck
  } = React.useContext(ExtraFieldsContext)
  React.useEffect(() => {
    setInputType("checkbox")
  }, [setInputType])
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <BoxHeader>
            <FlexBetween>
              <h3>Criar</h3>
              <Button type='button' onClick={() => closeModalCheck()} ><AiOutlineCloseCircle size='30' /></Button>
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
                required
              />
            </InputBlock>
            <InputBlock >
              {inputOption?.map((option: any, index: any) => {
                return (
                  <InputBlock key={index}>
                    <Input
                      name='option'
                      type='text'
                      onChange={(event) => inputOptionHandle(event, index)}
                      value={option.option}
                 
                    />
                    <Button type='button' onClick={() => RemoveOption(index)}>Apagar</Button>
                  </InputBlock>
                )
              })}
            </InputBlock>
            <Button type='button' name='new' onClick={() => { AddOption() }}>+ Adicionar nova opção</Button>
          </BoxContent>
          <BoxFooter>
            <Button type='submit'>Salvar</Button>
          </BoxFooter>
        </Form>
      </Content>
      <Close onClick={() => closeModalCheck()} />
    </Container>
  )
}

export default ModalNewImputFieldCheck;
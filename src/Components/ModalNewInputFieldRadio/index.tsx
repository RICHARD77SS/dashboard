import React from "react";
import Button from "../Button";
import FlexBetween from "../FlexBetween";
import Input from "../Input";
import InputBlock from "../InputBlock";
import { Container, Content, BoxHeader, BoxContent, BoxFooter } from './styles'

import { ExtraFieldsContext } from "../../contexts/extraFieldsContext";
import Close from "../Close";
import Form from "../Form";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalNewImputFieldRadio = () => {
  const { handleSubmit,
    inputName,
    inputNameHandle,
    inputOptionHandle,
    inputOption,
    setInputType,
    RemoveOption,
    AddOption,
    closeModalRadio
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
              <Button type='button' onClick={() => closeModalRadio()} ><AiOutlineCloseCircle size='30' /></Button>
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
                      name='option'
                      type='text'
                      onChange={(event) => inputOptionHandle(event, index)}
                      value={option.option}
                      required
                    />
                    <Button type='button' onClick={() => RemoveOption(index)}>Apagar</Button>
                  </InputBlock>
                )
              })}
            </InputBlock>
            <Button type='button' name='new' onClick={() => AddOption()}>+ Adicionar nova opção</Button>
          </BoxContent>
          <BoxFooter>
            <Button type='submit'>Salvar</Button>
          </BoxFooter>
        </Form>
      </Content>
      <Close onClick={() => closeModalRadio()} ></Close>
    </Container>
  )
}

export default ModalNewImputFieldRadio;
import React from 'react'
import Button from "../Button";
import FlexBetween from "../FlexBetween";
import Input from "../Input";
import InputBlock from "../InputBlock";
import { Container, Content, BoxHeader, BoxContent, BoxFooter } from './styles'

import { ExtraFieldsContext } from "../../contexts/extraFieldsContext";
import Form from '../Form';
import Close from '../Close';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ModalNewImputFieldText = () => {
  const {
    handleSubmit,
    inputName,
    inputNameHandle,
    setInputType,
    closeModalText,
  } = React.useContext(ExtraFieldsContext)

  React.useEffect(() => {
    setInputType("text")
  }, [setInputType])
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <BoxHeader>
            <FlexBetween>
              <h3>Criar</h3>
              <Button type='button' onClick={() => closeModalText()} ><AiOutlineCloseCircle size='30' /></Button>
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
          </BoxContent>
          <BoxFooter>
            <Button type="submit">Salvar</Button>
          </BoxFooter>
        </Form>
      </Content>
      <Close onClick={() => closeModalText()}></Close>
    </Container>
  )
}

export default ModalNewImputFieldText;
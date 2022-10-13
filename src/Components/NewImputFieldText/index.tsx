import React from 'react'
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
const NewImputFieldText = ({ children, onClick }: Props) => {
  const {
    handleSubmit,
    inputName,
    inputNameHandle,
    setInputType
  } = React.useContext(ExtraFieldsContext)

  React.useEffect(() => {
    setInputType("text")
  }, [])
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
                onChange={inputNameHandle} />
            </InputBlock>
          </BoxContent>
          <BoxFooter>
            <Button type="submit">Salvar</Button>
          </BoxFooter>
        </Form>
      </Content>
      <Closed onClick={onClick}></Closed>
    </Container>
  )
}

export default NewImputFieldText;
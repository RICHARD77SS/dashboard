import Button from "../Button";
import Input from "../Input";
import InputBlock from "../InputBlock";
import { ExtraFieldsContext } from "../../contexts/extraFieldsContext";
import React from "react";

import { Container, Content, Form } from './styles'
import { useAxios } from "../../hooks/useAxios";
import { AiOutlineCloseCircle } from "react-icons/ai";



const AdditionalFieldEdit = () => {
  const { data } = useAxios('extraFields')
  const {
    handleEdit,
    inputName,
    inputNameHandle,
    inputOptionHandle,
    closeModall,
    setId,
    index,
    id
  } = React.useContext(ExtraFieldsContext)

  React.useEffect(() => {

    let indexx = index
    let ids = data?.extraFields[indexx]?._id
    setId(ids)

  }, [setId,index,data])


  return (
    <Container>

      <Content>
        <Form>
          <Button onClick={() => { closeModall() }}><AiOutlineCloseCircle size='30' /></Button>
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
          {data?.extraFields[index].inputType === 'checkbox' ?
            <InputBlock >
              <label htmlFor=" ">Opções</label>
              <Input
                type='type'
                placeholder='Escreva aqui (o campo vazio será removido)'
                name='option1'
                onChange={inputOptionHandle}
              />
              <Input
                type='type'
                placeholder='Escreva aqui (o campo vazio será removido)'
                name='option2'
                onChange={inputOptionHandle}
              />
              <Input
                type='type'
                placeholder='Escreva aqui (o campo vazio será removido)'
                name='option3'
                onChange={inputOptionHandle}
              />
              <div id="options">

              </div>
              <Button type='button'>Adicionar</Button>
            </InputBlock>
            : null
          }
          {data?.extraFields[index].inputType === 'radio' ?
            <InputBlock >
              <label htmlFor=" ">Opções</label>
              <Input
                type='type'
                placeholder='Escreva aqui (o campo vazio será removido)'
                name='option1'
                onChange={inputOptionHandle}
              />
              <Input
                type='type'
                placeholder='Escreva aqui (o campo vazio será removido)'
                name='option2'
                onChange={inputOptionHandle}
              />
              <Input
                type='type'
                placeholder='Escreva aqui (o campo vazio será removido)'
                name='option3'
                onChange={inputOptionHandle}
              />
              <div id="options">

              </div>
              <Button type='button'>Adicionar</Button>
            </InputBlock>
            : null
          }

          <Button type='submit' onClick={() => { handleEdit(id) }}>Enivar</Button>
        </Form>
      </Content>
    </Container>
  )
}

export default AdditionalFieldEdit;
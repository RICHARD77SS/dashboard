import React from 'react';
import Input from '../Input';

import { Container, Content, Form } from './styles'

import { FinancialCategoryContext } from '../../contexts/financialCategoryContext';
import Button from '../Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import InputBlock from '../InputBlock';
import Flex from '../Flex';

const ModalFinancialCategoryEdit = () => {
  const { name, description, nameHandler, descriptionHandler, handleSubmit, CloseModal, type, typeHandler } = React.useContext(FinancialCategoryContext)
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Button type='button' onClick={() => CloseModal()}><AiOutlineCloseCircle size='30' /></Button>
          <Input type='text' value={name} onChange={nameHandler} />
          <Input type='text' value={description} onChange={descriptionHandler} />
          <InputBlock>
            <label htmlFor="type">Tipo</label>
            <Flex>
              <Flex>
                <Input id='revenues' type='radio' name='tipo' value='Receita' onChange={typeHandler} checked={type === 'Receita' ? true : false} />
                <label htmlFor="revenues"> <p>Receitas</p> </label>
              </Flex>
              <Flex>
                <Input id='expenses' type='radio' name='tipo' value='Despesa' onChange={typeHandler} checked={type === 'Despesa' ? true : false} />
                <label htmlFor="expenses"> <p>Despesas</p> </label>
              </Flex>
            </Flex>
          </InputBlock>
          <Button type='submit'>Editar</Button>
        </Form>
      </Content>
    </Container>
  )
}

export default ModalFinancialCategoryEdit;
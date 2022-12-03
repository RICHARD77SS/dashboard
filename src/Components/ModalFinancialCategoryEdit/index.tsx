import React from 'react';
import Input from '../Input';

import { Container, Content, Form } from './styles'

import { FinancialCategoryContext } from '../../contexts/financialCategoryContext';
import Button from '../Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ModalFinancialCategoryEdit = () => {
  const { name, description, nameHandler, descriptionHandler, handleSubmit, CloseModal,type,typeHandler } = React.useContext(FinancialCategoryContext)
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Button type='button' onClick={() => CloseModal()}><AiOutlineCloseCircle size='30' /></Button>
          <Input type='text' value={name} onChange={nameHandler} />
          <Input type='text' value={description} onChange={descriptionHandler} />
          <Input type='text' value={type} onChange={typeHandler} />
          <Button type='submit'>Editar</Button>
        </Form>
      </Content>
    </Container>
  )
}

export default ModalFinancialCategoryEdit;
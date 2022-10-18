import React from 'react';
import Input from '../Input';

import { Container, Content, Form } from './styles'

import { CategoryContext } from '../../contexts/categoryContext';
import Button from '../Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const CategoriesEdit = () => {
  const { categoryName, categoryDescription, categoryNameHandler, categoryDescriptionHandler, handleSubmit, CloseModal } = React.useContext(CategoryContext)
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Button type='button' onClick={() => CloseModal()}><AiOutlineCloseCircle size='30' /></Button>
          <Input type='text' value={categoryName} onChange={categoryNameHandler} />
          <Input type='text' value={categoryDescription} onChange={categoryDescriptionHandler} />
          <Button type='submit'>Editar</Button>
        </Form>
      </Content>
    </Container>
  )
}

export default CategoriesEdit;
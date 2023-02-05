import React from 'react';
import Input from '../Input';

import { Container, Content, Form } from './styles'

import { CategoryPatrimoniesContext } from '../../contexts/categoryPatrimoniesContext';
import Button from '../Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const CategoriesPatrimoniesEdit = () => {
  const { name, description, nameHandler, descriptionHandler, handleSubmit, CloseModal } = React.useContext(CategoryPatrimoniesContext)
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Button type='button' onClick={() => CloseModal()}><AiOutlineCloseCircle size='30' /></Button>
          <Input type='text' value={name} onChange={nameHandler} />
          <textarea title='description' value={description} onChange={descriptionHandler} ></textarea>
          <Button type='submit'>Editar</Button>
        </Form>
      </Content>
    </Container>
  )
}

export default CategoriesPatrimoniesEdit;
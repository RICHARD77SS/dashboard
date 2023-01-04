import React from 'react';
import Input from '../Input';

import { Container, Content } from './styles'

import { CategoryContext } from '../../contexts/categoryContext';
import Button from '../Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Close from '../Close';
import Form from '../Form';

const ModalCategoriesEdit = () => {
  const { name, description, nameHandler, descriptionHandler, handleSubmit, CloseModal } = React.useContext(CategoryContext)
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Button type='button' onClick={() => CloseModal()}><AiOutlineCloseCircle size='30' /></Button>
          <Input type='text' value={name} onChange={nameHandler} required />
          <Input type='text' value={description} onChange={descriptionHandler} />
          <Button type='submit'>Editar</Button>
        </Form>
      </Content>
      <Close onClick={() => CloseModal()} />
    </Container>
  )
}

export default ModalCategoriesEdit;
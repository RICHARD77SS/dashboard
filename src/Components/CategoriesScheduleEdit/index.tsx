import React from 'react';
import Input from '../Input';

import { Container, Content, Form } from './styles'

import { CategoryScheduleContext } from '../../contexts/categoryScheduleContext';
import Button from '../Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const CategoriesScheduleEdit = () => {
  const { name, description, nameHandler, descriptionHandler, handleSubmit, CloseModal } = React.useContext(CategoryScheduleContext)
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Button type='button' onClick={() => CloseModal()}><AiOutlineCloseCircle size='30' /></Button>
          <Input type='text' value={name} onChange={nameHandler} />
          <textarea title='desc' value={description} onChange={descriptionHandler} ></textarea>
          <Button type='submit'>Editar</Button>
        </Form>
      </Content>
    </Container>
  )
}

export default CategoriesScheduleEdit;
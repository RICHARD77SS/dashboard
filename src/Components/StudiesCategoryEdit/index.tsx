import React from 'react';
import Input from '../Input';

import { Container, Content, Form } from './styles'

import {StudiesCategoryContext } from '../../contexts/studiesCategoryContext';
import Button from '../Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const StudiesCategoryEdit = () => {
  const { name, description, nameHandler, descriptionHandler, handleSubmit, CloseModal } = React.useContext(StudiesCategoryContext)
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Button type='button' onClick={() => CloseModal()}><AiOutlineCloseCircle size='30' /></Button>
          <Input type='text' value={name} onChange={nameHandler} />
          <Input type='text' value={description} onChange={descriptionHandler} />
          <Button type='submit'>Editar</Button>
        </Form>
      </Content>
    </Container>
  )
}

export default StudiesCategoryEdit;
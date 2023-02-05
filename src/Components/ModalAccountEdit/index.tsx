import React from 'react';
import Input from '../Input';

import { Container, Content, Form } from './styles'

import { AccountContext } from '../../contexts/accountContext';
import Button from '../Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Close from '../Close';

const ModalAccountEdit = () => {
  const { name, description, nameHandler, descriptionHandler, handleSubmit, CloseModal } = React.useContext(AccountContext)
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
      <Close onClick={()=>CloseModal()} />
    </Container>
  )
}

export default ModalAccountEdit;
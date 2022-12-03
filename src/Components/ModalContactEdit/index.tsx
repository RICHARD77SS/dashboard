import React from 'react';
import Input from '../Input';

import { Container, Content, Form } from './styles'

import { ContactContext } from '../../contexts/contactContext';
import Button from '../Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ModalContactEdit = () => {
  const { name,
    email,
    category,
    phone1,
    phone2,
    anotations,
    nameHandler,
    emailHandler,
    categoryHandler,
    phone1Handler,
    phone2Handler,
    anotationsHandler,
    handleSubmit,
    CloseModal,
    type,
    typeHandler } = React.useContext(ContactContext)
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Button type='button' onClick={() => CloseModal()}><AiOutlineCloseCircle size='30' /></Button>
          <Input type='text' value={name} onChange={nameHandler} />
          <Input type='text' value={email} onChange={emailHandler} />
          <Input type='text' value={category} onChange={categoryHandler} />
          <Input type='text' value={type} onChange={typeHandler} />
          <Input type='number' value={phone1} onChange={phone1Handler} />
          <Input type='number' value={phone2} onChange={phone2Handler} />
          <Input type='text' value={anotations} onChange={anotationsHandler} />
          <Button type='submit'>Editar</Button>
        </Form>
      </Content>
    </Container>
  )
}

export default ModalContactEdit;
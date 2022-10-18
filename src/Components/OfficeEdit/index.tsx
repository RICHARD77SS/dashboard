import React from 'react';
import Input from '../Input';

import { Container, Content, Form } from './styles'

import { PositionsContext } from '../../contexts/positionsContexts';
import Button from '../Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const OfficeEdit = () => {
  const { name, nameHandler, handleSubmit, CloseModal } = React.useContext(PositionsContext)
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Button type='button' onClick={() => CloseModal()}><AiOutlineCloseCircle size='30' /></Button>
          <Input type='text' value={name} onChange={nameHandler} />
          <Button type='submit'>Editar</Button>
        </Form>
      </Content>
    </Container>
  )
}

export default OfficeEdit;
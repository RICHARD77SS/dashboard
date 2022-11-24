import React from 'react';
import Input from "../Input"
import InputBlock from "../InputBlock"

import { ModalContainer, ModalContent, Form, ModalClose } from './styles'
import { OrientationContext } from '../../contexts/orientationContext';
import Button from '../Button';

const ModalCreateOrientation = () => {
  const { className, classNameHandler, anotations, anotationsHandler, handleSubmit, CloseModalCreateOrientation } = React.useContext(OrientationContext);
  return (
    <ModalContainer>
      <ModalContent>
        <Form onSubmit={handleSubmit}>
          <Button type='button' onClick={() => CloseModalCreateOrientation()}>Close</Button>
          <InputBlock>
            <label htmlFor="classname">Nome da turma</label>
            <Input type='text' id='classname' value={className} onChange={classNameHandler} />
          </InputBlock>
          <InputBlock>
            <label htmlFor="anotations">Anotações</label>
            <textarea title='desc' value={anotations} onChange={anotationsHandler}>

            </textarea>
          </InputBlock>
          <Button type='submit'>Salvar</Button>
        </Form>
      </ModalContent>
      <ModalClose onClick={() => CloseModalCreateOrientation()}></ModalClose>
    </ModalContainer>
  )
}

export default ModalCreateOrientation
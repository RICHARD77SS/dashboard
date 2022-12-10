import React from 'react';
import Input from '../Input';

import { Container, Content, Form } from './styles'

import { ContactContext } from '../../contexts/contactContext';
import Button from '../Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useAxios } from '../../hooks/useAxios';

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
  const { data } = useAxios('contactcategory')
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Button type='button' onClick={() => CloseModal()}><AiOutlineCloseCircle size='30' /></Button>
          <Input type='text' value={name} onChange={nameHandler} />
          <Input type='text' value={email} onChange={emailHandler} />
          <select title='text' value={category} onChange={categoryHandler} >
            <option value=''></option>
            {data?.contactCategory.map((category: any, index: number) => {
              return (
                <option key={index} value={category.name}>{category.name}</option>
              )
            })}
          </select>

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
import React from 'react';
import Input from '../Input';

import { Container, Content, Form } from './styles'
import Button from '../Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { SchoolsContext } from '../../contexts/schoolsContext';
import { useAxios } from '../../hooks/useAxios';
import Flex from '../Flex';

const ModalEditSchools = () => {
  const { data: dataPerson } = useAxios('person')
  const { name,
    nameHandler,
    description,
    descriptionHandler,
    managers,
    managersHandler,
    handleSubmit,
    CloseModal } = React.useContext(SchoolsContext)

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Button type='button' onClick={() => CloseModal()}><AiOutlineCloseCircle size='30' /></Button>
          <Input type='text' value={name} onChange={nameHandler} />
          {dataPerson.person.map((person: any, index: number) => {
            return (
              <Flex key={index}>
                <label htmlFor={person.name}>{person.name}</label>
                <Input id={person.name} type='checkbox' checked={managers?.includes(person.name) ? true : false} value={person.name} onChange={managersHandler} />
              </Flex>
            )
          })}
          <Input type='text' value={description} onChange={descriptionHandler} />
          <Button type='submit'>Editar</Button>
        </Form>
      </Content>
    </Container>
  )
}

export default ModalEditSchools;
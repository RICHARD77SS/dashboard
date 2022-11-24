
import React from 'react'
import { OrientationContext } from '../../contexts/orientationContext'
import { useAxios } from '../../hooks/useAxios'
import Button from '../Button'
import Flex from '../Flex'
import Input from '../Input'
import InputBlock from '../InputBlock'


import { Form, ModalContainer, ModalContent, ModalClose } from './styles'

const ModalAddPeopleOrientationMeeting = () => {
  const { handleSubmit, CloseModalPeople, people, peopleHandler } = React.useContext(OrientationContext)
  const { data: dataPerson } = useAxios('person')
  return (
    <ModalContainer>
      <ModalContent >
        <Form onSubmit={handleSubmit}>
          <Button onClick={() => CloseModalPeople()} type='button'>Close</Button>
          <InputBlock>
            <label>Pessoas</label>
            {dataPerson?.person.map((person: any, index: number) => {
              return (
                <Flex key={index}>
                  <Input type='checkbox' id={person.name + index} name={person.name} value={person.name} checked={people?.includes(person.name) ? true : false} onChange={peopleHandler} />
                  <label htmlFor={person.name + index}>{person.name}</label>
                </Flex>
              )
            })}
          </InputBlock>
          <Button type='submit'>Salvar</Button>

        </Form>
      </ModalContent>
      <ModalClose onClick={() => CloseModalPeople()}></ModalClose>
    </ModalContainer>
  )
}

export default ModalAddPeopleOrientationMeeting
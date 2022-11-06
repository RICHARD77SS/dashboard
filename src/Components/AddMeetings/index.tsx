import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { MeetingsContext } from '../../contexts/meetingsContext';
import { useAxios } from '../../hooks/useAxios';
import BoxHeader from '../BoxHeader';
import Button from '../Button';
import Flex from '../Flex';
import Input from '../Input';
import InputBlock from '../InputBlock';

import { Container, ModalContent, Form, CloseModal } from './styles'



const AddMeetings = () => {
  const { name,
    group,
    date,
    subject,
    value,
    participants,
    visitors,
    notes,
    nameHandler,
    setGroup,
    dateHandler,
    subjectHandler,
    valueHandler,
    participantsHandler,
    visitorsHandler,
    notesHandler,
    handleSubmit,
    handleDelet,
    setModalOpen
  } = React.useContext(MeetingsContext)
  const { data } = useAxios('person')
  return (
    <Container>
      <ModalContent>
        <BoxHeader title='Adicionar Reunião'><Button onClick={() => setModalOpen(false)}><AiFillCloseCircle /></Button></BoxHeader>
        <Form onSubmit={handleSubmit}>
          <Flex>
            <InputBlock>
              <label htmlFor=''>Data da reunião</label>
              <Input id='' type='date' value={date} onChange={dateHandler} />
            </InputBlock>
            <InputBlock>
              <label htmlFor=''>Assunto</label>
              <Input id='' type='text' value={subject} onChange={subjectHandler} />
            </InputBlock>
            <InputBlock>
              <label htmlFor=''>Valor total</label>
              <Input id='' type='number' value={value} onChange={valueHandler} />
            </InputBlock>
          </Flex>
          <Flex>
            <InputBlock>
              <label htmlFor=''>Lista de presença</label>
              <InputBlock>
                {data?.person.map((person: any, index: number) => {
                  return (
                    <Flex key={index}>
                      <Input id={person.name} type='checkbox' value={person.name} onChange={participantsHandler} />
                      <label htmlFor={person.name}>{person.name}</label>
                    </Flex>
                  )
                })}
              </InputBlock>
            </InputBlock>
            <InputBlock>
              <label htmlFor=''>Visitantes(0)</label>
              <Input id='' type='text' value={visitors} onChange={visitorsHandler} />
              <Button>+Adicionar visitantes</Button>
            </InputBlock>
          </Flex>

          <InputBlock>
            <label htmlFor='notes'>Anotações da reunião</label>
            <textarea id='notes' value={notes} onChange={notesHandler}>

            </textarea>
          </InputBlock>
          <Button type='submit'>Adicionar</Button>
        </Form>
      </ModalContent>
      <CloseModal onClick={() => setModalOpen(false)}>

      </CloseModal>
    </Container>
  )
}

export default AddMeetings;
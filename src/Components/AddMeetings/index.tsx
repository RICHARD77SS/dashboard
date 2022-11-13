import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { MeetingsContext } from '../../contexts/meetingsContext';
import { useAxios } from '../../hooks/useAxios';
import BoxHeader from '../BoxHeader';
import Button from '../Button';
import Flex from '../Flex';
import Input from '../Input';
import InputBlock from '../InputBlock';

import { Container, ModalContent, Form, CloseModal, List } from './styles'



const AddMeetings = () => {
  const {
    date,
    subject,
    value,
    participants,
    visitors,
    notes,
    dateHandler,
    subjectHandler,
    valueHandler,
    participantsHandler,
    visitorsHandler,
    notesHandler,
    handleSubmit,
    handleDelete,
    setModalOpen,
    id,
    index,
    AddVisitor,
    RemoveVisitor
  } = React.useContext(MeetingsContext)
  const { data } = useAxios('person')
  const { data: datameetings } = useAxios('meetings')
  console.log(visitors)
  return (
    <Container>
      <ModalContent>
        <Flex>
          <h3>Adicionar Reunião</h3>
          <Button onClick={() => setModalOpen(false)}><AiFillCloseCircle size='20' /></Button>
          {id ? <Button onClick={() => handleDelete(id)}>Apagar Reunião</Button> : null}

        </Flex>

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
          <br />
          <Flex>
            <List>
              <label htmlFor=''>Lista de presença</label>
              <br />
              <Flex>
                {id ?
                  <Flex>
                    <List>
                      <h3>Remover</h3>
                      {datameetings?.meetings[index].participants.map((meeting: any, index: number) => {

                        return (
                          <Flex key={index}>
                            <Input type='checkbox' value={meeting} onChange={participantsHandler} />
                            <label >{meeting}</label>
                          </Flex>
                        )
                      })}
                    </List>
                    <List>

                      <h3>Adicionar</h3>
                      {data?.person.map((person: any, index: number) => {

                        return datameetings?.meetings[index]?.participants.includes(person.name) ?
                          null
                          :
                          <Flex key={index}>
                            <Input id={person.name} type='checkbox' value={person.name} onChange={participantsHandler} />
                            <label htmlFor={person.name}>{person.name}</label>
                          </Flex>


                      })}
                    </List>
                  </Flex>

                  :
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
                }
              </Flex>
            </List>
            <List>
              <label htmlFor=''>Visitantes(0)</label>
              <List id='visitors'>
                {visitors?.map((visitor: any, index: number) => {
                  return (
                    <InputBlock key={index}>
                      <Input
                        name='visitor'
                        type='text'
                        onChange={(event) => visitorsHandler(event, index)}
                        value={visitor.visitor}
                      />
                      <Button type='button' onClick={() => RemoveVisitor(index)}>Apagar</Button>
                    </InputBlock>
                  )
                })}
              </List>
              <h5>Adicione um nome antes de<br /> adicionar um novo campo</h5>
              <Button type='button' onClick={() => AddVisitor()}>+Adicionar visitantes</Button>
            </List>
          </Flex>
          <br />
          <InputBlock>
            <label htmlFor='notes'>Anotações da reunião</label>
            <textarea id='notes' value={notes} onChange={notesHandler}>

            </textarea>
          </InputBlock>
          <Button type='submit'>{id ? 'Salvar' : 'Adicionar'}</Button>
        </Form>
      </ModalContent>
      <CloseModal onClick={() => setModalOpen(false)}>

      </CloseModal>
    </Container>
  )
}

export default AddMeetings;
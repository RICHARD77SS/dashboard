import React from 'react'

import { useAxios } from '../../hooks/useAxios'
import Button from '../Button'
import Container from '../Container'
import Flex from '../Flex'
import Input from '../Input'
import InputBlock from '../InputBlock'

import { Content, Form, Box, Modal, ModalContent, ModalClose, User, Meeting, List } from './styles'
import { Link, useParams } from 'react-router-dom';
import { OrientationContext } from '../../contexts/orientationContext'
import ModalEditOrientationMeetings from './../ModalEditOrientationMeetings/index';
import BoxHeader from '../BoxHeader'
import ModalAddPeopleOrientationMeeting from '../ModalAddPeopleOrientationMeeting'

const ViewOrientation = () => {
  const { data: dataPerson } = useAxios('person')
  const { data: dataOrientation } = useAxios('orientation')
  const {
    setId,
    setClassName,
    setStatus,
    setLideres,
    setAnotations,
    classNameHandler,
    statusHandler,
    lideresHandler,
    anotationsHandler,
    className,
    status,
    anotations,
    lideres,
    handleSubmit,
    setPeople,
    AddMeeting,
    meetings,
    setMeetings,
    handleEditMeeting,
    DeleteMeeting,
    OpenModalPeople,
  } = React.useContext(OrientationContext)
  console.log(meetings)
  let { id } = useParams()
  React.useEffect(() => {
    setId(dataOrientation?.orientation[`${id}`]._id)
    setClassName(dataOrientation?.orientation[`${id}`].className)
    setStatus(dataOrientation?.orientation[`${id}`].status)
    setLideres(dataOrientation?.orientation[`${id}`].lideres)
    setAnotations(dataOrientation?.orientation[`${id}`].anotations)
    setPeople(dataOrientation?.orientation[`${id}`].people)
    setMeetings(dataOrientation?.orientation[`${id}`].meetings)
  }, [dataOrientation?.orientation, id, setAnotations, setClassName, setId, setLideres, setMeetings, setPeople, setStatus])

  return (
    <Container>
      <Content>
        <br />
        <Form onSubmit={handleSubmit}>
          <InputBlock>
            <label htmlFor='scoolName'>Nome da turma</label>
            <Input type='text' id='scoolName' value={className} onChange={classNameHandler} />
          </InputBlock>
          <InputBlock>
            <label>Status</label>
            <select title='schools' value={status} onChange={statusHandler}>
              <option value=""></option>
              <option value="Em andamento">Em andamento</option>
              <option value="Concluido">Concluido</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Lideres</label>
            <List>
              {dataPerson?.person.map((person: any, index: number) => {
                return (
                  <Flex key={index}>
                    <Input type='checkbox' id={person.name} name={person.name} value={person.name} checked={lideres?.includes(person.name) ? true : false} onChange={lideresHandler} />
                    <label htmlFor={person.name}>{person.name}</label>
                  </Flex>
                )
              })}
            </List>
          </InputBlock>
          <InputBlock>
            <label htmlFor="description">Descrição</label>
            <textarea title='textarea' name="" id="description" cols={30} rows={10} value={anotations} onChange={anotationsHandler}></textarea>
          </InputBlock>
          <Button type='submit'>Salvar</Button>
        </Form>
        <Box>
          <BoxHeader title='Pessoas'>
            <Button type='button' onClick={() => OpenModalPeople()}>Add/remove</Button>
          </BoxHeader>
          {dataOrientation?.orientation[`${id}`].people.map((people: any, index: number) => {
            return (
              <User key={index}>
                <h4>{people}</h4>
              </User>
            )
          })}
        </Box>
        <Box>
          <BoxHeader title='Reuniões'>
            <Button type='button' onClick={() => AddMeeting(meetings.length)}>Add</Button>
          </BoxHeader>
          {dataOrientation?.orientation[`${id}`].meetings.map((meetings: any, index: number) => {
            return (
              <Meeting key={index}>
                <Button type='button' onClick={() => handleEditMeeting(index)}>Edit</Button>
                <h4>{meetings.subject}</h4>
                <Button type='button' onClick={(event) => DeleteMeeting(event, index)}>Delete</Button>
              </Meeting>
            )
          })}
        </Box>
      </Content>
    </Container>
  )
}

export default ViewOrientation;
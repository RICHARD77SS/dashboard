import React from 'react';
import Input from '../Input';

import { Container, Content, Form } from './styles'
import Button from '../Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useAxios } from '../../hooks/useAxios';
import InputBlock from '../InputBlock';

import Flex from '../Flex';
import { OrientationContext } from '../../contexts/orientationContext';
import { useParams } from 'react-router-dom';

const ModalEditOrientationMeetings = () => {
  const { data: dataOrientation } = useAxios('orientation')
  const {
    meetingsHandler,
    meetings,
    CloseModalMeetings,
    meetingIndex,
    handleSubmit,
    setOpenModalMeeting
  } = React.useContext(OrientationContext)
  let { id } = useParams()

  let meetingsLength = dataOrientation?.orientation[`${id}`]?.meetings.length
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          {meetings.length > meetingsLength ?
            <Button type='button' onClick={() => CloseModalMeetings()}><AiOutlineCloseCircle size='30' /></Button>
            : <Button type='button' onClick={() => setOpenModalMeeting(false)}><AiOutlineCloseCircle size='30' /></Button>
          }
          <InputBlock>
            <label htmlFor='subject'>Assunto</label>
            <Input type='text' id='subject' name='subject' value={meetings[`${meetingIndex}`]?.subject} onChange={(event) => meetingsHandler(event)} />
          </InputBlock>
          <InputBlock>
            <label htmlFor='description'>Descrição</label>
            <textarea name='description' id='description' value={meetings[`${meetingIndex}`]?.description} onChange={(event) => meetingsHandler(event)}></textarea>
          </InputBlock>
          <Flex>
            <InputBlock>
              <label htmlFor='data'>Data</label>
              <Input type='date' id='data' name='date' value={meetings[`${meetingIndex}`]?.date?.split('T')[0]} onChange={(event) => meetingsHandler(event)} />
            </InputBlock>
            <InputBlock>
              <label htmlFor='statTime'>Horário inicial</label>
              <Input type='number' id='statTime' name='startTime' value={meetings[`${meetingIndex}`]?.startTime} onChange={(event) => meetingsHandler(event)} max={2359} min={0} />
            </InputBlock>
            <InputBlock>
              <label htmlFor='duration'>Duração</label>
              <select title='duration' name='duration' value={meetings[`${meetingIndex}`]?.duration} onChange={(event) => meetingsHandler(event)}>
                <option value='30min'>30min</option>
                <option value='1h'>1h</option>
                <option value='2h'>2h</option>
                <option value='3h'>3h</option>
              </select>
            </InputBlock>
          </Flex>
          <Flex>
            <InputBlock>
              <label htmlFor='statTime'>Local</label>
              <Input type='text' id='statTime' name='place' value={meetings[`${meetingIndex}`]?.place} onChange={(event) => meetingsHandler(event)} />
            </InputBlock>
            <InputBlock>
              <label htmlFor='status'>Status</label>
              <select title='status' name='statusMeeting' value={meetings[`${meetingIndex}`]?.statusMeeting} onChange={(event) => meetingsHandler(event)}>
                <option value='Pendente'>Pendente</option>
                <option value='Concluido'>Concluido</option>
              </select>
            </InputBlock>
          </Flex>
          <Button type='submit'>Salvar</Button>
        </Form>
      </Content>
    </Container>
  )
}

export default ModalEditOrientationMeetings;
import React from 'react';
import { ScheduleCalendarContext } from '../../contexts/scheduleCalendarContext';

import { useAxios } from '../../hooks/useAxios';

import BoxContent from '../BoxContent';
import BoxHeader from '../BoxHeader';
import Button from '../Button';
import Flex from '../Flex';
import Input from '../Input';
import InputBlock from '../InputBlock';
import TextArea from '../TextArea';
import TextEditor from '../TextEditor';

import { Container, Form, Close } from './styles';
const ModalEditScheduleCalendar = () => {
  const { data } = useAxios('categorypatrimonies')

  const {
    name,
    visibility,
    color,
    startDate,
    startHour,
    endDate,
    endHour,
    repeat,
    category,
    place,
    anotations,
    nameHandler,
    visibilityHandler,
    colorHandler,
    startDateHandler,
    startHourHandler,
    endDateHandler,
    endHourHandler,
    repeatHandler,
    categoryHandler,
    placeHandler,
    anotationsHandler,
    setAnotations,
    handleSubmit,
    handleDelete,
    id,
    CloseModal
  } = React.useContext(ScheduleCalendarContext)
  return (

    <Container>
      <Form onSubmit={handleSubmit}>
        <BoxHeader title='Transferencia'>
          <Button onClick={() => CloseModal()} type='button'>X</Button>
        </BoxHeader>
        <BoxContent>
          <Flex>
            <InputBlock>
              <label htmlFor="name">Nome</label>
              <Input type='text' value={name} onChange={nameHandler} />
            </InputBlock>
            <InputBlock>
              <label htmlFor="visibilidade">Visibilidade</label>
              <select title='visibility' value={visibility} onChange={visibilityHandler} >
                <option value='Privado'>Privado</option>
                <option value='Publico'>Publico</option>
              </select>
            </InputBlock>
            <InputBlock>
              <label htmlFor="Cor">Cor</label>
              <select title='color' value={color} onChange={colorHandler} >
                <option value='blue'>Azul</option>
                <option value='red'>Vermelho</option>
              </select>
            </InputBlock>
          </Flex>
          <Flex>
            <InputBlock>
              <label htmlFor="startDate">Data inicial</label>
              <Input type='date' value={startDate} onChange={startDateHandler} />
              <label htmlFor="starHour">Horario inicial</label>
              <Input type='number' value={startHour} onChange={startHourHandler} />
            </InputBlock>
            <InputBlock>
              <label htmlFor="endDate">Data final</label>
              <Input type='date' value={endDate} onChange={endDateHandler} />
              <label htmlFor="endHour">Horario final</label>
              <Input type='number' value={endHour} onChange={endHourHandler} />
            </InputBlock>
          </Flex>
          <Flex>
            <InputBlock>
              <label htmlFor="repeat">Repetir</label>
              <select title='text' value={repeat} onChange={repeatHandler} >
                <option value='Não Repetir'>Não Repetir</option>
                <option value='Todo Dia'>Todo Dia</option>
                <option value='Toda Semana'>Toda Semana</option>
                <option value='Todo mês'>Todo mês</option>
                <option value='Todo Ano'>Todo Ano</option>
                <option value='Personalizado'>Personalizado</option>
              </select>
            </InputBlock>
            <InputBlock>
              <label htmlFor="category">Categoria</label>
              <select id='category' value={category} onChange={categoryHandler} >
                <option value='red'>Vermelho</option>
              </select>
            </InputBlock>
          </Flex>
          <InputBlock>
            <label htmlFor="place">Local</label>
            <Input type='text' value={place} onChange={placeHandler} />
          </InputBlock>
          <TextArea height='300px'>
            <TextEditor value={anotations} setValue={setAnotations} />
          </TextArea>
          {id ? <Button onClick={() => handleDelete(id)}>Remover</Button> : null}
          <Button type='submit' >Salvar</Button>
        </BoxContent>
      </Form>
      <Close onClick={() => CloseModal()}></Close>
    </Container>
  )
}

export default ModalEditScheduleCalendar;
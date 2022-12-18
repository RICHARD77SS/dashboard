import React from 'react';
import { ScheduleCalendarContext } from '../../contexts/scheduleCalendarContext';

import { useAxios } from '../../hooks/useAxios';

import BoxContent from '../BoxContent';
import BoxHeader from '../BoxHeader';
import Button from '../Button';
import Flex from '../Flex';
import Input from '../Input';
import InputBlock from '../InputBlock';

import { Container, Form, Close } from './styles';
const ModalEditScheduleCalendar = () => {
  const { data } = useAxios('categorypatrimonies')

  const {
    name,
    visibility,
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
    startDateHandler,
    startHourHandler,
    endDateHandler,
    endHourHandler,
    repeatHandler,
    categoryHandler,
    placeHandler,
    anotationsHandler,
    handleSubmit,
    handleDelete,
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
              <label htmlFor="code">Código</label>
              <Input type='text' value={visibility} onChange={visibilityHandler} />
            </InputBlock>
          </Flex>
          
          <Button type='submit' >Salvar</Button>
        </BoxContent>
      </Form>
      <Close onClick={() => CloseModal()}></Close>
    </Container>
  )
}

export default ModalEditScheduleCalendar;
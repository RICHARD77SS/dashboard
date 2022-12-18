import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import ModalEditScheduleCalendar from '../Components/ModalEditScheduleCalendar';

export const ScheduleCalendarContext = React.createContext();

export function ScheduleCalendarContextProvider({ children }) {
  const { data, mutate } = useAxios('scheduleCalendar');

  const [id, setId] = React.useState();
  const [name, setName] = React.useState()
  const [visibility, setVisibility] = React.useState('Privado')
  const [color, setColor] = React.useState('blue')
  const [startDate, setStartDate] = React.useState()
  const [startHour, setStartHour] = React.useState()
  const [endDate, setEndDate] = React.useState()
  const [endHour, setEndHour] = React.useState()
  const [repeat, setRepeat] = React.useState('Não Repetir')
  const [category, setCategory] = React.useState()
  const [place, setPlace] = React.useState()
  const [anotations, setAnotations] = React.useState()

  const [openModal, setOpenModal] = React.useState(false)

  function nameHandler(event) {
    setName(event.target.value);
  }
  function visibilityHandler(event) {
    setVisibility(event.target.value);
  }
  function colorHandler(event) {
    setColor(event.target.value);
  }
  function startDateHandler(event) {
    setStartDate(event.target.value)
  }
  function startHourHandler(event) {
    setStartHour(event.target.value)
  }
  function endDateHandler(event) {
    setEndDate(event.target.value)
  }
  function endHourHandler(event) {
    setEndHour(event.target.value)
  }
  function repeatHandler(event) {
    setRepeat(event.target.value)
  }
  function categoryHandler(event) {
    setCategory(event.target.value)
  }
  function placeHandler(event) {
    setPlace(event.target.value)
  }
  function anotationsHandler(event) {
    setAnotations(event.target.value)
  }

  function OpenModal() {
    setOpenModal(true)
  }
  function CloseModal() {
    setOpenModal(false)
    setName('')
    setVisibility('')
    setColor('')
    setStartDate('')
    setStartHour('')
    setEndDate('')
    setEndHour('')
    setRepeat('')
    setCategory('')
    setPlace('')
    setAnotations('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    CloseModal()
    const scheduleCalendar = {
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
      anotations
    }
    if (id) {
      api.put(`schedulecalendar/${id}`, scheduleCalendar)
      window.alert('scheduleCalendar Editada')
      const updatedScheduleCalendar = {
        scheduleCalendar: data.scheduleCalendar?.map((scheduleCalendar) => {
          if (scheduleCalendar._id === id) {
            return {
              ...scheduleCalendar,
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
              anotations
            };
          }
          return scheduleCalendar
        }),
      };
      mutate(updatedScheduleCalendar, false)
    } else {
      api.post('schedulecalendar', scheduleCalendar);
      window.alert('scheduleCalendar adicionada')
      const updatedScheduleCalendar = {
        scheduleCalendar: [...data.scheduleCalendar, scheduleCalendar]
      }
      mutate(updatedScheduleCalendar, false)
    }
  }
  function handleDelete(id) {
    api.delete(`schedulecalendar/${id}`);
    window.alert('scheduleCalendar removido')
    const updatedScheduleCalendar = {
      scheduleCalendar: data.scheduleCalendar?.filter((scheduleCalendar) => scheduleCalendar._id !== id)
    };
    mutate(updatedScheduleCalendar, false)
  }

  function handleEdit(categoryId,
    categoryName,
    scheduleVisibility,
    scheduleColor,
    scheduleStartDate,
    scheduleStartHour,
    scheduleEndDate,
    scheduleEndHour,
    scheduleRepeat,
    scheduleCategory,
    schedulePlace,
    scheduleAnotations,
  ) {
    setName(categoryName);
    setVisibility(scheduleVisibility);
    setColor(scheduleColor);
    setStartDate(scheduleStartDate)
    setStartHour(scheduleStartHour)
    setEndDate(scheduleEndDate)
    setEndHour(scheduleEndHour)
    setRepeat(scheduleRepeat)
    setCategory(scheduleCategory)
    setPlace(schedulePlace)
    setAnotations(scheduleAnotations)
    setId(categoryId);
    setOpenModal(true);
  }
  return <ScheduleCalendarContext.Provider value={{
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
    handleSubmit,
    handleDelete,
    setId,
    id,
    setAnotations,
    openModal,
    handleEdit,
    setOpenModal,
    OpenModal,
    CloseModal
  }}>
    {children}
    {openModal && <ModalEditScheduleCalendar />}
  </ScheduleCalendarContext.Provider>
}
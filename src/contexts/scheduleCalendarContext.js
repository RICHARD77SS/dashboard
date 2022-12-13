import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import CategoriesPatrimoniesEdit from '../Components/CategoriesPatrimoniesEdit';

export const CategoryPatrimoniesContext = React.createContext();

export function CategoryPatrimoniesContextProvider({ children }) {
  const { data, mutate } = useAxios('scheduleCalendar');

  const [id, setId] = React.useState();
  const [name, setName] = React.useState()
  const [visibility, setVisibility] = React.useState()
  const [startDate, setStartDate] = React.useState()
  const [startHour, setStartHour] = React.useState()
  const [endDate, setEndDate] = React.useState()
  const [endHour, setEndHour] = React.useState()
  const [repeat, setRepeat] = React.useState()
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
  return <CategoryPatrimoniesContext.Provider value={{
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
    setId,
    id,
    openModal,
    handleEdit,
    setOpenModal,
    OpenModal,
    CloseModal
  }}>
    {children}
    {openModal && <CategoriesPatrimoniesEdit />}
  </CategoryPatrimoniesContext.Provider>
}
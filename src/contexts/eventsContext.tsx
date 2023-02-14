import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import ModalAccountEdit from '../Components/ModalAccountEdit';

export const EventsContext = React.createContext();

export function EventsContextProvider({ children }) {
  const { data, mutate } = useAxios('events');

  const [id, setId] = React.useState();
  const [name, setName] = React.useState('')
  const [subName, setSubName] = React.useState('')
  const [startDate, setStartDate] = React.useState('')
  const [endDate, setEndDate] = React.useState('')
  const [notification, setNotification] = React.useState(false)
  const [payment, setPayment] = React.useState('')
  const [value, setValue] = React.useState('')
  const [numberOfVacancies, setNumberOfVacancies] = React.useState('')
  const [formOfPayment, setFormOfPayment] = React.useState('')
  const [schedule, setSchedule] = React.useState([])
  const [aboutTheEvent, setAboutTheEvent] = React.useState('')
  const [place, setPlace] = React.useState('')
  const [image, setImage] = React.useState('')
  const [speakers, setSpeakers] = React.useState([])

  const [openModal, setOpenModal] = React.useState(false)

  function nameHandler(event) {
    setName(event.target.value);
  }
  function subNameHandler(event) {
    setSubName(event.target.value);
  }
  function startDateHandler(event) {
    setStartDate(event.target.value)
  }
  function endDateHandler(event) {
    setEndDate(event.target.value)
  }
  function notificationHandler(event) {
    setNotification(event.target.checked)
  }
  function paymentHandler(event) {
    setPayment(event.target.value)
  }
  function valueHandler(event) {
    setValue(event.target.value)
  }
  function numberOfVacanciesHandler(event) {
    setNumberOfVacancies(event.target.value)
  }
  function formOfPaymentHandler(event) {
    setFormOfPayment(event.target.value)
  }

  function AddSchedule() {
    let obj = {
      title: "",
      date: "",
      hours: ""
    }
    setSchedule([...schedule, obj])
  }
  function scheduleHandler(event, index) {
    let data = [...schedule];
    data[index][event.target.name] = event.target.value;
    setSchedule(data)
  }
  function RemoveSchedule(index) {
    let data = [...schedule];
    data.splice(index, 1)
    setSchedule(data)
  }


  function aboutTheEventHandler(event) {
    setAboutTheEvent(event.target.value)
  }

  function placeHandler(event) {
    setPlace(event.target.value)
  }

  function imageHandler(event) {
    setImage(event.target.value)
  }

  function AddSpeakers() {
    let obj = {
      image: "",
      name: "",
      description: ""
    }
    setSpeakers([...speakers, obj])
  }
  function RemoveSpeakers(index) {
    let data = [...speakers]
    data.splice(index, 1)
    setSpeakers(data)
  }
  function speakersHandler(event, index) {
    let data = [...speakers]
    data[index][event.target.name] = event.target.value
    setSpeakers(data)
  }

  function CloseModal() {
    setId('')
    setOpenModal(false)
    setName('')
    setSubName('')
    setStartDate('')
    setEndDate('')
    setNotification(false)
    setPayment('')
    setValue('')
    setNumberOfVacancies('')
    setFormOfPayment('')
    setSchedule([])
    setAboutTheEvent('')
    setPlace('')
    setImage('')
    setSpeakers([])
  }

  function handleSubmit(event) {
    event.preventDefault()
    CloseModal()
    const events = {
      name,
      subName,
      startDate,
      endDate,
      notification,
      payment,
      value,
      numberOfVacancies,
      formOfPayment,
      schedule,
      aboutTheEvent,
      place,
      image,
      speakers
    }
    if (id) {
      api.put(`events/${id}`, events)
      window.alert('events Editada')
      const updatedEvents = {
        events: data.events?.map((events) => {
          if (events._id === id) {
            return {
              ...events,
              name,
              subName,
              startDate,
              endDate,
              notification,
              payment,
              value,
              numberOfVacancies,
              formOfPayment,
              schedule,
              aboutTheEvent,
              place,
              image,
              speakers
            };
          }
          return events
        }),
      };
      mutate(updatedEvents, false)
    } else {
      api.post('events', events);
      window.alert('events adicionada')
      const updatedEvents = {
        events: [...data.events, events]
      }
      mutate(updatedEvents, false)
    }
  }
  function handleDelete(id) {
    api.delete(`events/${id}`);
    window.alert('events removido')
    const updatedEvents = {
      events: data.events?.filter((events) => events._id !== id)
    };
    mutate(updatedEvents, false)
  }

  function handleEdit(eventsId,
    eventsName,
    eventsSubName,
    eventsStartDate,
    eventsEndDate,
    eventsNotification,
    eventsPayment,
    eventsValue,
    eventsNumberOfVacancies,
    eventsFormOfPayment,
    eventsSchedule,
    eventsAboutTheEvent,
    eventsPlace,
    eventsImage,
    eventsSpeakers
  ) {
    setId(eventsId)
    setName(eventsName)
    setSubName(eventsSubName)
    setStartDate(eventsStartDate)
    setEndDate(eventsEndDate)
    setNotification(eventsNotification)
    setPayment(eventsPayment)
    setValue(eventsValue)
    setNumberOfVacancies(eventsNumberOfVacancies)
    setFormOfPayment(eventsFormOfPayment)
    setSchedule(eventsSchedule)
    setAboutTheEvent(eventsAboutTheEvent)
    setPlace(eventsPlace)
    setImage(eventsImage)
    setSpeakers(eventsSpeakers)
    setOpenModal(true);
  }
  return <EventsContext.Provider value={{
    name,
    subName,
    startDate,
    endDate,
    notification,
    payment,
    value,
    numberOfVacancies,
    formOfPayment,
    schedule,
    aboutTheEvent,
    place,
    image,
    speakers,
    nameHandler,
    subNameHandler,
    startDateHandler,
    endDateHandler,
    notificationHandler,
    paymentHandler,
    valueHandler,
    numberOfVacanciesHandler,
    formOfPaymentHandler,
    scheduleHandler,
    aboutTheEventHandler,
    placeHandler,
    imageHandler,
    speakersHandler,
    handleSubmit,
    handleDelete,
    setId,
    openModal,
    id,
    handleEdit,
    setOpenModal,
    CloseModal,
    RemoveSchedule,
    RemoveSpeakers,
    AddSchedule,
    AddSpeakers,
    setName,
    setSubName,
    setStartDate,
    setEndDate,
    setNotification,
    setPayment,
    setValue,
    setNumberOfVacancies,
    setFormOfPayment,
    setSchedule,
    setAboutTheEvent,
    setPlace,
    setImage,
    setSpeakers,
  }}>
    {children}
    {openModal && <ModalAccountEdit />}
  </EventsContext.Provider>
}
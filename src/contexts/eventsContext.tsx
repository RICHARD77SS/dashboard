import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import ModalAccountEdit from '../Components/ModalAccountEdit';
import { useContext } from '../Types/@types.useContext';
import { eventsTypes, initialValue } from '../Types/@types.eventsContext';

export const EventsContext = React.createContext<eventsTypes>(initialValue);

export function EventsContextProvider({ children }:useContext) {
  const { data, mutate } = useAxios('events');

  const [id, setId] = React.useState(initialValue.id);
  const [name, setName] = React.useState(initialValue.name)
  const [subName, setSubName] = React.useState(initialValue.subName)
  const [startDate, setStartDate] = React.useState(initialValue.startDate)
  const [endDate, setEndDate] = React.useState(initialValue.endDate)
  const [notification, setNotification] = React.useState(initialValue.notification)
  const [payment, setPayment] = React.useState(initialValue.payment)
  const [value, setValue] = React.useState(initialValue.value)
  const [numberOfVacancies, setNumberOfVacancies] = React.useState(initialValue.numberOfVacancies)
  const [formOfPayment, setFormOfPayment] = React.useState(initialValue.formOfPayment)
  const [schedule, setSchedule] = React.useState<any[]>(initialValue.schedule)
  const [aboutTheEvent, setAboutTheEvent] = React.useState(initialValue.aboutTheEvent)
  const [place, setPlace] = React.useState(initialValue.place)
  const [image, setImage] = React.useState(initialValue.image)
  const [speakers, setSpeakers] = React.useState<any[]>(initialValue.speakers)

  const [openModal, setOpenModal] = React.useState(initialValue.openModal)

  function nameHandler(event:React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function subNameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSubName(event.target.value);
  }
  function startDateHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setStartDate(event.target.value)
  }
  function endDateHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEndDate(event.target.value)
  }
  function notificationHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setNotification(event.target.checked)
  }
  function paymentHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setPayment(event.target.value)
  }
  function valueHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }
  function numberOfVacanciesHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setNumberOfVacancies(event.target.value)
  }
  function formOfPaymentHandler(event: React.ChangeEvent<HTMLInputElement>) {
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
  function scheduleHandler(event: React.ChangeEvent<HTMLInputElement>, index:number) {
    let data = [...schedule];
    data[index][event.target.name] = event.target.value;
    setSchedule(data)
  }
  function RemoveSchedule(index:number) {
    let data = [...schedule];
    data.splice(index, 1)
    setSchedule(data)
  }


  function aboutTheEventHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setAboutTheEvent(event.target.value)
  }

  function placeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setPlace(event.target.value)
  }

  function imageHandler(event: React.ChangeEvent<HTMLInputElement>) {
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
  function RemoveSpeakers(index:number) {
    let data = [...speakers]
    data.splice(index, 1)
    setSpeakers(data)
  }
  function speakersHandler(event: React.ChangeEvent<HTMLInputElement>, index:number) {
    let data = [...speakers]
    data[index][event.target.name] = event.target.value
    setSpeakers(data)
  }

  function CloseModal() {
    setId(initialValue.id)
    setOpenModal(initialValue.openModal)
    setName(initialValue.name)
    setSubName(initialValue.subName)
    setStartDate(initialValue.startDate)
    setEndDate(initialValue.endDate)
    setNotification(initialValue.notification)
    setPayment(initialValue.payment)
    setValue(initialValue.value)
    setNumberOfVacancies(initialValue.numberOfVacancies)
    setFormOfPayment(initialValue.formOfPayment)
    setSchedule(initialValue.schedule)
    setAboutTheEvent(initialValue.aboutTheEvent)
    setPlace(initialValue.place)
    setImage(initialValue.image)
    setSpeakers(initialValue.speakers)
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
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
        events: data.events?.map((events:{_id:string}) => {
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
  function handleDelete(id:string) {
    api.delete(`events/${id}`);
    window.alert('events removido')
    const updatedEvents = {
      events: data.events?.filter((events: { _id: string }) => events._id !== id)
    };
    mutate(updatedEvents, false)
  }

  function handleEdit(eventsId:string,
    eventsName: string,
    eventsSubName: string,
    eventsStartDate: string,
    eventsEndDate: string,
    eventsNotification: boolean,
    eventsPayment: string,
    eventsValue: string,
    eventsNumberOfVacancies: string,
    eventsFormOfPayment: string,
    eventsSchedule:any[],
    eventsAboutTheEvent: string,
    eventsPlace: string,
    eventsImage: string,
    eventsSpeakers:any[]
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
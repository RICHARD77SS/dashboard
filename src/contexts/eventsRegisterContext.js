import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';

export const EventsRegisterContext = React.createContext();

export function EventsRegisterContextProvider({ children }) {
  const { data, mutate } = useAxios('eventsregister');

  const [id, setId] = React.useState();

  const [name, setName] = React.useState('')
  const [event, setEvent] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [number, setNumber] = React.useState('')
  const [district, setDistrict] = React.useState('')
  const [zipCode, setZipCode] = React.useState('')
  const [country, setCountry] = React.useState('')
  const [state, setState] = React.useState('')
  const [city, setCity] = React.useState('')
  const [payment, setPayment] = React.useState('')

  const [openModal, setOpenModal] = React.useState(false)

  function nameHandler(event) {
    setName(event.target.value);
  }
  function eventHandler(event) {
    setEvent(event.target.value);
  }
  function phoneHandler(event) {
    setPhone(event.target.value)
  }
  function emailHandler(event) {
    setEmail(event.target.value)
  }
  function addressHandler(event) {
    setAddress(event.target.checked)
  }
  function numberHandler(event) {
    setNumber(event.target.value)
  }
  function districtHandler(event) {
    setDistrict(event.target.value)
  }
  function zipCodeHandler(event) {
    setZipCode(event.target.value)
  }

  function countryHandler(event) {
    setCountry(event.target.value)
  }

  function stateHandler(event) {
    setState(event.target.value)
  }

  function cityHandler(event) {
    setCity(event.target.value)
  }

  function paymentHandler(event) {
    setPayment(event.target.value)
  }


  function CloseModal() {
    setOpenModal(false)
    setName('')
    setEvent('')
    setPhone('')
    setEmail('')
    setAddress('')
    setNumber('')
    setDistrict('')
    setZipCode('')
    setCountry('')
    setState('')
    setCity('')
    setPayment('')

  }

  function handleSubmit(event) {
    event.preventDefault()
    CloseModal()
    const eventsRegister = {
      name,
      event,
      phone,
      email,
      address,
      number,
      district,
      zipCode,
      country,
      state,
      city,
      payment,
    }
    if (id) {
      api.put(`eventsregister/${id}`, eventsRegister)
      window.alert('eventsRegister Editada')
      const updatedEventsRegister = {
        eventsRegister: data.eventsRegister?.map((eventsRegister) => {
          if (eventsRegister._id === id) {
            return {
              ...eventsRegister,
              name,
              event,
              phone,
              email,
              address,
              number,
              district,
              zipCode,
              country,
              state,
              city,
              payment
            };
          }
          return eventsRegister
        }),
      };
      mutate(updatedEventsRegister, false)
    } else {
      api.post('eventsregister', eventsRegister);
      window.alert('eventsRegister adicionada')
      const updatedEventsRegister = {
        eventsRegister: [...data.eventsRegister, eventsRegister]
      }
      mutate(updatedEventsRegister, false)
    }
  }
  function handleDelete(id) {
    api.delete(`eventsregister/${id}`);
    window.alert('eventsRegister removido')
    const updatedEventsRegister = {
      eventsRegister: data.eventsRegister?.filter((eventsRegister) => eventsRegister._id !== id)
    };
    mutate(updatedEventsRegister, false)
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
    setEvent(eventsSubName)
    setPhone(eventsStartDate)
    setEmail(eventsEndDate)
    setAddress(eventsNotification)
    setNumber(eventsPayment)
    setDistrict(eventsNumberOfVacancies)
    setZipCode(eventsFormOfPayment)
    setCountry(eventsSchedule)
    setState(eventsAboutTheEvent)
    setCity(eventsPlace)
    setPayment(eventsImage)
    setOpenModal(true);
  }
  return <EventsRegisterContext.Provider value={{
    name,
    event,
    phone,
    email,
    address,
    number,
    district,
    zipCode,
    country,
    state,
    city,
    payment,
    nameHandler,
    eventHandler,
    phoneHandler,
    emailHandler,
    addressHandler,
    numberHandler,
    districtHandler,
    zipCodeHandler,
    countryHandler,
    stateHandler,
    cityHandler,
    paymentHandler,
    handleSubmit,
    handleDelete,
    setId,
    id,
    openModal,
    handleEdit,
    setOpenModal,
    CloseModal,
    setName,
    setEvent,
    setPhone,
    setEmail,
    setAddress,
    setNumber,
    setDistrict,
    setZipCode,
    setCountry,
    setState,
    setCity,
    setPayment,
  }}>
    {children}
  </EventsRegisterContext.Provider>
}
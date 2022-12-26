import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';

export const EventsRegisterContext = React.createContext();

export function EventsRegisterContextProvider({ children }) {
  const { data, mutate } = useAxios('eventsregister');

  const [id, setId] = React.useState();

  const [name, setName] = React.useState('')
  const [evento, setEvento] = React.useState('')
  const [phone, setPhone] = React.useState()
  const [email, setEmail] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [number, setNumber] = React.useState()
  const [district, setDistrict] = React.useState('')
  const [zipCode, setZipCode] = React.useState()
  const [country, setCountry] = React.useState('')
  const [state, setState] = React.useState('')
  const [city, setCity] = React.useState('')
  const [payment, setPayment] = React.useState('')
  const [date, setDate] = React.useState('')

  React.useEffect(() => {
    setDate(new Date().toISOString())
  }, [setDate])

  function nameHandler(event) {
    setName(event.target.value);
  }
  function eventoHandler(event) {
    setEvento(event.target.value);
  }
  function phoneHandler(event) {
    setPhone(event.target.value)
  }
  function emailHandler(event) {
    setEmail(event.target.value)
  }
  function addressHandler(event) {
    setAddress(event.target.value)
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

  function handleSubmit(event) {
    event.preventDefault()
    const eventsRegister = {
      name,
      evento,
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
      date
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
              evento,
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
              date
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
    eventsEvento,
    eventsPhone,
    eventsEmail,
    eventsAddress,
    eventsNumber,
    eventsDistrict,
    eventsZipCode,
    eventsCountry,
    eventsState,
    eventsCity,
    eventsPayment,
  ) {
    setId(eventsId)
    setName(eventsName)
    setEvento(eventsEvento)
    setPhone(eventsPhone)
    setEmail(eventsEmail)
    setAddress(eventsAddress)
    setNumber(eventsNumber)
    setDistrict(eventsDistrict)
    setZipCode(eventsZipCode)
    setCountry(eventsCountry)
    setState(eventsState)
    setCity(eventsCity)
    setPayment(eventsPayment)
  }
  return <EventsRegisterContext.Provider value={{
    name,
    evento,
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
    eventoHandler,
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
    handleEdit,
    setName,
    setEvento,
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
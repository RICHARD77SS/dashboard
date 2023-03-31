import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import { useContext } from '../Types/@types.useContext';
import { eventsRegisterTypes, initialValue } from '../Types/@types.eventsRegisterContest';

export const EventsRegisterContext = React.createContext<eventsRegisterTypes>(initialValue);

export function EventsRegisterContextProvider({ children }:useContext) {
  const { data, mutate } = useAxios('eventsregister');

  const [id, setId] = React.useState(initialValue.id);

  const [name, setName] = React.useState(initialValue.name)
  const [evento, setEvento] = React.useState(initialValue.evento)
  const [phone, setPhone] = React.useState(initialValue.phone)
  const [email, setEmail] = React.useState(initialValue.email)
  const [address, setAddress] = React.useState(initialValue.address)
  const [number, setNumber] = React.useState(initialValue.number)
  const [district, setDistrict] = React.useState(initialValue.district)
  const [zipCode, setZipCode] = React.useState(initialValue.zipCode)
  const [country, setCountry] = React.useState(initialValue.country)
  const [state, setState] = React.useState(initialValue.state)
  const [city, setCity] = React.useState(initialValue.city)
  const [payment, setPayment] = React.useState(initialValue.payment)
  const [date, setDate] = React.useState(initialValue.date)

  function nameHandler(event:React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function eventoHandler(event:React.ChangeEvent<HTMLInputElement>) {
    setEvento(event.target.value);
  }
  function phoneHandler(event:React.ChangeEvent<HTMLInputElement>) {
    setPhone(event.target.value)
  }
  function emailHandler(event:React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }
  function addressHandler(event:React.ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value)
  }
  function numberHandler(event:React.ChangeEvent<HTMLInputElement>) {
    setNumber(event.target.value)
  }
  function districtHandler(event:React.ChangeEvent<HTMLInputElement>) {
    setDistrict(event.target.value)
  }
  function zipCodeHandler(event:React.ChangeEvent<HTMLInputElement>) {
    setZipCode(event.target.value)
  }

  function countryHandler(event:React.ChangeEvent<HTMLInputElement>) {
    setCountry(event.target.value)
  }

  function stateHandler(event:React.ChangeEvent<HTMLInputElement>) {
    setState(event.target.value)
  }

  function cityHandler(event:React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value)
  }

  function paymentHandler(event:React.ChangeEvent<HTMLInputElement>) {
    setPayment(event.target.value)
  }

  function handleSubmit(event:React.ChangeEvent<HTMLFormElement>) {
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
        eventsRegister: data.eventsRegister?.map((eventsRegister:{_id:string}) => {
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

  function handleDelete(id:string) {
    api.delete(`eventsregister/${id}`);
    window.alert('eventsRegister removido')
    const updatedEventsRegister = {
      eventsRegister: data.eventsRegister?.filter((eventsRegister:{_id:string}) => eventsRegister._id !== id)
    };
    mutate(updatedEventsRegister, false)
  }

  function handleEdit(eventsId:string,
    eventsName:string,
    eventsEvento:string,
    eventsPhone:number,
    eventsEmail: string,
    eventsAddress: string,
    eventsNumber:number,
    eventsDistrict: string,
    eventsZipCode:number,
    eventsCountry: string,
    eventsState: string,
    eventsCity: string,
    eventsPayment: string,
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
    id,
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
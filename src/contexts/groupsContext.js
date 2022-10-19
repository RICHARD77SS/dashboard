import React from 'react'

import api from '../services/api'

import { useAxios } from '../hooks/useAxios';

export const GroupsContext = React.createContext();

export function GroupsContextProvider({ children }) {
  const { data, mutate } = useAxios('groups');
  const [id, setId] = React.useState()
  const [name, setName] = React.useState()
  const [image, setImage] = React.useState()
  const [creationDate, setCreationDate] = React.useState()
  const [weekDay, setWeekDay] = React.useState()
  const [sex, setSex] = React.useState()
  const [time, setTime] = React.useState()
  const [category, setCategory] = React.useState()
  const [originGroup, setOriginGroup] = React.useState()
  const [lider1, setLider1] = React.useState()
  const [lider2, setLider2] = React.useState()
  const [lider3, setLider3] = React.useState()
  const [lider4, setLider4] = React.useState()
  const [address, setAddress] = React.useState()
  const [district, setDistrict] = React.useState()
  const [number, setNumber] = React.useState()
  const [country, setCountry] = React.useState()
  const [state, setState] = React.useState()
  const [city, setCity] = React.useState()
  const [anotations, setAnotations] = React.useState()

  function nameHandler(event) {
    setName(event.target.value)
  }
  function imageHandler(event) {
    setImage(event.target.value)
  }
  function creationDateHandler(event) {
    setCreationDate(event.target.value)
  }
  function weekDayHandler(event) {
    setWeekDay(event.target.value)
  }
  function sexHandler(event) {
    setSex(event.target.value)
  }
  function timeHandler(event) {
    setTime(event.target.value)
  }
  function categoryHandler(event) {
    setCategory(event.target.value)
  }
  function originGroupHandler(event) {
    setOriginGroup(event.target.value)
  }
  function lider1Handler(event) {
    setLider1(event.target.value)
  }
  function lider2Handler(event) {
    setLider2(event.target.value)
  }
  function lider3Handler(event) {
    setLider3(event.target.value)
  }
  function lider4Handler(event) {
    setLider4(event.target.value)
  }
  function addressHandler(event) {
    setAddress(event.target.value)
  }
  function districtHandler(event) {
    setDistrict(event.target.value)
  }
  function numberHandler(event) {
    setNumber(event.target.value)
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
  function anotationsHandler(event) {
    setAnotations(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    window.alert('Grupo adicionado')
    const groups = {
      name,
      image,
      creationDate,
      weekDay,
      sex,
      time,
      category,
      originGroup,
      lider1,
      lider2,
      lider3,
      lider4,
      address,
      district,
      number,
      country,
      state,
      city,
      anotations
    }
    api.post('groups', groups);
    const updatedGroups = {
      groups: [...data.groups, groups]
    }
    mutate(updatedGroups, false)

  }
  function handleDelete(id) {
    api.delete(`groups/${id}`);
    window.alert('Grupo removido')
    const updatedGroups = {
      groups: data.groups?.filter((groups) => groups._id !== id)
    }
    mutate(updatedGroups, false)
  }
  function handleEdit(id) {
    const groups = {
      name,
      image,
      creationDate,
      weekDay,
      sex,
      time,
      category,
      originGroup,
      lider1,
      lider2,
      lider3,
      lider4,
      address,
      district,
      number,
      country,
      state,
      city,
      anotations
    }
    api.put(`groups/${id}`, groups)
    const updatedGroups = {
      groups: data.groups?.map((groups) => {
        if (groups._id === id) {
          return {
            ...groups,
            name,
            image,
            creationDate,
            weekDay,
            sex,
            time,
            category,
            originGroup,
            lider1,
            lider2,
            lider3,
            lider4,
            address,
            district,
            number,
            country,
            state,
            city,
            anotations
          }
        }
        return groups
      }),
    };
    mutate(updatedGroups, false);
  }
  return <GroupsContext.Provider value={{
    name,
    image,
    creationDate,
    weekDay,
    sex,
    time,
    category,
    originGroup,
    lider1,
    lider2,
    lider3,
    lider4,
    address,
    district,
    number,
    country,
    state,
    city,
    anotations,
    nameHandler,
    imageHandler,
    creationDateHandler,
    weekDayHandler,
    sexHandler,
    timeHandler,
    categoryHandler,
    originGroupHandler,
    lider1Handler,
    lider2Handler,
    lider3Handler,
    lider4Handler,
    addressHandler,
    districtHandler,
    numberHandler,
    countryHandler,
    stateHandler,
    cityHandler,
    anotationsHandler,
    setId,
    handleDelete,
    handleSubmit,
    handleEdit
  }}>
    {children}
  </GroupsContext.Provider>
}
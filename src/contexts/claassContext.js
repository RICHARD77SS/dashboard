import React from 'react';

import api from '../services/api';

import { useAxios } from '../hooks/useAxios'

export const ClaassContext = React.createContext();
export function ClaassContextProvider({ children }) {
  let DateNow = new Date().toISOString()
  const { data, mutate } = useAxios('studies');
  const [id, setId] = React.useState()
  const [name, setName] = React.useState()
  const [school, setSchool] = React.useState()
  const [time, setTime] = React.useState()
  const [status, setStatus] = React.useState()
  const [description, setDescription] = React.useState()
  const [date, setDate] = React.useState()

  function nameHandler(event) {
    setName(event.target.value);
  }
  function schoolHandler(event) {
    setSchool(event.target.value);
  }
  function timeHandler(event) {
    setTime(event.target.value);
  }
  function statusHandler(event) {
    setStatus(event.target.value);
  }
  function descriptionHandler(event) {
    setDescription(event.target.value);
  }
  function dateHandler(event) {
    setDate(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    const claass = {
      name,
      school,
      time,
      status,
      description,
      date
    }
    if (id) {
      api.put(`claass/${id}`, claass)
      window.alert('turma Editada')
      const updatedClaass = {
        claass: data.claass?.map((claass) => {
          if (claass._id === id) {
            return {
              ...claass,
              name,
              school,
              time,
              status,
              description,
              date
            };
          }
          return claass
        })
      };
      mutate(updatedClaass, false)
    } else {
      api.post('claass', claass);
      window.alert('Turma adicionada')
      const updatedClaass = {
        claass: [...data.claass, claass]
      }
      mutate(updatedClaass, false)
    }
  }
  function handleDelete(id) {
    api.delete(`claass/${id}`);
    window.alert('Turma deletada')
    const updatedClaass = {
      claass: data.claass?.filter((claass) => claass._id !== id)
    };
    mutate(updatedClaass, false)
  }
  function handleEdit(claassId, claassName, claassSchool, claassTime, claassStatus, claassDescription, claassDate) {
    setId(claassId)
    setName(claassName)
    setSchool(claassSchool)
    setTime(claassTime)
    setStatus(claassStatus)
    setDescription(claassDescription)

  }
  return <ClaassContext.Provider value={{
    name,
    school,
    time,
    status,
    description,
    nameHandler,
    schoolHandler,
    timeHandler,
    statusHandler,
    descriptionHandler,
    handleSubmit,
    handleEdit,
    handleDelete,

  }}>
    {children}
  </ClaassContext.Provider>

}
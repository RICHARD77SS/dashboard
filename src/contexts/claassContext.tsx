import React from 'react';

import api from '../services/api';

import { useAxios } from '../hooks/useAxios'
import ModalEditClass from '../Components/ModalEditClass';
import { useContext } from '../Types/@type.useContext';
import { initialValue, ClaassTypes } from '../Types/@type.claassContext';

export const ClaassContext = React.createContext<ClaassTypes>(initialValue);
export function ClaassContextProvider({ children }: useContext) {
  let DateNow = new Date().toISOString()
  const { data, mutate } = useAxios('studies');
  const [id, setId] = React.useState(initialValue.id)
  const [name, setName] = React.useState(initialValue.name)
  const [school, setSchool] = React.useState(initialValue.school)
  const [time, setTime] = React.useState(initialValue.time)
  const [status, setStatus] = React.useState(initialValue.status)
  const [description, setDescription] = React.useState(initialValue.description)
  const [date, setDate] = React.useState(initialValue.date)
  const [openModal, setOpenModal] = React.useState(initialValue.openModal)
  const [participants, setParticipants] = React.useState(initialValue.participants)

  function nameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function schoolHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setSchool(event.target.value);
  }
  function timeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setTime(event.target.value);
  }
  function statusHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setStatus(event.target.value);
  }
  function descriptionHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.target.value);
  }

  function participantsHandler(event: React.ChangeEvent<HTMLInputElement>) {
    let name = event.target.value
    if (participants.indexOf(name) > -1) {
      setParticipants(prev => prev.filter(part => part !== name))
    } else {
      setParticipants(oldArr => [...oldArr, event.target.value]);
    }
  }
  function Clear() {
    setId('')
    setName('')
    setDescription('')
    setSchool('')
    setStatus('')
    setTime('')
  }
  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    const claass = {
      name,
      school,
      time,
      status,
      description,
      date,
      participants
    }
    if (id) {
      api.put(`claass/${id}`, claass)
      window.alert('turma Editada')

      const updatedClaass = {
        claass: data.claass?.map((claass: { _id: string }) => {
          if (claass._id === id) {
            return {
              ...claass,
              name,
              school,
              time,
              status,
              description,
              date,
              participants
            };
          }
          return claass
        })
      };
      mutate(updatedClaass, false)
    } else {
      api.post('claass', claass);
      window.alert('Turma adicionada')
      Clear()
      const updatedClaass = {
        claass: [...data.claass, claass]
      }
      mutate(updatedClaass, false)
    }
  }
  function handleDelete(id: string) {
    api.delete(`claass/${id}`);
    window.alert('Turma deletada')
    const updatedClaass = {
      claass: data.claass?.filter((claass: { _id: string }) => claass._id !== id)
    };
    mutate(updatedClaass, false)
  }
  function handleEdit(claassId: string, claassName: string, claassSchool: string, claassTime: string, claassStatus: string, claassDescription: string, claassParticipants: string[]) {
    setId(claassId)
    setName(claassName)
    setSchool(claassSchool)
    setTime(claassTime)
    setStatus(claassStatus)
    setDescription(claassDescription)
    setParticipants(claassParticipants)
  }
  return <ClaassContext.Provider value={{
    name,
    school,
    time,
    status,
    description,
    participants,
    nameHandler,
    schoolHandler,
    timeHandler,
    statusHandler,
    descriptionHandler,
    participantsHandler,
    handleSubmit,
    handleEdit,
    handleDelete,
    openModal,
    setOpenModal,
    setName,
    setDescription,
    setSchool,
    setTime,
    setStatus,
    setParticipants,
    setId,
    date,
    setDate,
    id
  }}>
    {children}
  </ClaassContext.Provider>

}
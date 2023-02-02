
import React from 'react';

import api from '../services/api';

import { useAxios } from '../hooks/useAxios'
import ModalEditClassRoom from '../Components/ModalEditClassRoom';

export const ClassRoomContext = React.createContext();
export function ClassRoomContextProvider({ children }) {
  const { data, mutate } = useAxios('studies');

  const [id, setId] = React.useState('')
  const [discipline, setDiscipline] = React.useState('')
  const [topic, setTopic] = React.useState('')
  const [remarks, setRemarks] = React.useState('')
  const [notes, setNotes] = React.useState('')
  const [date, setDate] = React.useState('')

  const [openModal, setOpenModal] = React.useState(false)
  const [index, setIndex] = React.useState()

  const [participants, setParticipants] = React.useState([])

  function disciplineHandler(event) {
    setDiscipline(event.target.value);
  }
  function topicHandler(event) {
    setTopic(event.target.value);
  }
  function remarksHandler(event) {
    setRemarks(event.target.value);
  }
  function notesHandler(event) {
    setNotes(event.target.value);
  }
  function dateHandler(event) {
    setDate(event.target.value);
  }

  function participantsHandler(event) {
    let name = event.target.value
    if (participants.indexOf(name) > -1) {
      setParticipants(prev => prev.filter(part => part !== name))
    } else {
      setParticipants(oldArr => [...oldArr, event.target.value]);
    }
  }
  function CloseModal() {
    setId('')
    setDiscipline('')
    setTopic('')
    setRemarks('')
    setNotes('')
    setOpenModal(false)
    setIndex('')
  }
  function OpenModal(index) {
    setIndex(index)
    setOpenModal(true)
  }
  function handleSubmit(event) {
    event.preventDefault()
    const classRoom = {
      date,
      discipline,
      topic,
      remarks,
      notes,
      participants,
    }
    if (id) {
      api.put(`classroom /${id}`, classRoom)
      window.alert('turma Editada')

      const updatedClaass = {
        classRoom: data.classRoom?.map((classRoom) => {
          if (classRoom._id === id) {
            return {
              ...classRoom,
              date,
              discipline,
              topic,
              remarks,
              notes,
              participants,
            };
          }
          return classRoom
        })
      };
      mutate(updatedClaass, false)
    } else {
      api.post('classroom', classRoom);
      window.alert('Turma adicionada')
      const updatedClaass = {
        classRoom: [...data.classRoom, classRoom]
      }
      mutate(updatedClaass, false)
    }
  }
  function handleDelete(id) {
    api.delete(`classroom/${id}`);
    window.alert('Turma deletada')
    const updatedClaass = {
      classRoom: data.classRoom?.filter((classRoom) => classRoom._id !== id)
    };
    mutate(updatedClaass, false)
  }
  function handleEdit(classRoomId, classRoomDiscipline, classRoomTopic, classRoomRemarks, classRoomNotes) {
    setId(classRoomId)
    setDiscipline(classRoomDiscipline)
    setTopic(classRoomTopic)
    setRemarks(classRoomRemarks)
    setNotes(classRoomNotes)
  }
  return <ClassRoomContext.Provider value={{
    setId,
    setDiscipline,
    setTopic,
    setRemarks,
    setNotes,
    disciplineHandler,
    participantsHandler,
    topicHandler,
    notesHandler,
    remarksHandler,
    discipline,
    participants,
    topic,
    notes,
    remarks,
    handleSubmit,
    handleEdit,
    handleDelete,
    openModal,
    OpenModal,
    setParticipants,
    id,
    CloseModal,
    date,
    dateHandler,
    index
  }}>
    {children}
    {openModal && <ModalEditClassRoom />}
  </ClassRoomContext.Provider>

}
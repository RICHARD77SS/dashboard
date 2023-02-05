
import React from 'react';

import api from '../services/api';

import { useAxios } from '../hooks/useAxios'
import ModalEditClassRoom from '../Components/ModalEditClassRoom';
import { useContext } from '../Types/@type.useContext';
import { classRoomTypes, initialValue } from '../Types/@type.classRoomContext';

export const ClassRoomContext = React.createContext<classRoomTypes>(initialValue);
export function ClassRoomContextProvider({ children }: useContext) {
  const { data, mutate } = useAxios('studies');

  const [id, setId] = React.useState(initialValue.id)
  const [discipline, setDiscipline] = React.useState(initialValue.discipline)
  const [topic, setTopic] = React.useState(initialValue.topic)
  const [remarks, setRemarks] = React.useState(initialValue.remarks)
  const [notes, setNotes] = React.useState(initialValue.notes)
  const [date, setDate] = React.useState(initialValue.date)
  const [openModal, setOpenModal] = React.useState(initialValue.openModal)
  const [index, setIndex] = React.useState(initialValue.index)
  const [participants, setParticipants] = React.useState<string[]>([])

  function disciplineHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setDiscipline(event.target.value);
  }
  function topicHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setTopic(event.target.value);
  }
  function remarksHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setRemarks(event.target.value);
  }
  function notesHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setNotes(event.target.value);
  }
  function dateHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setDate(event.target.value);
  }

  function participantsHandler(event: React.ChangeEvent<HTMLInputElement>) {
    let name = event.target.value
    if (participants.indexOf(name) > -1) {
      setParticipants(prev => prev.filter(part => part !== name))
    } else {
      setParticipants(oldArr => [...oldArr, event.target.value]);
    }
  }
  function CloseModal() {
    setId(initialValue.id)
    setDiscipline(initialValue.discipline)
    setTopic(initialValue.topic)
    setRemarks(initialValue.remarks)
    setNotes(initialValue.notes)
    setOpenModal(initialValue.openModal)
    setIndex(initialValue.index)
  }
  function OpenModal(index: number) {
    setIndex(index)
    setOpenModal(true)
  }
  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
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
        classRoom: data.classRoom?.map((classRoom: { _id: string }) => {
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
  function handleDelete(id: string) {
    api.delete(`classroom/${id}`);
    window.alert('Turma deletada')
    const updatedClaass = {
      classRoom: data.classRoom?.filter((classRoom: { _id: string }) => classRoom._id !== id)
    };
    mutate(updatedClaass, false)
  }
  function handleEdit(classRoomId: string, classRoomDiscipline: string, classRoomTopic: string, classRoomRemarks: string, classRoomNotes: string, classRoomParticipants: string) {
    setId(classRoomId)
    setDiscipline(classRoomDiscipline)
    setTopic(classRoomTopic)
    setRemarks(classRoomRemarks)
    setNotes(classRoomNotes)
  }
  return <ClassRoomContext.Provider value={{
    discipline,
    participants,
    topic,
    notes,
    remarks,
    openModal,
    id,
    date,
    index,
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
    handleSubmit,
    handleEdit,
    handleDelete,
    OpenModal,
    setParticipants,
    CloseModal,
    dateHandler,
  }}>
    {children}
    {openModal && <ModalEditClassRoom />}
  </ClassRoomContext.Provider>

}
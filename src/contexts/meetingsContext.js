import React from 'react';
import AddMeetings from '../Components/AddMeetings';
import { useAxios } from '../hooks/useAxios'

import api from '../services/api';
import { NowDate } from '../utils/getDate';

export const MeetingsContext = React.createContext();

export function MeetingsContextProvider({ children }) {
  const { data, mutate } = useAxios('meetings');
  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('named')
  const [group, setGroup] = React.useState('')
  const [date, setDate] = React.useState('')
  const [subject, setSubject] = React.useState('')
  const [value, setValue] = React.useState(0)
  const [participants, setParticipants] = React.useState([])
  const [visitors, setVisitors] = React.useState([])
  const [notes, setNotes] = React.useState('')

  const [period, setPeriod] = React.useState(NowDate)

  const [modalOpen, setModalOpen] = React.useState(false)
  const [index, setIndex] = React.useState()

  function nameHandler(event) {
    setName(event.target.value)
  }
  function dateHandler(event) {
    setDate(event.target.value)
  }
  function subjectHandler(event) {
    setSubject(event.target.value)
  }
  function valueHandler(event) {
    setValue(event.target.value)
  }

  function periodHandler(event) {
    setPeriod(event.target.value)
  }

  function participantsHandler(event) {
    let name = event.target.value
    if (participants.indexOf(name) > -1) {
      setParticipants(prev => prev.filter(part => part !== name));
    } else {
      setParticipants(oldArr => [...oldArr, event.target.value]);
    }
  }
  
  function visitorsHandler(event, index) {
    let data = [...visitors];
    data[index][event.target.name] = event.target.value;
    setVisitors(data);
  }
  function AddVisitor() {
    let obj = {
      visitor: ""
    }
    setVisitors([...visitors, obj])
  }
  function RemoveVisitor(index) {
    let data = [...visitors];
    data.splice(index, 1)
    setVisitors(data)
  }
  function notesHandler(event) {
    setNotes(event.target.value)
  }
  function Clear() {
    setDate('')
    setSubject('')
    setValue()
    setParticipants([])
    setVisitors([])
    setNotes('')
    setId('')
    setIndex()
  }

  function CloseModal() {
    setModalOpen(false)
    Clear()
  }
  function OpenModal() {
    setModalOpen(true)
    Clear()
  }
  function handleSubmit(event) {
    event.preventDefault()
    const meetings = {
      name,
      group,
      date,
      subject,
      value,
      participants,
      visitors,
      notes
    }
    if (id) {
      api.put(`meetings/${id}`, meetings)
      window.alert('Reuniao editada com sucesso')
      const updatedMeetings = {
        meetings: data.meetings?.map((meetings) => {
          if (meetings._id === id) {
            return {
              ...meetings,
              name,
              group,
              date,
              subject,
              value,
              participants,
              visitors,
              notes
            };
          }
          return meetings
        })
      };
      mutate(updatedMeetings, false)
    } else {
      api.post('meetings', meetings);
      window.alert('Reuniao adicionada com sucesso')
      CloseModal()
      const updatedMeetings = {
        meetings: data.meetings?.filter((meetings) => meetings._id === id)
      };
      mutate(updatedMeetings, false)
    }
  }
  function handleDelete(id) {
    api.delete(`meetings/${id}`);
    CloseModal()
    window.alert('Reuniao removida')
    const updatedMeetings = {
      meetings: data.meetings?.filter((meetings) => meetings._id !== id)
    };
    mutate(updatedMeetings, false)
  }
  function handleEdit(meetingsid,
    meetingsname,
    meetingsgroup,
    meetingsdate,
    meetingssubject,
    meetingsvalue,
    meetingsparticipants,
    meetingsvisitors,
    meetingsnotes,
    meetingsindex
  ) {
    setId(meetingsid)
    setName(meetingsname)
    setGroup(meetingsgroup)
    setDate(meetingsdate)
    setSubject(meetingssubject)
    setValue(meetingsvalue)
    setParticipants(meetingsparticipants)
    setVisitors(meetingsvisitors)
    setNotes(meetingsnotes)
    setIndex(meetingsindex)
    setModalOpen(true)
  }

  return <MeetingsContext.Provider value={{
    name,
    group,
    date,
    subject,
    value,
    participants,
    visitors,
    notes,
    nameHandler,
    setGroup,
    dateHandler,
    subjectHandler,
    valueHandler,
    participantsHandler,
    visitorsHandler,
    notesHandler,
    handleSubmit,
    handleDelete,
    handleEdit,
    OpenModal,
    setModalOpen,
    modalOpen,
    id,
    index,
    period,
    periodHandler,
    AddVisitor,
    RemoveVisitor
  }}>
    {children}
    {modalOpen && <AddMeetings />}
  </MeetingsContext.Provider>

}
import React from 'react';
import { useAxios } from '../hooks/useAxios'

import api from '../services/api';

export const MeetingsContext = React.createContext();

export function MeetingsContextProvider({ children }) {
  const { data, mutate } = useAxios('meetings');
  const [id, setId] = React.useState();
  const [name, setName] = React.useState()
  const [group, setGroup] = React.useState()
  const [date, setDate] = React.useState()
  const [subject, setSubject] = React.useState()
  const [value, setValue] = React.useState()
  const [participants, setParticipants] = React.useState()
  const [visitors, setVisitors] = React.useState()
  const [notes, setNotes] = React.useState()

  function nameHandler(event) {
    setName(event.target.value)
  }
  function groupHandler(event) {
    setGroup(event.target.value)
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
  function participantsHandler(event) {
    setParticipants(event.target.value)
  }
  function visitorsHandler(event) {
    setVisitors(event.target.value)
  }
  function notesHandler(event) {
    setNotes(event.target.value)
  }
  function Clear() {
    setName()
    setGroup()
    setDate()
    setSubject()
    setValue()
    setParticipants()
    setVisitors()
    setNotes()
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
      Clear()
      const updatedMeetings = {
        meetings: data.meetings?.filter((meetings) => meetings._id === id)
      };
      mutate(updatedMeetings, false)
    }
  }
  function handleDelete(id) {
    api.delete(`meetings/${id}`);
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
    groupHandler,
    dateHandler,
    subjectHandler,
    valueHandler,
    participantsHandler,
    visitorsHandler,
    notesHandler,
    handleSubmit,
    handleDelete,
    handleEdit,
  }}>
    {children}
  </MeetingsContext.Provider>

}
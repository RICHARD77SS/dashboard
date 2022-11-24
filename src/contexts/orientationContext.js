
import React from 'react';

import api from '../services/api';

import { useAxios } from '../hooks/useAxios'
import ModalEditClassRoom from '../Components/ModalEditClassRoom';
import ModalCreateOrientation from '../Components/ModalCreateOrientation';
import ModalAddPeopleOrientationMeeting from '../Components/ModalAddPeopleOrientationMeeting';
import ModalEditOrientationMeetings from '../Components/ModalEditOrientationMeetings';

export const OrientationContext = React.createContext();
export function OrientationContextProvider({ children }) {
  const { data, mutate } = useAxios('studies');

  const [id, setId] = React.useState('')
  const [className, setClassName] = React.useState('')
  const [status, setStatus] = React.useState('')
  const [anotations, setAnotations] = React.useState('')
  const [lideres, setLideres] = React.useState([])
  const [people, setPeople] = React.useState([])
  const [openModal, setOpenModal] = React.useState(false)
  const [openModalPeople, setOpenModalPeople] = React.useState(false)
  const [openModalMeeting, setOpenModalMeeting] = React.useState(false)
  const [openModalCreateOrientation, setOpenModalCreateOrientation] = React.useState(false)

  const [index, setIndex] = React.useState()
  const [meetings, setMeetings] = React.useState([])
  const [meetingIndex, setMeetingIndex] = React.useState()

  function AddMeeting(meetingIdx) {
    setOpenModalMeeting(true)
    setMeetingIndex(meetingIdx)
    let obj = {
      "subject": "",
      "description": "",
      "date": undefined,
      "startTime": undefined,
      "duration": undefined,
      "place": "",
      "statusMeeting": "",
    }
    setMeetings([...meetings, obj])
  }

  function meetingsHandler(event) {
    let data = [...meetings];
    data[meetingIndex][event.target.name] = event.target.value;
    setMeetings(data)
  }
  function DeleteMeeting(event, indx) {
    setOpenModalMeeting(false)
    let data = [...meetings];
    data.splice(indx, 1)
    setMeetings(data)
    setTimeout(2000, handleSubmit(event))
  }
  function classNameHandler(event) {
    setClassName(event.target.value);
  }
  function statusHandler(event) {
    setStatus(event.target.value);
  }
  function anotationsHandler(event) {
    setAnotations(event.target.value);
  }
  function lideresHandler(event) {
    let name = event.target.value
    if (lideres.indexOf(name) > -1) {
      setLideres(prev => prev.filter(part => part !== name))
    } else {
      setLideres(oldArr => [...oldArr, event.target.value]);
    }
  }

  function peopleHandler(event) {
    let name = event.target.value
    if (people.indexOf(name) > -1) {
      setPeople(prev => prev.filter(part => part !== name))
    } else {
      setPeople(oldArr => [...oldArr, event.target.value]);
    }
  }
  function CloseModalMeetings() {
    setOpenModalMeeting(false)
    let data = [...meetings];
    data.splice(meetingIndex, 1)
    setMeetings(data)
  }

  function OpenModalPeople() {
    setOpenModalPeople(true)
  }
  function CloseModalPeople() {
    setOpenModalPeople(false)
  }

  function OpenModal(index) {
    setIndex(index)
    setOpenModal(true)
  }
  function CloseModal() {
    setId('')
    setClassName('')
    setStatus('')
    setLideres('')
    setAnotations('')
    setOpenModal(false)
    setIndex('')
  }

  function OpenModalCreateOrientation() {
    setOpenModalCreateOrientation(true)
  }
  function CloseModalCreateOrientation() {
    setOpenModalCreateOrientation(false)
  }


  function handleSubmit(event) {
    event.preventDefault()
    const orientation = {
      people,
      className,
      status,
      lideres,
      anotations,
      meetings
    }
    if (id) {
      api.put(`orientation/${id}`, orientation)
      window.alert('turma Editada')
      setOpenModalMeeting(false)
      const updatedOrientation = {
        orientation: data.orientation?.map((orientation) => {
          if (orientation._id === id) {
            return {
              ...orientation,
              people,
              className,
              status,
              lideres,
              anotations,
              meetings
            };
          }
          return orientation
        })
      };
      mutate(updatedOrientation, false)
    } else {
      api.post('orientation', orientation);
      window.alert('Turma adicionada')
      CloseModalCreateOrientation()
      const updatedOrientation = {
        orientation: [...data.orientation, orientation]
      }
      mutate(updatedOrientation, false)
    }
  }
  function handleDelete(id) {
    api.delete(`orientation/${id}`);
    window.alert('Turma deletada')
    const updatedOrientation = {
      orientation: data.orientation?.filter((orientation) => orientation._id !== id)
    };
    mutate(updatedOrientation, false)
  }
  function handleEdit(orientationid, orientationclassName,
    orientationpeople,
    orientationstatus,
    orientationlideres,
    orientationanotations,
    orientationmeetings,
  ) {
    setId(orientationid)
    setClassName(orientationclassName)
    setStatus(orientationstatus)
    setLideres(orientationlideres)
    setAnotations(orientationanotations)
    setPeople(orientationpeople)
    setMeetings(orientationmeetings)
  }
  function handleEditMeeting(idx) {
    setMeetingIndex(idx)
    setOpenModalMeeting(true)
  }
  return <OrientationContext.Provider value={{
    setId,
    setClassName,
    setStatus,
    setLideres,
    setAnotations,
    classNameHandler,
    peopleHandler,
    statusHandler,
    lideresHandler,
    anotationsHandler,
    className,
    people,
    status,
    anotations,
    lideres,
    handleSubmit,
    handleEdit,
    handleDelete,
    openModal,
    OpenModal,
    setPeople,
    id,
    CloseModal,
    index,
    OpenModalPeople,
    CloseModalPeople,
    AddMeeting,
    meetings,
    meetingsHandler,
    openModalMeeting,
    setMeetings,
    meetingIndex,
    handleEditMeeting,
    DeleteMeeting,
    setOpenModalMeeting,
    CloseModalMeetings,
    CloseModalCreateOrientation,
    OpenModalCreateOrientation
  }}>
    {children}
    {openModal && <ModalEditClassRoom />}
    {openModalCreateOrientation && <ModalCreateOrientation />}
    {openModalPeople && <ModalAddPeopleOrientationMeeting />}
    {openModalMeeting && <ModalEditOrientationMeetings />}
  </OrientationContext.Provider>
}
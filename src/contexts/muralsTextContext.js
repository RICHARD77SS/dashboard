import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import MuralsAddText from '../Components/MuralsAddText';

export const MuralsTextContext = React.createContext();

export function MuralsTextContextProvider({ children }) {
  const { data, mutate } = useAxios('muralstext');

  const [id, setId] = React.useState();
  const [name, setName] = React.useState()
  const [description, setDescription] = React.useState()
  const [textColor, setTextColor] = React.useState()
  const [backColor, setBackColor] = React.useState()
  const [background, setBackground] = React.useState()
  const [status, setStatus] = React.useState()
  const [unpublish, setUnpublish] = React.useState()
  const [link, setLink] = React.useState()
  const [notification, setNotification] = React.useState(false)

  const [openModal, setOpenModal] = React.useState(false)

  function nameHandler(event) {
    setName(event.target.value);
  }
  function descriptionHandler(event) {
    setDescription(event.target.value);
  }
  function textColorHandler(event) {
    setTextColor(event.target.value)
  }
  function backColorHandler(event) {
    setBackColor(event.target.value)
  }
  function backgroundHandler(event) {
    setBackground(event.target.value)
  }
  function statusHandler(event) {
    setStatus(event.target.value)
  }
  function unpublishHandler(event) {
    setUnpublish(event.target.value)
  }
  function linkHandler(event) {
    setLink(event.target.value)
  }
  function notificationHandler(event) {
    setNotification(event.target.checked)
  }
  function OpenModal() {
    setOpenModal(true)
  }

  function CloseModal() {
    setOpenModal(false)
    setName('')
    setDescription('')
    setTextColor('')
    setBackColor('')
    setBackground('')
    setStatus('')
    setUnpublish('')
    setLink('')
    setNotification('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    CloseModal()
    const muralsText = {
      name,
      description,
      textColor,
      backColor,
      background,
      status,
      unpublish,
      link,
      notification,
    }
    if (id) {
      api.put(`muralstext/${id}`, muralsText)
      window.alert('muralsText Editada')
      const updatedMuralsText = {
        muralsText: data.muralsText?.map((muralsText) => {
          if (muralsText._id === id) {
            return {
              ...muralsText,
              name,
              description,
              textColor,
              backColor,
              background,
              status,
              unpublish,
              link,
              notification,
            };
          }
          return muralsText
        }),
      };
      mutate(updatedMuralsText, false)
    } else {
      api.post('muralstext', muralsText);
      window.alert('muralsText adicionada')
      const updatedMuralsText = {
        muralsText: [...data.muralsText, muralsText]
      }
      mutate(updatedMuralsText, false)
    }
  }
  function handleDelete(id) {
    api.delete(`muralstext/${id}`);
    window.alert('muralsText removido')
    const updatedMuralsText = {
      muralsText: data.muralsText?.filter((muralsText) => muralsText._id !== id)
    };
    mutate(updatedMuralsText, false)
  }

  function handleEdit(muralsTextId,
    muralsTextName,
    muralsTextDescription,
    muralsTextTextColor,
    muralsTextBackColor,
    muralsTextBackground,
    muralsTextStatus,
    muralsTextUnpublish,
    muralsTextLink,
    muralsTextNotification,
  ) {
    setName(muralsTextName);
    setDescription(muralsTextDescription);
    setTextColor(muralsTextTextColor)
    setBackColor(muralsTextBackColor)
    setBackground(muralsTextBackground)
    setStatus(muralsTextStatus)
    setUnpublish(muralsTextUnpublish)
    setLink(muralsTextLink)
    setNotification(muralsTextNotification)
    setId(muralsTextId);
    setOpenModal(true);
  }
  return <MuralsTextContext.Provider value={{
    name,
    description,
    textColor,
    backColor,
    background,
    status,
    unpublish,
    link,
    notification,
    nameHandler,
    descriptionHandler,
    textColorHandler,
    backColorHandler,
    backgroundHandler,
    statusHandler,
    unpublishHandler,
    linkHandler,
    notificationHandler,
    handleSubmit,
    handleDelete,
    setId,
    id,
    openModal,
    handleEdit,
    setOpenModal,
    CloseModal,
    OpenModal
  }}>
    {children}
    {openModal && <MuralsAddText />}
  </MuralsTextContext.Provider>
}
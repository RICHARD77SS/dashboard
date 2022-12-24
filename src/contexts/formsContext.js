import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import ModalAccountEdit from '../Components/ModalAccountEdit';

export const FormsContext = React.createContext();

export function FormsContextProvider({ children }) {
  const { data, mutate } = useAxios('forms');

  const [id, setId] = React.useState('');
  const [title, setTitle] = React.useState('')
  const [caption, setCaption] = React.useState('')
  const [status, setStatus] = React.useState('Publicado')
  const [notification, setNotification] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [additionalFields, setAdditionalFields] = React.useState([])
  const [options, setOptions] = React.useState([])
  const [date, setDate] = React.useState()


  const [openModal, setOpenModal] = React.useState(false)

  function titleHandler(event) {
    setTitle(event.target.value);
  }
  function descriptionHandler(event) {
    setDescription(event.target.value);
  }
  function captionHandler(event) {
    setCaption(event.target.value)
  }
  function statusHandler(event) {
    setStatus(event.target.value)
  }
  function notificationHandler(event) {
    setNotification(event.target.checked)
  }
  function AddOptions() {
    let obj = {
      value: "",
      type: "",
    }
    setOptions([...options, obj])
  }
  function RemoveOptions(index) {
    let data = [...options]
    data.splice(index, 1)
    setOptions(data)
  }
  function optionsHandler(event, index) {
    let data = [...options]
    data[index][event.target.name] = event.target.value
    setOptions(data)
  }

  function AddFields() {
    let obj = {
      name: "",
      type: "",
      required: "false",
      hidden: "false",
      options: options
    }
    setAdditionalFields([...additionalFields, obj])
  }
  function RemoveFields(index) {
    let data = [...additionalFields]
    data.splice(index, 1)
    setAdditionalFields(data)
  }
  function additionalFieldsHandler(event, index) {
    let data = [...additionalFields]
    data[index][event.target.name] = event.target.value
    setAdditionalFields(data)
  }
  function CloseModal() {
    setOpenModal(false)
    setId('')
    setDescription('')
    setTitle('')
    setCaption('')
    setStatus('Publicado')
    setNotification('')
    setAdditionalFields([])
  }

  function handleSubmit(event) {
    event.preventDefault()
    CloseModal()
    const forms = {
      title,
      caption,
      status,
      notification,
      description,
      additionalFields,
      date
    }
    if (id) {
      api.put(`forms/${id}`, forms)
      window.alert('forms Editada')
      const updatedForms = {
        forms: data.forms?.map((forms) => {
          if (forms._id === id) {
            return {
              ...forms,
              title,
              caption,
              status,
              notification,
              description,
              additionalFields,
              date
            };
          }
          return forms
        }),
      };
      mutate(updatedForms, false)
    } else {
      api.post('forms', forms);
      window.alert('forms adicionada')
      const updatedForms = {
        forms: [...data.forms, forms]
      }
      mutate(updatedForms, false)
    }
  }
  function handleDelete(id) {
    api.delete(`forms/${id}`);
    window.alert('forms removido')
    const updatedForms = {
      forms: data.forms?.filter((forms) => forms._id !== id)
    };
    mutate(updatedForms, false)
  }

  function handleEdit(formsId, formsDescription, formsTitle, formsCaption, formsStatus, formsNotification, formsAdditionalFields) {
    setId(formsId)
    setDescription(formsDescription)
    setTitle(formsTitle)
    setCaption(formsCaption)
    setStatus(formsStatus)
    setNotification(formsNotification)
    setAdditionalFields(formsAdditionalFields)
    setOpenModal(true);
  }
  return <FormsContext.Provider value={{
    title,
    caption,
    status,
    notification,
    description,
    additionalFields,
    titleHandler,
    captionHandler,
    statusHandler,
    notificationHandler,
    descriptionHandler,
    additionalFieldsHandler,
    handleSubmit,
    handleDelete,
    id,
    openModal,
    handleEdit,
    setOpenModal,
    CloseModal,
    AddFields,
    RemoveFields,
    AddOptions,
    RemoveOptions,
    optionsHandler,
    options,
    setId,
    setDescription,
    setTitle,
    setCaption,
    setStatus,
    setNotification,
    setAdditionalFields,
  }}>
    {children}
    {openModal && <ModalAccountEdit />}
  </FormsContext.Provider>
}
import React from 'react';

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';

import AdditionalFieldEdit from '../Components/AdditionalFieldEdit';
export const ExtraFieldsContext = React.createContext();

export function ExtraFieldsContextProvider({ children }) {
  const { data, mutate } = useAxios('extraFields');

  const [id, setId] = React.useState();

  const [inputName, setInputName] = React.useState('')
  const [inputType, setInputType] = React.useState('')
  const [inputOption, setInputOption] = React.useState([])

  const [openModal, setOpenModal] = React.useState()
  const [index, setIndex] = React.useState()

  const [openCheck, setOpenCheck] = React.useState(false)
  const [openRadio, setOpenRadio] = React.useState(false)
  const [openText, setOpenText] = React.useState(false)
  const [openTextArea, setOpenTextArea] = React.useState(false)

  function inputNameHandle(event) {
    setInputName(event.target.value);
  }
  function inputTypeHandle(event) {
    setInputType(event.target.value);
  }
  function inputOptionHandle(event) {
    setInputOption([...inputOption]);

  }
  function inputOptionFocusOut(event) {
    if (event.target.value !== "") {
      setInputOption(inputOption.concat(event.target.value));
    }

  }

  function openModalCheck() {
    setInputName('')
    setInputOption([])
    setOpenCheck(true)
  }
  function openModalRadio() {
    setInputName('')
    setInputOption([])
    setOpenRadio(true)
  }
  function openModalText() {
    setInputName('')
    setInputOption([])
    setOpenText(true)
  }
  function openModalTextArea() {
    setInputName('')
    setInputOption([])
    setOpenTextArea(true)
  }

  function OpenModall(index) {
    setInputName('')
    setInputOption([])
    setOpenModal(true)
    setIndex(index)
  }
  function closeModall() {
    setOpenModal(false)
  }

  function handleSubmit(event) {
    event.preventDefault()

    setOpenCheck(false)
    setOpenRadio(false)
    setOpenText(false)
    setOpenTextArea(false)
    window.alert('Campo adicionado')
    const extraFields = {
      inputName,
      inputType,
      inputOption
    }

    if (id) {
      api.put(`extraFields/${id}`, extraFields)
      const updatedExtraFields = {
        extraFields: data.extraFields?.map((extraFields) => {
          if (extraFields._id === id) {
            return {
              ...extraFields,
              inputName,
              inputType,
              inputOption
            };
          }
          return extraFields
        }),
      };
      mutate(updatedExtraFields, false);
    } else {
      api.post('extraFields', extraFields);
      const updatedExtraFields = {
        extraFields: [...data.extraFields, extraFields]
      }
      mutate(updatedExtraFields, false)
    }
    setOpenModal(false)

  }
  function handleDelete(id) {
    api.delete(`extraFields/${id}`);
    window.alert('Campo removido')
    const updatedExtraFields = {
      extrafields: data.extraFields?.filter((extraFields) => extraFields._id !== id)
    };
    mutate(updatedExtraFields, false);
  }
  function handleEdit(id) {
    const extraFields = {
      inputName,
      inputType,
      inputOption
    }
    api.put(`extraFields/${id}`, extraFields)
    const updatedExtraFields = {
      extraFields: data.extraFields?.map((extraFields) => {
        if (extraFields._id === id) {
          return {
            ...extraFields,
            inputName,
            inputType,
            inputOption
          };
        }
        return extraFields
      }),
    };
    mutate(updatedExtraFields, false);
  }

  return <ExtraFieldsContext.Provider value={{
    inputName,
    setInputName,
    inputType,
    setInputType,
    inputOption,
    setInputOption,
    inputNameHandle,
    inputTypeHandle,
    inputOptionHandle,
    handleSubmit,
    handleDelete,
    handleEdit,
    setId,
    inputOptionFocusOut,
    openModal,
    OpenModall,
    closeModall,
    openCheck,
    setOpenCheck,
    openModalCheck,
    index,
    id,
    openModalRadio,
    openModalText,
    openModalTextArea,
    openRadio,
    setOpenRadio,
    openText,
    setOpenText,
    openTextArea,
    setOpenTextArea,
  }}>
    {children}
    {openModal && <AdditionalFieldEdit />}
  </ExtraFieldsContext.Provider>
}
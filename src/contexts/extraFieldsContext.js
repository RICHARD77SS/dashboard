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
  const [inputOption, setInputOption] = React.useState({
    option1: '',
    option2: '',
    option3: ''
  })
  const [openModalEdit1, setOpenModal1] = React.useState()
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
    setInputOption({ ...inputOption, [event.target.name]: event.target.value });

  }
  function inputOptionFocusOut(event) {
    if (event.target.value !== "") {
      setInputOption(inputOption.concat(event.target.value).splice(0, 3));
    }

  }

  function openModalCheck() {
    setInputName('')

    setOpenCheck(true)
  }
  function openModalRadio() {
    setInputName('')

    setOpenRadio(true)
  }
  function openModalText() {
    setInputName('')
    setInputOption({})
    setOpenText(true)
  }
  function openModalTextArea() {
    setInputName('')
    setInputOption({})
    setOpenTextArea(true)
  }

  function OpenModal1(index, name) {
    setInputName(name)

    setOpenModal1(true)
    setIndex(index)
  }
  function closeModall() {
    setOpenModal1(false)
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
    api.post('extraFields', extraFields);
    const updatedExtraFields = {
      extraFields: [...data.extraFields, extraFields]
    }
    mutate(updatedExtraFields, false)

    setOpenModal1(false)

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
    openModalEdit1,
    OpenModal1,
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
    {openModalEdit1 && <AdditionalFieldEdit />}
  </ExtraFieldsContext.Provider>
}
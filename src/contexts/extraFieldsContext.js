import React from 'react';

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';

import AdditionalFieldEdit from '../Components/ModalAdditionalFieldEdit';
import ModalNewInputFieldCheck from '../Components/ModalNewInputFieldCheck';
import ModalNewInputFieldRadio from '../Components/ModalNewInputFieldRadio';
import ModalNewInputFieldText from '../Components/ModalNewInputFieldText';
import ModalNewInputFieldTextArea from '../Components/ModalNewInputFieldTextArea';
export const ExtraFieldsContext = React.createContext();

export function ExtraFieldsContextProvider({ children }) {
  const { data, mutate } = useAxios('extraFields');

  const [id, setId] = React.useState();

  const [inputName, setInputName] = React.useState('')
  const [inputType, setInputType] = React.useState('')
  const [inputOption, setInputOption] = React.useState([])
  const [openModalEdit1, setOpenModal1] = React.useState()
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

  function AddOption() {
    let obj = {
      option: ""
    }
    setInputOption([...inputOption, obj])
  }

  function RemoveOption(index) {
    let data = [...inputOption];
    data.splice(index, 1)
    setInputOption(data)
  }

  function inputOptionHandle(event, index) {
    let data = [...inputOption];
    data[index][event.target.name] = event.target.value;
    setInputOption(data);
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
    setInputOption([])
    setOpenText(true)
  }
  function openModalTextArea() {
    setInputName('')
    setInputOption([])
    setOpenTextArea(true)
  }
  function closeModalCheck() {
    setOpenCheck(false)
  }
  function closeModalRadio() {
    setOpenRadio(false)
  }
  function closeModalText() {
    setOpenText(false)
  }
  function closeModalTextArea() {
    setOpenTextArea(false)
  }
  function CloseModal() {
    setOpenModal1(false)
  }
  function handleSubmit(event) {
    event.preventDefault()
    setOpenModal1(false)
    setOpenCheck(false)
    setOpenRadio(false)
    setOpenText(false)
    setOpenTextArea(false)
    const extraFields = {
      inputName,
      inputType,
      inputOption
    }
    if (id) {
      api.put(`extraFields/${id}`, extraFields)
      window.alert('Campo editado')
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
      window.alert('Campo adicionado')
      const updatedExtraFields = {
        extraFields: [...data.extraFields, extraFields]
      }
      mutate(updatedExtraFields, false)
    }
  }
  function handleDelete(id) {
    api.delete(`extraFields/${id}`);
    window.alert('Campo removido')
    const updatedExtraFields = {
      extrafields: data.extraFields?.filter((extraFields) => extraFields._id !== id)
    };
    mutate(updatedExtraFields, false);
  }
  function handleEdit(idField, nameField, optionField, inputTypeField) {
    setId(idField)
    setInputName(nameField)
    setInputOption(optionField)
    setInputType(inputTypeField)
    setOpenModal1(true)
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
    openModalEdit1,
    CloseModal,
    id,
    openModalCheck,
    openModalRadio,
    openModalText,
    openModalTextArea,
    closeModalCheck,
    closeModalRadio,
    closeModalText,
    closeModalTextArea,
    openCheck,
    openRadio,
    openText,
    openTextArea,
    RemoveOption,
    AddOption
  }}>
    {children}
    {openModalEdit1 && <AdditionalFieldEdit />}
    {openCheck && <ModalNewInputFieldCheck />}
    {openRadio && <ModalNewInputFieldRadio />}
    {openText && <ModalNewInputFieldText />}
    {openTextArea && <ModalNewInputFieldTextArea />}
  </ExtraFieldsContext.Provider>
}
import React from 'react';

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';

import AdditionalFieldEdit from '../Components/ModalAdditionalFieldEdit';
import ModalNewInputFieldCheck from '../Components/ModalNewInputFieldCheck';
import ModalNewInputFieldRadio from '../Components/ModalNewInputFieldRadio';
import ModalNewInputFieldText from '../Components/ModalNewInputFieldText';
import ModalNewInputFieldTextArea from '../Components/ModalNewInputFieldTextArea';
import { extrafieldsType, initialValue, useContext } from '../Types/@types.extraFieldsContext'

export const ExtraFieldsContext = React.createContext<extrafieldsType>(initialValue);

export function ExtraFieldsContextProvider({ children }: useContext) {
  const { data, mutate } = useAxios('extraFields');

  const [id, setId] = React.useState('');

  const [inputName, setInputName] = React.useState('')
  const [inputType, setInputType] = React.useState('')
  const [inputOption, setInputOption] = React.useState<any[]>([])
  const [openModalEdit1, setOpenModal1] = React.useState(false)
  const [openCheck, setOpenCheck] = React.useState(false)
  const [openRadio, setOpenRadio] = React.useState(false)
  const [openText, setOpenText] = React.useState(false)
  const [openTextArea, setOpenTextArea] = React.useState(false)

  function inputNameHandle(event: React.ChangeEvent<HTMLInputElement>) {
    setInputName(event.target.value);
  }
  function inputTypeHandle(event: React.ChangeEvent<HTMLInputElement>) {
    setInputType(event.target.value);
  }

  function AddOption() {
    let obj = {
      option: ""
    }
    setInputOption([...inputOption, obj])
  }

  function RemoveOption(index: number) {
    let data = [...inputOption];
    data.splice(index, 1)
    setInputOption(data)
  }

  function inputOptionHandle(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    let data = [...inputOption];
    data[index][event.target.name] = event.target.value;
    setInputOption(data);
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
  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
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
        extraFields: data.extraFields?.map((extraFields: any) => {
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
  function handleDelete(id:string) {
    api.delete(`extraFields/${id}`);
    window.alert('Campo removido')
    const updatedExtraFields = {
      extrafields: data.extraFields?.filter((extraFields: any) => extraFields._id !== id)
    };
    mutate(updatedExtraFields, false);
  }
  function handleEdit(idField: string, nameField: string, optionField: any[], inputTypeField: string) {
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
    setOpenCheck,
    setOpenRadio,
    setOpenText,
    setOpenTextArea,
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
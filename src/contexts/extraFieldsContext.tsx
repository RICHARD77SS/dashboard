import React from 'react';

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';

import AdditionalFieldEdit from '../Components/ModalAdditionalFieldEdit';
import ModalNewInputFieldCheck from '../Components/ModalNewInputFieldCheck';
import ModalNewInputFieldRadio from '../Components/ModalNewInputFieldRadio';
import ModalNewInputFieldText from '../Components/ModalNewInputFieldText';
import ModalNewInputFieldTextArea from '../Components/ModalNewInputFieldTextArea';
import { extrafieldsType, initialValue } from '../Types/@types.extraFieldsContext'
import { useContext } from '../Types/@type.useContext';

export const ExtraFieldsContext = React.createContext<extrafieldsType>(initialValue);

export function ExtraFieldsContextProvider({ children }: useContext) {
  const { data, mutate } = useAxios('extraFields');

  const [id, setId] = React.useState(initialValue.id);
  const [inputName, setInputName] = React.useState(initialValue.inputName)
  const [inputType, setInputType] = React.useState(initialValue.inputType)
  const [inputOption, setInputOption] = React.useState<any[]>(initialValue.inputOption)
  const [openModalEdit1, setOpenModal1] = React.useState(initialValue.openModalEdit1)
  const [openCheck, setOpenCheck] = React.useState(initialValue.openCheck)
  const [openRadio, setOpenRadio] = React.useState(initialValue.openRadio)
  const [openText, setOpenText] = React.useState(initialValue.openText)
  const [openTextArea, setOpenTextArea] = React.useState(initialValue.openTextArea)

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
    setOpenCheck(true)
  }
  function openModalRadio() {
    setOpenRadio(true)
  }
  function openModalText() {
    setOpenText(true)
  }
  function openModalTextArea() {
    setOpenTextArea(true)
  }
  function closeModalCheck() {
    setInputName(initialValue.inputName)
    setInputOption(initialValue.inputOption)
    setOpenCheck(initialValue.openCheck)
  }
  function closeModalRadio() {
    setInputName(initialValue.inputName)
    setInputOption(initialValue.inputOption)
    setOpenRadio(initialValue.openRadio)
  }
  function closeModalText() {
    setInputName(initialValue.inputName)
    setInputOption(initialValue.inputOption)
    setOpenText(initialValue.openText)
  }
  function closeModalTextArea() {
    setInputName(initialValue.inputName)
    setInputOption(initialValue.inputOption)
    setOpenTextArea(initialValue.openTextArea)
  }
  function CloseModal() {
    setOpenModal1(initialValue.openModalEdit1)
  }
  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    setOpenModal1(initialValue.openModalEdit1)
    setOpenCheck(initialValue.openCheck)
    setOpenRadio(initialValue.openRadio)
    setOpenText(initialValue.openText)
    setOpenTextArea(initialValue.openTextArea)
    const extraFields = {
      inputName,
      inputType,
      inputOption
    }
    if (id) {
      api.put(`extraFields/${id}`, extraFields)
      window.alert('Campo editado')
      const updatedExtraFields = {
        extraFields: data.extraFields?.map((extraFields: {_id:string}) => {
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
  function handleDelete(id: string) {
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
    id,
    data,
    inputName,
    inputType,
    inputOption,
    openModalEdit1,
    openCheck,
    openRadio,
    openText,
    openTextArea,
    setInputType,
    setInputName,
    setInputOption,
    inputNameHandle,
    inputTypeHandle,
    inputOptionHandle,
    handleSubmit,
    handleDelete,
    handleEdit,
    setId,
    CloseModal,
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
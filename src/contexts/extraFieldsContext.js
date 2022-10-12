import React from 'react';

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';

export const ExtraFieldsContext = React.createContext();

export function ExtraFieldsContextProvider({ children }) {
  const { data, mutate } = useAxios('personContext');

  const [id, setId] = React.useState('');

  const [inputName, setInputName] = React.useState('')
  const [inputType, setInputType] = React.useState('')
  const [inputOption, setInputOption] = React.useState([])

  function inputNameHandle(event) {
    setInputName(event.target.value);
  }
  function inputTypeHandle(event) {
    setInputType(event.target.value);
  }
  function inputOptionHandle(event) {
    setInputOption(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault()
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
        extraFields:[...data.extraFields, extraFields]
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
    setId
  }}>
    {children}
  </ExtraFieldsContext.Provider>
}
import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';

export const AnotationsContext = React.createContext();

export function AnotationsContextProvider({ children }) {
  const { data, mutate } = useAxios('anotations');

  const [id, setId] = React.useState();
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [category, setCategory] = React.useState('')

  function nameHandler(event) {
    setName(event.target.value);
  }
  function descriptionHandler(event) {
    setDescription(event.target.value);
  }
  function categoryHandler(event) {
    setCategory(event.target.value);
  }

  function Clear() {
    setId('')
    setName('')
    setDescription('')
    setCategory('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    Clear()
    const anotations = {
      name,
      description,
      category
    }
    if (id) {
      api.put(`anotations/${id}`, anotations)
      window.alert('anotations Editada')
      const updatedAnotations = {
        anotations: data.anotations?.map((anotations) => {
          if (anotations._id === id) {
            return {
              ...anotations,
              name,
              description,
              category
            };
          }
          return anotations
        }),
      };
      mutate(updatedAnotations, false)
    } else {
      api.post('anotations', anotations);
      window.alert('anotations adicionada')
      const updatedAnotations = {
        anotations: [...data.anotations, anotations]
      }
      mutate(updatedAnotations, false)
    }
  }
  function handleDelete(id) {
    api.delete(`anotations/${id}`);
    window.alert('anotations removido')
    const updatedAnotations = {
      anotations: data.anotations?.filter((anotations) => anotations._id !== id)
    };
    mutate(updatedAnotations, false)
  }

  function handleEdit(anotationsId, anotationsName, anotationsDescription, anotationsCategory) {
    setId(anotationsId);
    setName(anotationsName);
    setDescription(anotationsDescription);
    setCategory(anotationsCategory);
  }
  return <AnotationsContext.Provider value={{
    name,
    description,
    category,
    nameHandler,
    descriptionHandler,
    categoryHandler,
    setDescription,
    handleSubmit,
    handleDelete,
    setId,
    id,
    handleEdit,
    Clear
  }}>
    {children}
  </AnotationsContext.Provider>
}
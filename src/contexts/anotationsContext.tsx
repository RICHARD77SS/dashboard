import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import { useContext } from '../Types/@types.useContext';
import { AnotationsTypes, initialValue } from '../Types/@types.anotationsContext';

export const AnotationsContext = React.createContext<AnotationsTypes>(initialValue);

export function AnotationsContextProvider({ children }: useContext) {
  const { data, mutate } = useAxios('anotations');

  const [id, setId] = React.useState(initialValue.id);
  const [name, setName] = React.useState(initialValue.name)
  const [description, setDescription] = React.useState(initialValue.description)
  const [category, setCategory] = React.useState(initialValue.category)

  function nameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function descriptionHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.target.value);
  }
  function categoryHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setCategory(event.target.value);
  }

  function Clear() {
    setId('')
    setName('')
    setDescription('')
    setCategory('')
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
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
        anotations: data.anotations?.map((anotations: { _id: string }) => {
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
  function handleDelete(id: string) {
    api.delete(`anotations/${id}`);
    window.alert('anotations removido')
    const updatedAnotations = {
      anotations: data.anotations?.filter((anotations: { _id: string }) => anotations._id !== id)
    };
    mutate(updatedAnotations, false)
  }

  function handleEdit(anotationsId: string, anotationsName: string, anotationsDescription: string, anotationsCategory: string) {
    setId(anotationsId);
    setName(anotationsName);
    setDescription(anotationsDescription);
    setCategory(anotationsCategory);
  }
  return <AnotationsContext.Provider value={{
    name,
    description,
    category,
    setName,
    setDescription,
    setCategory,
    nameHandler,
    descriptionHandler,
    categoryHandler,
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
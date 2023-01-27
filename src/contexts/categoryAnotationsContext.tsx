import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import { useContext } from '../Types/@type.useContext';
import { CategoryAnotationsTypes,initialValue } from '../Types/@types.categoryAnotationsContext';

export const CategoryAnotationsContext = React.createContext<CategoryAnotationsTypes>(initialValue);

export function CategoryAnotationsContextProvider({ children }:useContext) {
  const { data, mutate } = useAxios('categoryanotations');

  const [id, setId] = React.useState(initialValue.id);
  const [name, setName] = React.useState(initialValue.name)
  const [description, setDescription] = React.useState(initialValue.description)

  function nameHandler(event:React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function descriptionHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.target.value);
  }

  function CloseModal() {
    setId(initialValue.id)
    setName(initialValue.name)
    setDescription(initialValue.description)

  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    CloseModal() 
    const categoryAnotations = {
      name,
      description
    }
    if (id) {
      api.put(`categoryanotations/${id}`, categoryAnotations)
      window.alert('categoryAnotations Editada')
      const updatedCategoryAnotations = {
        categoryAnotations: data.categoryAnotations?.map((categoryAnotations:{_id:string}) => {
          if (categoryAnotations._id === id) {
            return {
              ...categoryAnotations,
              name,
              description
            };
          }
          return categoryAnotations
        }),
      };
      mutate(updatedCategoryAnotations, false)
    } else {
      api.post('categoryanotations', categoryAnotations);
      window.alert('categoryAnotations adicionada')
      const updatedCategoryAnotations = {
        categoryAnotations: [...data.categoryAnotations, categoryAnotations]
      }
      mutate(updatedCategoryAnotations, false)
    }
  }
  function handleDelete(id:string) {
    api.delete(`categoryanotations/${id}`);
    window.alert('CategoryAnotations removido')
    const updatedCategoryAnotations = {
      categoryAnotations: data.categoryAnotations?.filter((categoryAnotations: { _id: string }) => categoryAnotations._id !== id)
    };
    mutate(updatedCategoryAnotations, false)
  }

  function handleEdit(categoryId: string, categoryName: string, categoryDescription: string) {
    setName(categoryName);
    setDescription(categoryDescription);
    setId(categoryId);
  }
  return <CategoryAnotationsContext.Provider value={{
    name,
    description,
    setName,
    setDescription,
    nameHandler,
    descriptionHandler,
    handleSubmit,
    handleDelete,
    setId,
    id,
    handleEdit,
  }}>
    {children}
  </CategoryAnotationsContext.Provider>
}
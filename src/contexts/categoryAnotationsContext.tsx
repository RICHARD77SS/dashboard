import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';

export const CategoryAnotationsContext = React.createContext();

export function CategoryAnotationsContextProvider({ children }) {
  const { data, mutate } = useAxios('categoryanotations');

  const [id, setId] = React.useState();
  const [name, setName] = React.useState()
  const [description, setDescription] = React.useState()

  function nameHandler(event) {
    setName(event.target.value);
  }
  function descriptionHandler(event) {
    setDescription(event.target.value);
  }

  function CloseModal() {
    setId('')
    setName('')
    setDescription('')
  }

  function handleSubmit(event) {
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
        categoryAnotations: data.categoryAnotations?.map((categoryAnotations) => {
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
  function handleDelete(id) {
    api.delete(`categoryanotations/${id}`);
    window.alert('CategoryAnotations removido')
    const updatedCategoryAnotations = {
      categoryAnotations: data.categoryAnotations?.filter((categoryAnotations) => categoryAnotations._id !== id)
    };
    mutate(updatedCategoryAnotations, false)
  }

  function handleEdit(categoryId, categoryName, categoryDescription) {
    setName(categoryName);
    setDescription(categoryDescription);
    setId(categoryId);
  }
  return <CategoryAnotationsContext.Provider value={{
    name,
    description,
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
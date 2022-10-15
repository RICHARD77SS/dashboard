import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';

export function CategoryContextProvider({ children }) {
  const { data, mutate } = useAxios('category');

  const [id, setId] = React.useState();
  const [categoryName, setCategoryName] = React.useState()
  const [categoryDescription, setCategoryDescription] = React.useState()
  function categoryNameHandler(event) {
    setCategoryName(event.target.value);
  }
  function categoryDescriptionHandler(event) {
    setCategoryDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    window.alert('category adicionada')
    const category = {
      categoryName,
      categoryDescription
    }
    if (id) {
      api.put(`category/${id}`, category)
      const updatedCategory = {
        category: data.category?.map((category) => {
          if (category._id === id) {
            return {
              ...category,
              categoryName,
              categoryDescription
            };
          }
          return category
        }),
      };
      mutate(updatedCategory, false)
    } else {
      api.post('category', category);
      const updatedCategory = {
        category: [...data.category, category]
      }
      mutate(updatedCategory, false)
    }
  }
  function handleDelete(id) {
    api.delete(`extraFields/${id}`);
    window.alert('Category removido')
    const updatedCategory = {
      category: data.category?.filter((category) => category._id !== id)
    };
    mutate(updatedCategory, false)
  }
  function handleEdit(id) {
    const category = {
      categoryName,
      categoryDescription
    }
    api.put(`category/${id}`, category)
    const updatedCategory = {
      category: data.category?.map((category) => {
        if (category._id === id) {
          return {
            ...category,
            categoryName,
            categoryDescription
          };
        }
        return category
      }),
    };
    mutate(updatedCategory, false);
  }

  return <CategoryContextProvider.Provider value={{
    categoryName,
    categoryDescription,
    categoryNameHandler,
    categoryDescriptionHandler,
    handleSubmit,
    handleEdit,
    handleDelete,
    setId,
    id
  }}>
    {children}
  </CategoryContextProvider.Provider>
}
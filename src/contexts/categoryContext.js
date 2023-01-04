import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import CategoriesEdit from '../Components/ModalCategoriesEdit';

export const CategoryContext = React.createContext();

export function CategoryContextProvider({ children }) {
  const { data, mutate } = useAxios('category');

  const [id, setId] = React.useState();
  const [name, setName] = React.useState()
  const [description, setDescription] = React.useState()

  const [openModal, setOpenModal] = React.useState(false)

  function nameHandler(event) {
    setName(event.target.value);
  }
  function descriptionHandler(event) {
    setDescription(event.target.value);
  }

  function CloseModal() {
    setId('')
    setOpenModal(false)
    setName('')
    setDescription('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const category = {
      name,
      description
    }
    if (id) {
      api.put(`category/${id}`, category)
      window.alert('category Editada')
      const updatedCategory = {
        category: data.category?.map((category) => {
          if (category._id === id) {
            return {
              ...category,
              name,
              description
            };
          }
          return category
        }),
      };
      mutate(updatedCategory, false)
    } else {
      api.post('category', category);
      window.alert('category adicionada')
      const updatedCategory = {
        category: [...data.category, category]
      }
      mutate(updatedCategory, false)
    }
  }
  function handleDelete(id) {
    api.delete(`category/${id}`);
    window.alert('Category removido')
    const updatedCategory = {
      category: data.category?.filter((category) => category._id !== id)
    };
    mutate(updatedCategory, false)
  }

  function handleEdit(categoryId, categoryName, categoryDescription) {
    setName(categoryName);
    setDescription(categoryDescription);
    setId(categoryId);
    setOpenModal(true);
  }
  return <CategoryContext.Provider value={{
    name,
    description,
    nameHandler,
    descriptionHandler,
    handleSubmit,
    handleDelete,
    setId,
    id,
    openModal,
    handleEdit,
    setOpenModal,
    CloseModal
  }}>
    {children}
    {openModal && <CategoriesEdit />}
  </CategoryContext.Provider>
}
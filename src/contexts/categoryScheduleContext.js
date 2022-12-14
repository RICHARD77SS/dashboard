import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import CategoriesScheduleEdit from '../Components/CategoriesScheduleEdit';

export const CategoryScheduleContext = React.createContext();

export function CategoryScheduleContextProvider({ children }) {
  const { data, mutate } = useAxios('categoryschedule');

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
    setOpenModal(false)
    setName('')
    setDescription('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const categorySchedule = {
      name,
      description
    }
    if (id) {
      api.put(`categoryschedule/${id}`, categorySchedule)
      window.alert('categoryschedule Editada')
      const updatedCategorySchedule = {
        categorySchedule: data.categorySchedule?.map((categorySchedule) => {
          if (categorySchedule._id === id) {
            return {
              ...categorySchedule,
              name,
              description
            };
          }
          return categorySchedule
        }),
      };
      mutate(updatedCategorySchedule, false)
    } else {
      api.post('categoryschedule', categorySchedule);
      window.alert('categoryschedule adicionada')
      const updatedCategorySchedule = {
        categorySchedule: [...data.categorySchedule, categorySchedule]
      }
      mutate(updatedCategorySchedule, false)
    }
  }
  function handleDelete(id) {
    api.delete(`categoryschedule/${id}`);
    window.alert('Categoryschedule removido')
    const updatedCategorySchedule = {
      categorySchedule: data.categorySchedule?.filter((categorySchedule) => categorySchedule._id !== id)
    };
    mutate(updatedCategorySchedule, false)
  }

  function handleEdit(categoryId, categoryName, categoryDescription) {
    setName(categoryName);
    setDescription(categoryDescription);
    setId(categoryId);
    setOpenModal(true);
  }
  return <CategoryScheduleContext.Provider value={{
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
    {openModal && <CategoriesScheduleEdit />}
  </CategoryScheduleContext.Provider>
}
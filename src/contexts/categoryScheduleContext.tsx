import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import CategoriesScheduleEdit from '../Components/CategoriesScheduleEdit';
import { useContext } from '../Types/@types.useContext';
import { CategorySchedule, initialValue } from '../Types/@types.categorySchedule';

export const CategoryScheduleContext = React.createContext<CategorySchedule>(initialValue);

export function CategoryScheduleContextProvider({ children }: useContext) {
  const { data, mutate } = useAxios('categoryschedule');

  const [id, setId] = React.useState(initialValue.id);
  const [name, setName] = React.useState(initialValue.name)
  const [description, setDescription] = React.useState(initialValue.description)

  const [openModal, setOpenModal] = React.useState(initialValue.openModal)

  function nameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function descriptionHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.target.value);
  }

  function CloseModal() {
    setId(initialValue.id)
    setOpenModal(false)
    setName(initialValue.name)
    setDescription(initialValue.description)
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    const categorySchedule = {
      name,
      description
    }
    if (id) {
      api.put(`categoryschedule/${id}`, categorySchedule)
      window.alert('categoryschedule Editada')
      const updatedCategorySchedule = {
        categorySchedule: data.categorySchedule?.map((categorySchedule: { _id: string }) => {
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
  function handleDelete(id: string) {
    api.delete(`categoryschedule/${id}`);
    window.alert('Categoryschedule removido')
    const updatedCategorySchedule = {
      categorySchedule: data.categorySchedule?.filter((categorySchedule: { _id: string }) => categorySchedule._id !== id)
    };
    mutate(updatedCategorySchedule, false)
  }

  function handleEdit(categoryId: string, categoryName: string, categoryDescription: string) {
    setName(categoryName);
    setDescription(categoryDescription);
    setId(categoryId);
    setOpenModal(true);
  }
  return <CategoryScheduleContext.Provider value={{
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
    openModal,
    handleEdit,
    setOpenModal,
    CloseModal
  }}>
    {children}
    {openModal && <CategoriesScheduleEdit />}
  </CategoryScheduleContext.Provider>
}
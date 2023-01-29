import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import CategoriesPatrimoniesEdit from '../Components/CategoriesPatrimoniesEdit';
import { useContext } from '../Types/@type.useContext';

export const CategoryPatrimoniesContext = React.createContext();

export function CategoryPatrimoniesContextProvider({ children }:useContext) {
  const { data, mutate } = useAxios('categorypatrimonies');

  const [id, setId] = React.useState();
  const [name, setName] = React.useState()
  const [description, setDescription] = React.useState()

  const [openModal, setOpenModal] = React.useState(false)

  function nameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function descriptionHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.target.value);
  }

  function OpenModal() {
    setOpenModal(true)
  }
  function CloseModal() {
    setId('')
    setOpenModal(false)
    setName('')
    setDescription('')
  }

  function handleSubmit(event:React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    CloseModal()
    const categoryPatrimonies = {
      name,
      description
    }
    if (id) {
      api.put(`categorypatrimonies/${id}`, categoryPatrimonies)
      window.alert('categorypatrimonies Editada')
      const updatedCategoryPatrimonies = {
        categoryPatrimonies: data.categoryPatrimonies?.map((categoryPatrimonies:{_id:string}) => {
          if (categoryPatrimonies._id === id) {
            return {
              ...categoryPatrimonies,
              name,
              description
            };
          }
          return categoryPatrimonies
        }),
      };
      mutate(updatedCategoryPatrimonies, false)
    } else {
      api.post('categorypatrimonies', categoryPatrimonies);
      window.alert('categorypatrimonies adicionada')
      const updatedCategoryPatrimonies = {
        categoryPatrimonies: [...data.categoryPatrimonies, categoryPatrimonies]
      }
      mutate(updatedCategoryPatrimonies, false)
    }
  }
  function handleDelete(id:string) {
    api.delete(`categorypatrimonies/${id}`);
    window.alert('CategoryPatrimonies removido')
    const updatedCategoryPatrimonies = {
      categoryPatrimonies: data.categoryPatrimonies?.filter((categoryPatrimonies:{_id:string}) => categoryPatrimonies._id !== id)
    };
    mutate(updatedCategoryPatrimonies, false)
  }

  function handleEdit(categoryId: string, categoryName: string, categoryDescription: string) {
    setName(categoryName);
    setDescription(categoryDescription);
    setId(categoryId);
    setOpenModal(true);
  }
  return <CategoryPatrimoniesContext.Provider value={{
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
    OpenModal,
    CloseModal
  }}>
    {children}
    {openModal && <CategoriesPatrimoniesEdit />}
  </CategoryPatrimoniesContext.Provider>
}
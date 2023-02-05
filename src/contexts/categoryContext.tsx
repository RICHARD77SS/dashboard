import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import CategoriesEdit from '../Components/ModalCategoriesEdit';
import { PersonCategoryType, initialValue } from '../Types/@types.personCategoryContext';
import { useContext } from '../Types/@types.useContext';

export const CategoryContext = React.createContext<PersonCategoryType>(initialValue);

export function CategoryContextProvider({ children }: useContext) {
  const { data, mutate } = useAxios('category');
  let length = data?.category?.length
  const [id, setId] = React.useState(initialValue.id);
  const [name, setName] = React.useState(initialValue.name)
  const [description, setDescription] = React.useState(initialValue.description)
  const [openModal, setOpenModal] = React.useState(false)
  console.log(data)
  function nameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function descriptionHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  function CloseModal() {
    setId(initialValue.id)
    setName(initialValue.name)
    setOpenModal(initialValue.openModal)
    setDescription(initialValue.description)
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    const category = {
      name,
      description
    }
    if (id) {
      api.put(`category/${id}`, category)
      window.alert('category Editada')
      CloseModal()
      const updatedCategory = {
        category: data.category?.map((category: { _id: string }) => {
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
      CloseModal()
      const updatedCategory = {
        category: [...data.category, category]
      }
      mutate(updatedCategory, false)
    }
  }
  function handleDelete(id: string) {
    api.delete(`category/${id}`);
    window.alert('Category removido')
    const updatedCategory = {
      category: data.category?.filter((category: any) => category._id !== id)
    };
    mutate(updatedCategory, false)
  }

  function handleEdit(categoryId: string, categoryName: string, categoryDescription: string) {
    setName(categoryName);
    setDescription(categoryDescription);
    setId(categoryId);
    setOpenModal(true);
  }
  return <CategoryContext.Provider value={{
    id,
    data,
    name,
    length,
    description,
    openModal,
    setName,
    setDescription,
    nameHandler,
    descriptionHandler,
    handleSubmit,
    handleDelete,
    setId,
    handleEdit,
    setOpenModal,
    CloseModal,
  }}>
    {children}
    {openModal && <CategoriesEdit />}
  </CategoryContext.Provider>
}
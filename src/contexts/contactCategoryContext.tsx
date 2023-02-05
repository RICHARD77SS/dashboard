import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import ModalContactCategoriesEdit from '../Components/ModalContactCategoriesEdit';
import { useContext } from '../Types/@types.useContext';
import { initialValue, ContactCategoryType } from '../Types/@types.contactCategoryContext'

export const ContactCategoryContext = React.createContext<ContactCategoryType>(initialValue);

export function ContactCategoryContextProvider({ children }: useContext) {
  const { data, mutate } = useAxios('contactcategory');

  const [id, setId] = React.useState(initialValue.id);
  const [name, setName] = React.useState(initialValue.name)
  const [description, setDescription] = React.useState(initialValue.description)

  const [openModal, setOpenModal] = React.useState(initialValue.openModal)

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
    const contactCategory = {
      name,
      description
    }
    if (id) {
      api.put(`contactcategory/${id}`, contactCategory)
      window.alert('contactcategory Editada')
      const updatedContactCategory = {
        contactCategory: data.contactCategory?.map((contactCategory:{_id:string}) => {
          if (contactCategory._id === id) {
            return {
              ...contactCategory,
              name,
              description
            };
          }
          return contactCategory
        }),
      };
      mutate(updatedContactCategory, false)
    } else {
      api.post('contactcategory', contactCategory);
      window.alert('contactcategory adicionada')
      const updatedContactCategory = {
        contactCategory: [...data.contactCategory, contactCategory]
      }
      mutate(updatedContactCategory, false)
    }
  }
  function handleDelete(id: string) {
    api.delete(`contactcategory/${id}`);
    window.alert('contactCategory removido')
    const updatedContactCategory = {
      contactCategory: data.contactCategory?.filter((contactCategory: { _id: string }) => contactCategory._id !== id)
    };
    mutate(updatedContactCategory, false)
  }

  function handleEdit(contactcategoryId: string, contactcategoryName: string, contactcategoryDescription: string) {
    setName(contactcategoryName);
    setDescription(contactcategoryDescription);
    setId(contactcategoryId);
    setOpenModal(true);
  }
  return <ContactCategoryContext.Provider value={{
    id,
    name,
    description,
    openModal,
    setName,
    setDescription,
    setId,
    nameHandler,
    descriptionHandler,
    handleSubmit,
    handleDelete,
    handleEdit,
    setOpenModal,
    CloseModal,
    data
  }}>
    {children}
    {openModal && <ModalContactCategoriesEdit />}
  </ContactCategoryContext.Provider>
}
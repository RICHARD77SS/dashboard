import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import ModalContactCategoriesEdit from '../Components/ModalContactCategoriesEdit';

export const ContactCategoryContext = React.createContext();

export function ContactCategoryContextProvider({ children }) {
  const { data, mutate } = useAxios('contactcategory');

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
    setId('')
    setName('')
    setDescription('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const contactCategory = {
      name,
      description
    }
    if (id) {
      api.put(`contactcategory/${id}`, contactCategory)
      window.alert('contactcategory Editada')
      const updatedContactCategory = {
        contactCategory: data.contactCategory?.map((contactCategory) => {
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
  function handleDelete(id) {
    api.delete(`contactcategory/${id}`);
    window.alert('contactCategory removido')
    const updatedContactCategory = {
      contactCategory: data.contactCategory?.filter((contactCategory) => contactCategory._id !== id)
    };
    mutate(updatedContactCategory, false)
  }

  function handleEdit(contactcategoryId, contactcategoryName, contactcategoryDescription) {
    setName(contactcategoryName);
    setDescription(contactcategoryDescription);
    setId(contactcategoryId);
    setOpenModal(true);
  }
  return <ContactCategoryContext.Provider value={{
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
    {openModal && <ModalContactCategoriesEdit />}
  </ContactCategoryContext.Provider>
}
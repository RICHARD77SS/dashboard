import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import ModalContactEdit from '../Components/ModalContactEdit';

export const ContactContext = React.createContext();

export function ContactContextProvider({ children }) {
  const { data, mutate } = useAxios('contact');

  const [id, setId] = React.useState();
  const [name, setName] = React.useState()
  const [email, setEmail] = React.useState()
  const [category, setCategory] = React.useState()
  const [type, setType] = React.useState('Pessoa fisica')
  const [phone1, setPhone1] = React.useState()
  const [phone2, setPhone2] = React.useState()
  const [anotations, setAnotations] = React.useState()

  const [openModal, setOpenModal] = React.useState(false)

  function nameHandler(event) {
    setName(event.target.value);
  }
  function emailHandler(event) {
    setEmail(event.target.value);
  }
  function categoryHandler(event) {
    setCategory(event.target.value);
  }
  function typeHandler(event) {
    setType(event.target.value);
  }
  function phone1Handler(event) {
    setPhone1(event.target.value);
  }
  function phone2Handler(event) {
    setPhone2(event.target.value);
  }
  function anotationsHandler(event) {
    setAnotations(event.target.value);
  }

  function CloseModal() {
    setOpenModal(false)
    setName('')
    setEmail('')
    setCategory('')
    setType('')
    setPhone1('')
    setPhone2('')
    setAnotations('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const contact = {
      name,
      email,
      category,
      type,
      phone1,
      phone2,
      anotations
    }
    if (id) {
      api.put(`contact/${id}`, contact)
      window.alert('contact Editada')
      const updatedContact = {
        contact: data.contact?.map((contact) => {
          if (contact._id === id) {
            return {
              ...contact,
              name,
              email,
              category,
              type,
              phone1,
              phone2,
              anotations
            };
          }
          return contact
        }),
      };
      mutate(updatedContact, false)
    } else {
      api.post('contact', contact);
      window.alert('contact adicionada')
      const updatedContact = {
        contact: [...data.contact, contact]
      }
      mutate(updatedContact, false)
    }
  }
  function handleDelete(id) {
    api.delete(`contact/${id}`);
    window.alert('contact removido')
    const updatedContact = {
      contact: data.contact?.filter((contact) => contact._id !== id)
    };
    mutate(updatedContact, false)
  }

  function handleEdit(contactId, contactName,
    contactEmail,
    contactCategory,
    contactType,
    contactPhone1,
    contactPhone2,
    contactAnotations) {
    setId(contactId);
    setName(contactName);
    setEmail(contactEmail);
    setCategory(contactCategory);
    setType(contactType);
    setPhone1(contactPhone1);
    setPhone2(contactPhone2);
    setAnotations(contactAnotations);
    setOpenModal(true);
  }
  return <ContactContext.Provider value={{
    name,
    email,
    category,
    type,
    phone1,
    phone2,
    anotations,
    nameHandler,
    emailHandler,
    categoryHandler,
    typeHandler,
    phone1Handler,
    phone2Handler,
    anotationsHandler,
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
    {openModal && <ModalContactEdit />}
  </ContactContext.Provider>
}
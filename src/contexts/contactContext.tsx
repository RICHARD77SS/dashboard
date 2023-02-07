import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import ModalContactEdit from '../Components/ModalContactEdit';
import { useContext } from '../Types/@types.useContext';

export const ContactContext = React.createContext();

export function ContactContextProvider({ children }:useContext) {
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

  function nameHandler(event:React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function emailHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  function categoryHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setCategory(event.target.value);
  }
  function typeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setType(event.target.value);
  }
  function phone1Handler(event: React.ChangeEvent<HTMLInputElement>) {
    setPhone1(event.target.value);
  }
  function phone2Handler(event: React.ChangeEvent<HTMLInputElement>) {
    setPhone2(event.target.value);
  }
  function anotationsHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setAnotations(event.target.value);
  }

  function CloseModal() {
    setOpenModal(false)
    setId('')
    setName('')
    setEmail('')
    setCategory('')
    setType('')
    setPhone1('')
    setPhone2('')
    setAnotations('')
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
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
        contact: data.contact?.map((contact:{_id:string}) => {
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
  function handleDelete(id:string) {
    api.delete(`contact/${id}`);
    window.alert('contact removido')
    const updatedContact = {
      contact: data.contact?.filter((contact: { _id: string }) => contact._id !== id)
    };
    mutate(updatedContact, false)
  }

  function handleEdit(
    contactId:string,
    contactName: string,
    contactEmail: string,
    contactCategory:string,
    contactType: string,
    contactPhone1:string,
    contactPhone2: string,
    contactAnotations: string
  ) {
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
    setName,
    setEmail,
    setCategory,
    setType,
    setPhone1,
    setPhone2,
    setAnotations,
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
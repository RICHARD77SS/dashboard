import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import ModalContactEdit from '../Components/ModalContactEdit';
import { useContext } from '../Types/@types.useContext';
import { CategorySchedule,initialValue } from '../Types/@types.categorySchedule';

export const ContactContext = React.createContext<CategorySchedule>(initialValue);

export function ContactContextProvider({ children }:useContext) {
  const { data, mutate } = useAxios('contact');

  const [id, setId] = React.useState(initialValue.id);
  const [name, setName] = React.useState(initialValue.name)
  const [email, setEmail] = React.useState(initialValue.email)
  const [category, setCategory] = React.useState(initialValue.category)
  const [type, setType] = React.useState(initialValue.type)
  const [phone1, setPhone1] = React.useState<string>(initialValue.phone1)
  const [phone2, setPhone2] = React.useState(initialValue.phone2)
  const [anotations, setAnotations] = React.useState(initialValue.anotations)
  const [openModal, setOpenModal] = React.useState(initialValue.openModal)

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
    setOpenModal(initialValue.openModal)
    setId(initialValue.id)
    setName(initialValue.name)
    setEmail(initialValue.email)
    setCategory(initialValue.category)
    setType(initialValue.type)
    setPhone1(initialValue.phone1)
    setPhone2(initialValue.phone2)
    setAnotations(initialValue.anotations)
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
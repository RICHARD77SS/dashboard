import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import { useContext } from '../Types/@types.useContext';
import ModalCustCenterEdit from '../Components/ModalCustCenterEdit';
import { CustCenterTypes, initialValue } from '../Types/@types.custCenterContext';

export const CustCenterContext = React.createContext<CustCenterTypes>(initialValue);

export function CustCenterContextProvider({ children }:useContext) {
  const { data, mutate } = useAxios('custcenter');

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
    setOpenModal(initialValue.openModal)
    setId(initialValue.id)
    setName(initialValue.name)
    setDescription(initialValue.description)
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    CloseModal()
    const custCenter = {
      name,
      description
    }
    if (id) {
      api.put(`custcenter/${id}`, custCenter)
      window.alert('custcenter Editada')
      const updatedCustCenter = {
        custCenter: data.custCenter?.map((custCenter:{_id:string}) => {
          if (custCenter._id === id) {
            return {
              ...custCenter,
              name,
              description
            };
          }
          return custCenter
        }),
      };
      mutate(updatedCustCenter, false)
    } else {
      api.post('custcenter', custCenter);
      window.alert('custCenter adicionada')
      const updatedCustCenter = {
        custCenter: [...data.custCenter, custCenter]
      }
      mutate(updatedCustCenter, false)
    }
  }
  function handleDelete(id:string) {
    api.delete(`custcenter/${id}`);
    window.alert('custCenter removido')
    const updatedCustCenter = {
      custCenter: data.custCenter?.filter((custCenter: { _id: string }) => custCenter._id !== id)
    };
    mutate(updatedCustCenter, false)
  }

  function handleEdit(custcenterId: string, custcenterName: string, custcenterDescription: string) {
    setName(custcenterName);
    setDescription(custcenterDescription);
    setId(custcenterId);
    setOpenModal(true);
  }
  return <CustCenterContext.Provider value={{
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
    {openModal && <ModalCustCenterEdit />}
  </CustCenterContext.Provider>
}
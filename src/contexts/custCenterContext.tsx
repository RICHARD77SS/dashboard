import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import ModalCustCenterEdit from '../Components/ModalCustCenterEdit';

export const CustCenterContext = React.createContext();

export function CustCenterContextProvider({ children }) {
  const { data, mutate } = useAxios('custcenter');

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
    CloseModal()
    const custCenter = {
      name,
      description
    }
    if (id) {
      api.put(`custcenter/${id}`, custCenter)
      window.alert('custcenter Editada')
      const updatedCustCenter = {
        custCenter: data.custCenter?.map((custCenter) => {
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
  function handleDelete(id) {
    api.delete(`custcenter/${id}`);
    window.alert('custCenter removido')
    const updatedCustCenter = {
      custCenter: data.custCenter?.filter((custCenter) => custCenter._id !== id)
    };
    mutate(updatedCustCenter, false)
  }

  function handleEdit(custcenterId, custcenterName, custcenterDescription) {
    setName(custcenterName);
    setDescription(custcenterDescription);
    setId(custcenterId);
    setOpenModal(true);
  }
  return <CustCenterContext.Provider value={{
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
    {openModal && <ModalCustCenterEdit />}
  </CustCenterContext.Provider>
}
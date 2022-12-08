import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';

import ModalEditTransfer from '../Components/ModalEditTransfer';

export const TransferContext = React.createContext();

export function TransferContextProvider({ children }) {
  const { data, mutate } = useAxios('transfer');

  const [id, setId] = React.useState();
  const [date, setDate] = React.useState()
  const [value, setValue] = React.useState()
  const [origin, setOrigin] = React.useState()
  const [destination, setDestination] = React.useState()
  const [anotation, setAnotation] = React.useState()

  const [openModal, setOpenModal] = React.useState(false)

  function dateHandler(event) {
    setDate(event.target.value);
  }
  function destinationHandler(event) {
    setDestination(event.target.value);
  }
  function valueHandler(event) {
    setValue(event.target.value);
  }
  function originHandler(event) {
    setOrigin(event.target.value);
  }
  function anotationHandler(event) {
    setAnotation(event.target.value);
  }

  function CloseModal() {
    setOpenModal(false)
    setDate('')
    setDestination()
    setValue('')
    setOrigin('')
    setAnotation('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const transfer = {
      date,
      value,
      origin,
      destination,
      anotation
    }
    if (id) {
      api.put(`transfer/${id}`, transfer)
      window.alert('transfer Editada')
      const updatedTransfer = {
        transfer: data.transfer?.map((transfer) => {
          if (transfer._id === id) {
            return {
              ...transfer,
              date,
              value,
              origin,
              destination,
              anotation
            };
          }
          return transfer
        }),
      };
      mutate(updatedTransfer, false)
    } else {
      api.post('transfer', transfer);
      window.alert('transfer adicionada')
      const updatedTransfer = {
        transfer: [...data.transfer, transfer]
      }
      mutate(updatedTransfer, false)
    }
  }
  function handleDelete(id) {
    api.delete(`transfer/${id}`);
    window.alert('transfer removido')
    const updatedTransfer = {
      transfer: data.transfer?.filter((transfer) => transfer._id !== id)
    };
    mutate(updatedTransfer, false)
  }

  function handleEdit(transferId,
    transferdate,
    transfervalue,
    transferorigin,
    transferdestination,
    transferanotation,) {
    setDate(transferdate)
    setValue(transfervalue)
    setOrigin(transferorigin)
    setDestination(transferdestination)
    setAnotation(transferanotation)
    setId(transferId);
    setOpenModal(true);
  }
  return <TransferContext.Provider value={{
    date,
    value,
    origin,
    destination,
    anotation,
    dateHandler,
    valueHandler,
    originHandler,
    destinationHandler,
    anotationHandler,
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
    {openModal && <ModalEditTransfer />}
  </TransferContext.Provider>
}
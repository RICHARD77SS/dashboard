import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import ModalAccountEdit from '../Components/ModalAccountEdit';

export const AccountContext = React.createContext();

export function AccountContextProvider({ children }) {
  const { data, mutate } = useAxios('account');

  const [id, setId] = React.useState();
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')

  const [openModal, setOpenModal] = React.useState(false)

  function nameHandler(event) {
    setName(event.target.value);
  }
  function descriptionHandler(event) {
    setDescription(event.target.value);
  }

  function CloseModal() {
    setOpenModal(false)
    setName('')
    setDescription('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    CloseModal()
    const account = {
      name,
      description
    }
    if (id) {
      api.put(`account/${id}`, account)
      window.alert('account Editada')
      const updatedAccount = {
        account: data.account?.map((account) => {
          if (account._id === id) {
            return {
              ...account,
              name,
              description
            };
          }
          return account
        }),
      };
      mutate(updatedAccount, false)
    } else {
      api.post('account', account);
      window.alert('account adicionada')
      const updatedAccount = {
        account: [...data.account, account]
      }
      mutate(updatedAccount, false)
    }
  }
  function handleDelete(id) {
    api.delete(`account/${id}`);
    window.alert('account removido')
    const updatedAccount = {
      account: data.account?.filter((account) => account._id !== id)
    };
    mutate(updatedAccount, false)
  }

  function handleEdit(accountId, accountName, accountDescription) {
    setName(accountName);
    setDescription(accountDescription);
    setId(accountId);
    setOpenModal(true);
  }
  return <AccountContext.Provider value={{
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
    {openModal && <ModalAccountEdit />}
  </AccountContext.Provider>
}
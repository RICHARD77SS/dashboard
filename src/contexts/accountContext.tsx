import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import ModalAccountEdit from '../Components/ModalAccountEdit';
import { useContext } from '../Types/@type.useContext';
import { AccountTypes,initialValue } from '../Types/@types.accountContext';

export const AccountContext = React.createContext<AccountTypes>(initialValue);

export function AccountContextProvider({ children }:useContext) {
  const { data, mutate } = useAxios('account');

  const [id, setId] = React.useState(initialValue.id);
  const [name, setName] = React.useState(initialValue.name)
  const [description, setDescription] = React.useState(initialValue.description)

  const [openModal, setOpenModal] = React.useState(initialValue.openModal)

  function nameHandler(event:React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function descriptionHandler(event:React.ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.target.value);
  }

  function CloseModal() {
    setOpenModal(initialValue.openModal)
    setId(initialValue.id)
    setName(initialValue.name)
    setDescription(initialValue.description)
  }

  function handleSubmit(event:React.ChangeEvent<HTMLFormElement>) {
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
        account: data.account?.map((account:{_id:string}) => {
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
  function handleDelete(id:string) {
    api.delete(`account/${id}`);
    window.alert('account removido')
    const updatedAccount = {
      account: data.account?.filter((account: { _id: string }) => account._id !== id)
    };
    mutate(updatedAccount, false)
  }

  function handleEdit(accountId: string, accountName: string, accountDescription: string) {
    setName(accountName);
    setDescription(accountDescription);
    setId(accountId);
    setOpenModal(true);
  }
  return <AccountContext.Provider value={{
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
    {openModal && <ModalAccountEdit />}
  </AccountContext.Provider>
}
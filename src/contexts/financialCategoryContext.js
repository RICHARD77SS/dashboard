import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import ModalFinancialCategoryEdit from '../Components/ModalFinancialCategoryEdit';

export const FinancialCategoryContext = React.createContext();

export function AccountContextProvider({ children }) {
  const { data, mutate } = useAxios('financialcategory');

  const [id, setId] = React.useState();
  const [name, setName] = React.useState()
  const [description, setDescription] = React.useState()
  const [type, setType] = React.useState()

  const [openModal, setOpenModal] = React.useState(false)

  function nameHandler(event) {
    setName(event.target.value);
  }
  function descriptionHandler(event) {
    setDescription(event.target.value);
  }
  function typeHandler(event) {
    setType(event.target.value);
  }

  function CloseModal() {
    setOpenModal(false)
    setName('')
    setDescription('')
    setType('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const financialCategory = {
      name,
      description,
      type
    }
    if (id) {
      api.put(`financialcategory/${id}`, financialCategory)
      window.alert('financialcategory Editada')
      const updatedFinancialCategory = {
        financialCategory: data.financialCategory?.map((financialCategory) => {
          if (financialCategory._id === id) {
            return {
              ...financialCategory,
              name,
              description,
              type
            };
          }
          return financialCategory
        }),
      };
      mutate(updatedFinancialCategory, false)
    } else {
      api.post('financialcategory', financialCategory);
      window.alert('financialcategory adicionada')
      const updatedFinancialCategory = {
        financialCategory: [...data.financialCategory, financialCategory]
      }
      mutate(updatedFinancialCategory, false)
    }
  }
  function handleDelete(id) {
    api.delete(`financialcategory/${id}`);
    window.alert('financialcategory removido')
    const updatedFinancialCategory = {
      financialCategory: data.financialCategory?.filter((financialCategory) => financialCategory._id !== id)
    };
    mutate(updatedFinancialCategory, false)
  }

  function handleEdit(financialcategoryId, financialcategoryName, financialcategoryDescription, financialcategoryType) {
    setName(financialcategoryName);
    setDescription(financialcategoryDescription);
    setId(financialcategoryId);
    setType(financialcategoryType);
    setOpenModal(true);
  }
  return <FinancialCategoryContext.Provider value={{
    name,
    description,
    type,
    nameHandler,
    descriptionHandler,
    handleSubmit,
    handleDelete,
    setId,
    typeHandler,
    id,
    openModal,
    handleEdit,
    setOpenModal,
    CloseModal
  }}>
    {children}
    {openModal && <ModalFinancialCategoryEdit />}
  </FinancialCategoryContext.Provider>
}
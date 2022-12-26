import React from 'react'

import api from '../services/api';
import { useAxios } from '../hooks/useAxios';
import GroupCategoryModal from '../Components/GroupCategoryModal';

export const GroupCategoryContext = React.createContext();

export function GroupCategoryContextProvider({ children }) {

  const { data, mutate } = useAxios('groupCategory');
  const [id, setId] = React.useState();
  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();
  const [openModal, setOpenModal] = React.useState(false)

  function nameHandler(event) {
    setName(event.target.value);
  }
  function descriptionHandler(event) {
    setDescription(event.target.value);
  }
  function CloseModal() {
    setId('')
    setOpenModal(false)
    setName('')
    setDescription('')
  }
  function handleSubmit(event) {
    event.preventDefault()
    const groupCategory = {
      name,
      description
    }
    if (id) {
      api.put(`groupCategory/${id}`, groupCategory)
      window.alert('Categoria de grupo Editada com sucesso')
      const updatedGroupCategory = {
        groupCategory: data.groupCategory?.map((groupCategory) => {
          if (groupCategory._id === id) {
            return {
              ...groupCategory,
              name,
              description
            };
          }
          return groupCategory
        })
      }
      mutate(updatedGroupCategory, false)
    } else {
      api.post('groupCategory', groupCategory);
      window.alert('Categoria de grupo adicionada')
      setName('')
      setDescription('')
      const updatedGroupCategory = {
        groupCategory: data.groupCategory?.filter((groupCategory) => groupCategory._id === id)
      };
      mutate(updatedGroupCategory, false)
    }
  }
  function handleDelete(id) {
    api.delete(`groupCategory/${id}`);
    window.alert('Categoria de grupo removida')
    const updatedGroupCategory = {
      groupCategory: data.groupCategory?.filter((groupCategory) => groupCategory._id !== id)
    };
    mutate(updatedGroupCategory, false)
  }
  function handleEdit(groupCategoryId, groupCategoryName, groupCategoryDescription) {
    setId(groupCategoryId);
    setName(groupCategoryName);
    setDescription(groupCategoryDescription);
    setOpenModal(true);
  }

  return <GroupCategoryContext.Provider value={{
    id,
    name,
    description,
    nameHandler,
    descriptionHandler,
    setId,
    openModal,
    CloseModal,
    handleSubmit,
    handleDelete,
    handleEdit
  }}>
    {children}
    {openModal && <GroupCategoryModal />}
  </GroupCategoryContext.Provider>
}
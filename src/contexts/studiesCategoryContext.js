import React from 'react';
import StudiesCategoryEdit from '../Components/StudiesCategoryEdit';
import { useAxios } from '../hooks/useAxios';

import api from '../services/api';

export const StudiesCategoryContext = React.createContext();

export function StudiesCategoryContextProvider({ children }) {

  const { data, mutate } = useAxios('studiescategory')
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
    setOpenModal(false)
    setName('')
    setDescription('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const studiesCategory = {
      name,
      description
    }
    if (id) {
      api.put(`studiescategory/${id}`, studiesCategory)
      window.alert('Categoria de estudo editada com sucesso')
      const updatedStudiesCategory = {
        studiesCategory: data.studiesCategory?.map((studiesCategory) => {
          if (studiesCategory._id === id) {
            return {
              ...studiesCategory,
              name,
              description
            };
          }
          return studiesCategory
        })
      };
      mutate(updatedStudiesCategory, false)
    } else {
      api.post('studiesCategory', studiesCategory)
      window.alert('Categoria de estudo adicionada com sucesso')
      setName('')
      setDescription('')
      const updatedStudiesCategory = {
        studiesCategory: data.studiesCategory?.filter((studiesCategory) => studiesCategory._id === id)
      };
      mutate(updatedStudiesCategory, false)
    }
  }
  function handleDelete(id) {
    api.delete(`studiesCategory/${id}`);
    window.alert('Categoria de grupo removida')
    const updatedStudiesCategory = {
      studiesCategory: data.studiesCategory?.filter((studiesCategory) => studiesCategory._id !== id)
    };
    mutate(updatedStudiesCategory, false)
  }
  function handleEdit(studiesCategoryId, studiesCategoryName, studiesCategoryDescription) {
    setId(studiesCategoryId)
    setName(studiesCategoryName)
    setDescription(studiesCategoryDescription)
    setOpenModal(true);
  }

  return <StudiesCategoryContext.Provider value={{
    id,
    name,
    description,
    nameHandler,
    descriptionHandler,
    handleSubmit,
    handleDelete,
    handleEdit,
    CloseModal
  }}>
    {children}
    {openModal && <StudiesCategoryEdit />}
  </StudiesCategoryContext.Provider>

}
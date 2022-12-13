import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import PlacesPatrimoniesEdit from '../Components/CategoriesPatrimoniesEdit';

export const PlacesPatrimoniesContext = React.createContext();

export function PlacesPatrimoniesContextProvider({ children }) {
  const { data, mutate } = useAxios('placespatrimonies');

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

  function OpenModal() {
    setOpenModal(true)
  }
  function CloseModal() {
    setOpenModal(false)
    setName('')
    setDescription('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    CloseModal()
    const placesPatrimonies = {
      name,
      description
    }
    if (id) {
      api.put(`placespatrimonies/${id}`, placesPatrimonies)
      window.alert('placespatrimonies Editada')
      const updatedPlacesPatrimonies = {
        placesPatrimonies: data.placesPatrimonies?.map((placesPatrimonies) => {
          if (placesPatrimonies._id === id) {
            return {
              ...placesPatrimonies,
              name,
              description
            };
          }
          return placesPatrimonies
        }),
      };
      mutate(updatedPlacesPatrimonies, false)
    } else {
      api.post('placespatrimonies', placesPatrimonies);
      window.alert('placespatrimonies adicionada')
      const updatedPlacesPatrimonies = {
        placesPatrimonies: [...data.placesPatrimonies, placesPatrimonies]
      }
      mutate(updatedPlacesPatrimonies, false)
    }
  }
  function handleDelete(id) {
    api.delete(`placespatrimonies/${id}`);
    window.alert('placesPatrimonies removido')
    const updatedPlacesPatrimonies = {
      placesPatrimonies: data.placesPatrimonies?.filter((placesPatrimonies) => placesPatrimonies._id !== id)
    };
    mutate(updatedPlacesPatrimonies, false)
  }

  function handleEdit(placesId, placesName, placesDescription) {
    setName(placesName);
    setDescription(placesDescription);
    setId(placesId);
    setOpenModal(true);
  }
  return <PlacesPatrimoniesContext.Provider value={{
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
    OpenModal,
    CloseModal
  }}>
    {children}
    {openModal && <PlacesPatrimoniesEdit />}
  </PlacesPatrimoniesContext.Provider>
}
import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import OfficeEdit from '../Components/OfficeEdit';

export const PositionsContext = React.createContext();

export function PositionsContextProvider({ children }) {
  const { data, mutate } = useAxios('positions');

  const [id, setId] = React.useState();
  const [name, setName] = React.useState()
  const [openModal, setOpenModal] = React.useState(false)

  function nameHandler(event) {
    setName(event.target.value)
  }
  function CloseModal() {
    setOpenModal(false)
    setName('')
    setId('')
  }
  function handleSubmit(event) {
    event.preventDefault()
    window.alert('Cargo adicionado')
    const positions = { name }

    if (id) {
      api.put(`position/${id}`, positions)
      const updatedPositions = {
        positions: data.position?.map((positions) => {
          if (positions._id === id) {
            return {
              ...positions,
              name
            };
          }
          return positions
        }),
      };
      mutate(updatedPositions, false)
    } else {
      api.post('positions', positions);
      const updatedPositions = {
        positions: [...data.positions, positions]
      }
      mutate(updatedPositions, false)
    }
  }
  function handleDelete(id) {
    api.delete(`positions/${id}`);
    window.alert('Cargo removido')
    const updatedPositions = {
      positions: data.positions?.filter((positions)=>positions._id !== id)
    }
    mutate(updatedPositions, false)
  }
  function handleEdit(positionId, positionName) {
    setName(positionName)
    setId(positionId)
    setOpenModal(true)
  }
  return <PositionsContext.Provider value={{
    name,
    nameHandler,
    handleSubmit,
    handleEdit,
    handleDelete,
    CloseModal,
    openModal
  }}>
    {children}
    {openModal && <OfficeEdit />}
  </PositionsContext.Provider>
}
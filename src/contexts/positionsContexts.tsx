import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import OfficeEdit from '../Components/OfficeEdit';
import { useContext } from '../Types/@types.useContext';
import { initialValue, officeType } from '../Types/@types.officeContext';

export const PositionsContext = React.createContext<officeType>(initialValue);

export function PositionsContextProvider({ children }: useContext) {
  const { data, mutate } = useAxios('positions');

  const [id, setId] = React.useState(initialValue.id);
  const [name, setName] = React.useState(initialValue.name)
  const [openModal, setOpenModal] = React.useState(initialValue.openModal)

  function nameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }
  function CloseModal() {
    setOpenModal(initialValue.openModal)
    setName(initialValue.name)
    setId(initialValue.id)
  }
  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    window.alert('Cargo adicionado')
    const positions = { name }

    if (id) {
      api.put(`position/${id}`, positions)
      const updatedPositions = {
        positions: data.position?.map((positions: { _id: string }) => {
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
  function handleDelete(id: string) {
    api.delete(`positions/${id}`);
    window.alert('Cargo removido')
    const updatedPositions = {
      positions: data.positions?.filter((positions: { _id: string }) => positions._id !== id)
    }
    mutate(updatedPositions, false)
  }
  function handleEdit(positionId: string, positionName: string) {
    setName(positionName)
    setId(positionId)
    setOpenModal(true)
  }
  return <PositionsContext.Provider value={{
    id,
    name,
    data,
    setId,
    setName,
    nameHandler,
    handleSubmit,
    handleEdit,
    handleDelete,
    CloseModal,
    openModal,
    setOpenModal,
  }}>
    {children}
    {openModal && <OfficeEdit />}
  </PositionsContext.Provider>
}
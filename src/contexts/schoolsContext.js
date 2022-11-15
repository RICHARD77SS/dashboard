import React from 'react';
import ModalEditSchools from '../Components/ModalEditSchools';
import { useAxios } from '../hooks/useAxios';

import api from '../services/api';
import { NowDate } from '../utils/getDate';

export const SchoolsContext = React.createContext();

export function SchoolsContextProvider({ children }) {
  const { data, mutate } = useAxios('schools');

  const [id, setId] = React.useState();
  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();
  const [managers, setManagers] = React.useState();
  const [date, setDate] = React.useState();
  const [openModal, setOpenModal] = React.useState(false)

  function nameHandler(event) {
    setName(event.target.value);
  }
  function descriptionHandler(event) {
    setDescription(event.target.value);
  }
  function managersHandler(event) {
    let name = event.target.value
    if (managers.indexOf(name) > -1) {
      setManagers(prev => prev.filter(man => man !== name))
    } else {
      setManagers(oldArr => [...oldArr, event.target.value]);
    }
  }
  function OpenModal() {
    setOpenModal(true)
  }
  function CloseModal() {
    setId('')
    setName('')
    setDescription('')
    setManagers([])
    setOpenModal(false)
  }
  function Clear() {
    setId('')
    setName('')
    setDescription('')
    setManagers([])
  }

  function handleSubmit(event) {
    event.preventDefault();
    setDate(NowDate)
    const schools = {
      name,
      description,
      managers,
      date
    }
    if (id) {
      api.put(`schools/${id}`, schools);
      window.alert('Ensino Editado com sucesso');
      const updatedSchools = {
        schools: data.schools?.map((schools) => {
          if (schools._id === id) {
            return {
              ...schools,
              name,
              description,
              managers,
              date
            };
          }
          return schools
        })
      };
      mutate(updatedSchools, false)
    } else {
      api.post('schools', schools);
      window.alert('Ensino adicionado com sucesso');
      Clear()
      const updatedSchools = {
        schools: data.schools?.filter((schools) => schools._id === id)
      };
      mutate(updatedSchools, false)
    }
  }

  function handleDelete(id) {
    api.delete(`schools/${id}`);
    window.alert('Ensino Removido')
    const updatedSchools = {
      schools: data.schools?.filter((schools) => schools._id === id)
    };
    mutate(updatedSchools, false)
  }

  function handleEdit(schoolsid, schoolsname, schoolsdescription, schoolsmanagers) {
    setId(schoolsid)
    setName(schoolsname)
    setDescription(schoolsdescription)
    setManagers(schoolsmanagers)
    setOpenModal(true)
  }
  return <SchoolsContext.Provider value={{
    id,
    name,
    description,
    managers,
    nameHandler,
    descriptionHandler,
    managersHandler,
    handleSubmit,
    handleDelete,
    handleEdit,
    OpenModal,
    CloseModal,
    openModal
  }}>
    {children}
    {openModal && <ModalEditSchools />}
  </SchoolsContext.Provider>
}

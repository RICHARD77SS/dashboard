import React from 'react';
import ModalEditSubjects from '../Components/ModalEditSubjects';
import { useAxios } from '../hooks/useAxios';

import api from '../services/api';

export const SubjectsContext = React.createContext();

export function SubjectsContextProvider({ children }) {
  const { data, mutate } = useAxios('subjects')
  const [id, setId] = React.useState()
  const [name, setName] = React.useState()
  const [teacher, setTeacher] = React.useState()
  const [classIndex, setClassIndex] = React.useState()
  const [openModal, setOpenModal] = React.useState(false)

  function nameHandler(event) {
    setName(event.target.value);
  }
  function teacherHandler(event) {
    setTeacher(event.target.value);
  }
  function classIndexHandler(event) {
    setClassIndex(event.target.value);
  }
  function CloseModal() {
    setOpenModal(false)
    setName('')
    setTeacher('')
    setClassIndex('')
  }
  function Clear() {
    setOpenModal(false)
    setName('')
    setTeacher('')
    setClassIndex('')
    setId('')
  }
  function handleSubmit(event) {
    event.preventDefault()
    const subjects = {
      name,
      teacher,
      classIndex
    }
    if (id) {
      api.put(`subjects/${id}`, subjects)
      window.alert('Disciplina editada')
      const updatedSubjects = {
        subjects: data.subjects?.map((subjects) => {
          if (subjects._id === id) {
            return {
              ...subjects,
              name,
              teacher,
              classIndex
            };
          }
          return subjects;
        })
      };
      mutate(updatedSubjects, false)
    } else {
      api.post('subjects', subjects)
      window.alert('Disciplina adicionada')
      Clear()
      const updatedSubjects = {
        subjects: data.subjects?.filter((subjects) => subjects._id !== id)
      };
      mutate(updatedSubjects, false)
    }
  }
  function handleDelete(id) {
    api.delete(`subjects/${id}`);
    window.alert('Disciplina removida')
    const updatedSubjects = {
      subjects: data.subjects?.filter((subjects) => subjects._id === id)
    };
    mutate(updatedSubjects, false)
  }
  function handleEdit(subjectsId, subjectsName, subjectsTeacher, subjectsClassIndex) {
    setId(subjectsId)
    setName(subjectsName)
    setTeacher(subjectsTeacher)
    setClassIndex(subjectsClassIndex)
  }
  return <SubjectsContext.Provider value={{
    id,
    name,
    teacher,
    classIndex,
    nameHandler,
    teacherHandler,
    classIndexHandler,
    handleSubmit,
    handleEdit,
    handleDelete,
    CloseModal,
    setOpenModal,
    setClassIndex
  }}>
    {children}
    {openModal && <ModalEditSubjects />}
  </SubjectsContext.Provider>

}
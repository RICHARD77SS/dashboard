import React from 'react';

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';

export const StudiesContext = React.createContext();

export function StudiesContextProvider({ children }) {
  let DateNow = new Date().toISOString()
  const { data, mutate } = useAxios('studies');

  const [id, setId] = React.useState();
  const [name, setName] = React.useState()
  const [category, setCategory] = React.useState()
  const [content, setContent] = React.useState()
  const [image, setImage] = React.useState()
  const [file, setFile] = React.useState()
  const [notification, setNotification] = React.useState(false)
  const [date, setDate] = React.useState(DateNow)


  function nameHandler(event) {
    setName(event.target.value);
  }
  function categoryHandler(event) {
    setCategory(event.target.value);
  }
  function contentHandler(event) {
    setContent(event.target.value);
  }
  function imageHandler(event) {
    setImage(event.target.value);
  }
  function fileHandler(event) {
    setFile(event.target.value);
  }
  function notificationHandler() {
    setNotification(notification === false ? true : false);
  }

  function handleSubmit(event) {
    event.preventDefault()
    const studies = {
      name,
      category,
      content,
      image,
      file,
      notification,
      date
    }
    if (id) {
      api.put(`studies/${id}`, studies)
      window.alert('Estudo editado')
      handleClear()
      const updatedStudies = {
        studies: data.studies?.map((studies) => {
          if (studies._id === id) {
            return {
              ...studies,
              name,
              category,
              content,
              image,
              file,
              notification,
              date
            };
          }
          return studies
        })
      };
      mutate(updatedStudies, false)
    } else {
      api.post('studies', studies);
      window.alert('Estudo adicionado')
      handleClear()
      const updatedStudies = {
        category: [...data.studies, studies]
      }
      mutate(updatedStudies, false)
    }
  }
  function handleDelete(id) {
    api.delete(`studies/${id}`);
    window.alert('Estudo deletado')
    const updatedStudies = {
      studies: data.studies?.filter((studies) => studies._id !== id)
    };
    mutate(updatedStudies, false)
  }

  function handleEdit(studiesId, studiesName, studiesCategory, studiesContent, studiesImage, studiesFile, studiesNotification) {
    setId(studiesId)
    setName(studiesName)
    setCategory(studiesCategory)
    setContent(studiesContent)
    setImage(studiesImage)
    setFile(studiesFile)
    setNotification(studiesNotification)
  }
  function handleClear() {
    setId('')
    setName('')
    setCategory('')
    setContent()
    setImage('')
    setFile('')
    setNotification('')
  }
  return <StudiesContext.Provider value={{
    name,
    category,
    content,
    image,
    file,
    notification,
    nameHandler,
    categoryHandler,
    contentHandler,
    imageHandler,
    fileHandler,
    notificationHandler,
    handleSubmit,
    handleEdit,
    handleDelete,
    setContent,
    handleClear,
    id
  }}>
    {children}
  </StudiesContext.Provider>
}
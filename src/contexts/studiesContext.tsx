import React from 'react';

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import { useSortedData } from '../utils/sortingTable';
import { studiesTypes, InitialValue, useContext } from '../Types/@types.studiesContext';

export const StudiesContext = React.createContext<studiesTypes>(InitialValue);

export function StudiesContextProvider({ children }: useContext) {
  const { data, mutate } = useAxios('studies');

  const [id, setId] = React.useState<string>(InitialValue.id);
  const [name, setName] = React.useState<string>(InitialValue.name)
  const [category, setCategory] = React.useState<string>(InitialValue.category)
  const [content, setContent] = React.useState<string>(InitialValue.content)
  const [image, setImage] = React.useState<any>(InitialValue.image)
  const [file, setFile] = React.useState<any>(InitialValue.file)
  const [notification, setNotification] = React.useState<boolean>(InitialValue.notification)
  const [date, setDate] = React.useState<Date>(InitialValue.date)

  const { items, requestSort, sortConfig } = useSortedData(data?.studies ? data?.studies : []);
  function nameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function categoryHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setCategory(event.target.value);
  }
  function contentHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
  }
  const imageHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files![0].size > 15000) {
      window.alert('imagem muito grande, tamanho maximo 15kb')
    } else {
      const file = event.target.files![0];
      const base64 = await convertBase64(file)
      setImage(base64)
    }
  }

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }


  function fileHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFile(event.target.value);
  }
  function notificationHandler() {
    setNotification(notification === false ? true : false);
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
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
        studies: data.studies?.map((studies: any) => {
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
  function handleDelete(id: string) {
    api.delete(`studies/${id}`);
    window.alert('Estudo deletado')
    const updatedStudies = {
      studies: data.studies?.filter((studies: any) => studies._id !== id)
    };
    mutate(updatedStudies, false)
  }

  function handleEdit(studiesId: string, studiesName: string, studiesCategory: string, studiesContent: string, studiesImage: string, studiesFile: string, studiesNotification: boolean) {
    setId(studiesId)
    setName(studiesName)
    setCategory(studiesCategory)
    setContent(studiesContent)
    setImage(studiesImage)
    setFile(studiesFile)
    setNotification(studiesNotification)
  }
  function handleClear() {
    setId(InitialValue.id)
    setName(InitialValue.name)
    setCategory(InitialValue.category)
    setContent(InitialValue.content)
    setImage(InitialValue.image)
    setFile(InitialValue.file)
    setNotification(InitialValue.notification)
  }
  return <StudiesContext.Provider value={{
    id,
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
    requestSort,
    setId,
    setName,
    setCategory,
    setImage,
    setFile,
    setNotification,
    date,
    setDate,
    items,
    sortConfig
  }}>
    {children}
  </StudiesContext.Provider>
}
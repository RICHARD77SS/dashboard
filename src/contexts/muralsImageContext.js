import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import MuralsAddImage from '../Components/MuralsAddImage';

export const MuralsImageContext = React.createContext();

export function MuralsImageContextProvider({ children }) {
  const { data, mutate } = useAxios('muralsimage');

  const [id, setId] = React.useState();
  const [image, setImage] = React.useState()
  const [status, setStatus] = React.useState()
  const [unpublish, setUnpublish] = React.useState()
  const [link, setLink] = React.useState()
  const [notification, setNotification] = React.useState(false)

  const [openModal, setOpenModal] = React.useState(false)

  const convertBase64 = (file) => {
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

  const imageHandler = async (event) => {
    if (event.target.files[0].size > 15000) {
      window.alert('imagem muito grande, tamanho maximo 15kb' )
    } else {
      const file = event.target.files[0];
      const base64 = await convertBase64(file)
      setImage(base64)
    }
  }
  function statusHandler(event) {
    setStatus(event.target.value)
  }
  function unpublishHandler(event) {
    setUnpublish(event.target.value)
  }
  function linkHandler(event) {
    setLink(event.target.value)
  }
  function notificationHandler(event) {
    setNotification(event.target.checked)
  }
  function OpenModal() {
    setOpenModal(true)
  }

  function CloseModal() {
    setOpenModal(false)
    setImage('')
    setStatus('')
    setUnpublish('')
    setLink('')
    setNotification('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    CloseModal()
    const muralsImage = {
      image,
      status,
      unpublish,
      link,
      notification,
    }
    if (id) {
      api.put(`muralsimage/${id}`, muralsImage)
      window.alert('muralsImage Editada')
      const updatedMuralsImage = {
        muralsImage: data.muralsImage?.map((muralsImage) => {
          if (muralsImage._id === id) {
            return {
              ...muralsImage,
              image,
              status,
              unpublish,
              link,
              notification,
            };
          }
          return muralsImage
        }),
      };
      mutate(updatedMuralsImage, false)
    } else {
      api.post('muralsimage', muralsImage);
      window.alert('muralsImage adicionada')
      const updatedMuralsImage = {
        muralsImage: [...data.muralsImage, muralsImage]
      }
      mutate(updatedMuralsImage, false)
    }
  }
  function handleDelete(id) {
    api.delete(`muralsimage/${id}`);
    window.alert('muralsImage removido')
    const updatedMuralsImage = {
      muralsImage: data.muralsImage?.filter((muralsImage) => muralsImage._id !== id)
    };
    mutate(updatedMuralsImage, false)
  }

  function handleEdit(muralsImageId,
    muralsImageImage,
    muralsImageStatus,
    muralsImageUnpublish,
    muralsImageLink,
    muralsImageNotification,
  ) {
    setImage(muralsImageImage);
    setStatus(muralsImageStatus)
    setUnpublish(muralsImageUnpublish)
    setLink(muralsImageLink)
    setNotification(muralsImageNotification)
    setId(muralsImageId);
    setOpenModal(true);
  }
  return <MuralsImageContext.Provider value={{
    image,
    status,
    unpublish,
    link,
    notification,
    imageHandler,
    statusHandler,
    unpublishHandler,
    linkHandler,
    notificationHandler,
    handleSubmit,
    handleDelete,
    setId,
    id,
    openModal,
    handleEdit,
    setOpenModal,
    CloseModal,
    OpenModal
  }}>
    {children}
    {openModal && <MuralsAddImage />}
  </MuralsImageContext.Provider>
}
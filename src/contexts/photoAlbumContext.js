import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import ModalPhotoAlbumEdit from '../Components/ModalAddPhoto';

export const PhotoAlbumContext = React.createContext();

export function PhotoAlbumContextProvider({ children }) {
  const { data, mutate } = useAxios('photoalbum');

  const [id, setId] = React.useState();
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [media, setMedia] = React.useState('')

  const [openModal, setOpenModal] = React.useState(false)

  function nameHandler(event) {
    setName(event.target.value);
  }
  function descriptionHandler(event) {
    setDescription(event.target.value);
  }
  function mediaHandler(event) {
    setMedia(event.target.value);
  }

  function CloseModal() {
    setOpenModal(false)
    setId('')
    setName('')
    setDescription('')
    setMedia('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    CloseModal()
    const photoAlbum = {
      name,
      description,
      media
    }
    if (id) {
      api.put(`photoalbum/${id}`, photoAlbum)
      window.alert('photoAlbum Editada')
      const updatedPhotoAlbum = {
        photoAlbum: data.photoAlbum?.map((photoAlbum) => {
          if (photoAlbum._id === id) {
            return {
              ...photoAlbum,
              name,
              description,
              media
            };
          }
          return photoAlbum
        }),
      };
      mutate(updatedPhotoAlbum, false)
    } else {
      api.post('photoalbum', photoAlbum);
      window.alert('photoAlbum adicionada')
      const updatedPhotoAlbum = {
        photoAlbum: [...data.photoAlbum, photoAlbum]
      }
      mutate(updatedPhotoAlbum, false)
    }
  }
  function handleDelete(id) {
    api.delete(`photoalbum/${id}`);
    window.alert('photoAlbum removido')
    const updatedPhotoAlbum = {
      photoAlbum: data.photoAlbum?.filter((photoAlbum) => photoAlbum._id !== id)
    };
    mutate(updatedPhotoAlbum, false)
  }

  function handleEdit(albumId, albumName, albumDescription, albumMedia, albumTitle) {
    setName(albumName);
    setDescription(albumDescription);
    setId(albumId);
    setMedia(albumMedia);
    setOpenModal(true);
  }
  return <PhotoAlbumContext.Provider value={{
    name,
    description,
    media,
    nameHandler,
    descriptionHandler,
    mediaHandler,
    handleSubmit,
    handleDelete,
    setId,
    id,
    openModal,
    handleEdit,
    setOpenModal,
    CloseModal
  }}>
    {children}
    {openModal && <ModalPhotoAlbumEdit />}
  </PhotoAlbumContext.Provider>
}
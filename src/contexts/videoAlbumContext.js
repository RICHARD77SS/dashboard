import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import ModalVideoAlbumEdit from '../Components/ModalAddVideo';

export const VideoAlbumContext = React.createContext();

export function VideoAlbumContextProvider({ children }) {
  const { data, mutate } = useAxios('videoalbum');

  const [id, setId] = React.useState();
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [media, setMedia] = React.useState('')
  const [title, setTitle] = React.useState('')

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
  function titleHandler(event) {
    setTitle(event.target.value);
  }

  function CloseModal() {
    setOpenModal(false)
    setId('')
    setName('')
    setDescription('')
    setMedia('')
    setTitle('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    CloseModal()
    const videoAlbum = {
      name,
      description,
      media,
      title
    }
    if (id) {
      api.put(`videoalbum/${id}`, videoAlbum)
      window.alert('videoAlbum Editada')
      const updatedPhotoAlbum = {
        videoAlbum: data.videoAlbum?.map((videoAlbum) => {
          if (videoAlbum._id === id) {
            return {
              ...videoAlbum,
              name,
              description,
              media,
              title
            };
          }
          return videoAlbum
        }),
      };
      mutate(updatedPhotoAlbum, false)
    } else {
      api.post('videoalbum', videoAlbum);
      window.alert('videoAlbum adicionada')
      const updatedPhotoAlbum = {
        videoAlbum: [...data.videoAlbum, videoAlbum]
      }
      mutate(updatedPhotoAlbum, false)
    }
  }
  function handleDelete(id) {
    api.delete(`videoalbum/${id}`);
    window.alert('videoAlbum removido')
    const updatedPhotoAlbum = {
      videoAlbum: data.videoAlbum?.filter((videoAlbum) => videoAlbum._id !== id)
    };
    mutate(updatedPhotoAlbum, false)
  }

  function handleEdit(albumId, albumName, albumDescription, albumMedia, albumTitle) {
    setName(albumName);
    setDescription(albumDescription);
    setId(albumId);
    setMedia(albumMedia);
    setTitle(albumTitle);
    setOpenModal(true);
  }
  return <VideoAlbumContext.Provider value={{
    name,
    description,
    media,
    title,
    nameHandler,
    descriptionHandler,
    mediaHandler,
    titleHandler,
    handleSubmit,
    handleDelete,
    handleEdit,
    setId,
    id,
    openModal,
    setOpenModal,
    CloseModal
  }}>
    {children}
    {openModal && <ModalVideoAlbumEdit />}
  </VideoAlbumContext.Provider>
}
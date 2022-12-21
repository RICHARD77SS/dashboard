
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";
import Input from "../Input";
import InputBlock from "../InputBlock";
import React from 'react'

import {AsideContent,Aside,Photo,MediaPhoto } from './styles';
import { PhotoAlbumContext } from "../../contexts/photoAlbumContext";
import { useAxios } from "../../hooks/useAxios";

const MediaPhotos = () => {
  const {data} = useAxios('photoalbum')
  const {
    name,
    description,
    media,
    nameHandler,
    descriptionHandler,
    mediaHandler,
    handleSubmit,
    handleDelete,
    handleEdit
  } = React.useContext(PhotoAlbumContext)
  return (
    <Container>
      <h3>Álbuns de fotos</h3>
      <Content>
        <Box>
          <BoxHeader title="Resultados: 0" >
          </BoxHeader>
          <BoxContent>
            <Content>
              {data?.photoAlbum.map((photo: any, index: number) => {
                return (
                  <Photo key={index}>
                    <h3>{photo.name}</h3>
                    <MediaPhoto></MediaPhoto>
                    <Button type='button' onClick={()=>handleDelete(photo._id)}>delete</Button>
                    <Button type='button' onClick={() => handleEdit(photo._id,photo.name,photo.description,photo.media)}>Edit</Button>
                  </Photo>
                )
              })}
            </Content>
          </BoxContent>
        </Box>
        <Aside onSubmit={handleSubmit}>
          <BoxHeader title="+  Criar álbum" />
          <BoxContent>
            <AsideContent>
              <InputBlock>
                <label htmlFor="name">Titulo</label>
                <Input type='text' value={name} onChange={nameHandler} />
              </InputBlock>
              <InputBlock>
                <label htmlFor="description">Descrição</label>
                <textarea title='area' name="" id="" value={description} onChange={descriptionHandler}></textarea>
              </InputBlock>
              <InputBlock>
                <label htmlFor="media">Foto</label>
                <Input type='text' value={media} onChange={mediaHandler} />
              </InputBlock>
              <Button type='submit'>Criar</Button>
            </AsideContent>
          </BoxContent>
        </Aside>
      </Content>
    </Container>
  )
}

export default MediaPhotos;
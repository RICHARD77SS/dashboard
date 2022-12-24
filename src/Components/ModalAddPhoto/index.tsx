
import Button from "../Button";

import Input from "../Input";
import InputBlock from "../InputBlock";
import React from 'react'
import { Container, Content, Box, BoxHeader, BoxContent, BoxFooter, Closed } from './styles'
import { PhotoAlbumContext } from "../../contexts/photoAlbumContext";


const ModalAddPhoto = () => {
  const { name,
    description,
    media,
    nameHandler,
    descriptionHandler,
    mediaHandler,
    handleSubmit,
    CloseModal } = React.useContext(PhotoAlbumContext)
  return (
    <Container >
      <Content>
        <Button onClick={() => CloseModal()}>Close</Button>
        <Box onSubmit={handleSubmit}>
          <h3>Editar Foto</h3>
          <InputBlock>
            <label htmlFor="name">Titulo album</label>
            <Input type='text' value={name} onChange={nameHandler} />
          </InputBlock>
          <InputBlock>
            <label htmlFor="description">Descrição</label>
            <textarea title='area' name="" id="" value={description} onChange={descriptionHandler}></textarea>
          </InputBlock>
          <InputBlock>
            <label htmlFor="name">Foto</label>
            <Input type='text' value={media} onChange={mediaHandler} />
          </InputBlock>
          <Button type='submit'>Criar</Button>
        </Box>
      </Content>
      <Closed onClick={() => CloseModal()}></Closed>
    </Container>
  )
}
export default ModalAddPhoto;
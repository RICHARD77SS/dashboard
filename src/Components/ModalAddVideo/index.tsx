
import { VideoAlbumContext } from "../../contexts/videoAlbumContext";
import Button from "../Button";

import FlexBetween from "../FlexBetween";
import Input from "../Input";
import InputBlock from "../InputBlock";
import React from 'react'
import { Container, Content, Box, BoxHeader, BoxContent, BoxFooter, Closed } from './styles'


const ModalAddVideo = () => {
  const { name,
    description,
    media,
    title,
    nameHandler,
    descriptionHandler,
    mediaHandler,
    titleHandler,
    handleSubmit,

    CloseModal } = React.useContext(VideoAlbumContext)
  return (
    <Container >
      <Content>
        <Button onClick={() => CloseModal()}>Close</Button>
        <Box onSubmit={handleSubmit}>
          <h3>Adicionar vídeo</h3>
          <InputBlock>
            <label htmlFor="name">Titulo album</label>
            <Input type='text' value={name} onChange={nameHandler} />
          </InputBlock>
          <InputBlock>
            <label htmlFor="description">Descrição</label>
            <textarea title='area' name="" id="" value={description} onChange={descriptionHandler}></textarea>
          </InputBlock>
          <InputBlock>
            <label htmlFor="name">Titulo do video</label>
            <Input type='text' value={title} onChange={titleHandler} />
          </InputBlock>
          <InputBlock>
            <label htmlFor="name">Video</label>
            <Input type='text' value={media} onChange={mediaHandler} />
          </InputBlock>
          <Button type='submit'>Criar</Button>
        </Box>
      </Content>
      <Closed onClick={() => CloseModal()}></Closed>
    </Container>
  )
}
export default ModalAddVideo;
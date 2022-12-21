import React from 'react';

import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";
import Flex from '../Flex';
import Input from "../Input";
import InputBlock from "../InputBlock";
import ModalAddVideo from '../ModalAddVideo';

import { AsideContent, Aside, Video, MediaVideo } from './styles';
import { VideoAlbumContext } from '../../contexts/videoAlbumContext';
import { useAxios } from '../../hooks/useAxios';

const MediaVideos = () => {
  const [addVideo, setAddVideo] = React.useState(false)
  const { name,
    description,
    media,
    title,
    nameHandler,
    descriptionHandler,
    mediaHandler,
    titleHandler,
    handleSubmit,
    handleDelete,
    handleEdit, } = React.useContext(VideoAlbumContext)
  const { data } = useAxios('videoalbum')
  return (
    <Container>
      <h3>Álbuns de Videos</h3>
      <Content>
        <Box>
          <BoxHeader title="Resultados: 0" >
            <Flex>

            </Flex>
          </BoxHeader>
          <BoxContent>
            <Content>
              {data?.videoAlbum.map((video: any, index: number) => {
                return (
                  <Video key={index}>
                    <MediaVideo>
                      <h3>{video.name}</h3>
                    </MediaVideo>
                    <Button type='button' onClick={() => handleDelete(video._id)}>delete</Button>
                    <Button type='button' onClick={() => handleEdit(video._id, video.name, video.description, video.media, video.title)}>Edit</Button>
                  </Video>
                )
              })}
            </Content>
          </BoxContent>
        </Box>
        <Aside onSubmit={handleSubmit}>
          <BoxHeader title="+ Criar álbum" />
          <BoxContent>
            <AsideContent>
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
            </AsideContent>
          </BoxContent>
        </Aside>
      </Content>
    </Container>
  )
}

export default MediaVideos;
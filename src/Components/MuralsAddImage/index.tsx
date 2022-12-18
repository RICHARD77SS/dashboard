import React from 'react'
import { MuralsImageContext } from '../../contexts/muralsImageContext';
import Button from "../Button";
import Flex from '../Flex';

import FlexBetween from "../FlexBetween";
import Input from '../Input';
import InputBlock from '../InputBlock';


import { Container, Content, Box, BoxHeader, CutImage, BoxContent, BoxFooter, Closed } from './styles'


const MuralsAddImage = () => {
  const { image,
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
    CloseModal: CloseImageModal } = React.useContext(MuralsImageContext)

  console.log(image)
  return (
    <Container >
      <Content onSubmit={handleSubmit}>
        <Box>
          <BoxHeader>
            <FlexBetween>
              <h3>Adicionar</h3>
              <Button type='button' onClick={() => CloseImageModal()}>Close</Button>

            </FlexBetween>
          </BoxHeader>
          <BoxContent>
            <Button type='button'>
              <Input type='file' name='myimage' onChange={imageHandler} />
              <p>Selecione uma imagem</p></Button>
            {image ?
              <>
                <CutImage>
                  <img alt="not fount" src={image} />
                </CutImage>
                <FlexBetween>
                  <InputBlock>
                    <p>Status</p>
                    <Flex>
                      <Input name='status' id='publi' type='radio' checked={status === 'publicado' ? true : false} value='publicado' onChange={statusHandler} />
                      <label htmlFor="publi">Publicado</label>
                    </Flex>
                    <Flex>
                      <Input name='status' id='despubli' type='radio' checked={status === 'despublicado' ? true : false} value='despublicado' onChange={statusHandler} />
                      <label htmlFor="despubli">Despublicado</label>
                    </Flex>
                  </InputBlock>
                  <InputBlock>
                    <p>Despublicar automaticamente</p>
                    <Flex>
                      <Input name='despublicar' id='never' type='radio' checked={unpublish === 'naoDespublicar' ? true : false} value='naoDespublicar' onChange={unpublishHandler} />
                      <label htmlFor="never">Nunca</label>
                    </Flex>
                    <Flex>
                      <Input name='despublicar' id='postdate' type='radio' checked={unpublish === 'despublicarApos' ? true : false} value='despublicarApos' onChange={unpublishHandler} />
                      <label htmlFor="postdate">Após esta data</label>
                    </Flex>
                  </InputBlock>
                </FlexBetween>
                <InputBlock>
                  <label htmlFor="link">Link externo</label>
                  <Input type='text' value={link} onChange={linkHandler} />
                </InputBlock>
                <Flex>
                  <Input type='checkbox' onChange={notificationHandler} />
                  <label htmlFor="notification">Enviar notificação push</label>
                </Flex>
              </> : null}
          </BoxContent>
          <BoxFooter>
            <Button type='submit'>Salvar</Button>
          </BoxFooter>
        </Box>
      </Content>
      <Closed onClick={() => CloseImageModal()}></Closed>
    </Container>
  )
}
export default MuralsAddImage;
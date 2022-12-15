import Block from "../Block";
import Button from "../Button";
import Flex from "../Flex";
import FlexBetween from "../FlexBetween";
import Input from "../Input";
import InputBlock from "../InputBlock";
import React from 'react'
import { Container, Content, Box, BoxHeader, BoxContent, BoxFlex, BoxBLock, Bg, BoxFooter, Closed } from './styles'
import { MuralsTextContext } from './../../contexts/muralsTextContext';

const MuralsAddText = () => {
  const { name,
    description,
    textColor,
    backColor,
    background,
    status,
    unpublish,
    link,
    notification,
    nameHandler,
    descriptionHandler,
    textColorHandler,
    backColorHandler,
    backgroundHandler,
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
    CloseModal: CloseTextModal } = React.useContext(MuralsTextContext)
  console.log(notification)
  return (
    <Container >
      <Content onSubmit={handleSubmit}>
        <Box>
          <BoxHeader>
            <FlexBetween>
              <h3>Adicionar</h3>
              <Button onClick={() => { CloseTextModal() }}>Close</Button>
            </FlexBetween>
          </BoxHeader>
          <BoxContent>
            <Input placeholder='título' type='text' value={name} onChange={nameHandler} />
            <textarea placeholder='Descrição' title='text' name="" id="" value={description} onChange={descriptionHandler} ></textarea>
            <FlexBetween>
              <Flex>
                <p>Cor do texto</p>
                <Input type='color' value={textColor} onChange={textColorHandler} />
              </Flex>
              <Flex>
                <p>Cor do fundo</p>
                <Input type='color' value={backColor} onChange={backColorHandler} />
              </Flex>
            </FlexBetween>
            <Block>
              <p>Extilo do fundo</p>
              <BoxFlex>
                <BoxBLock>
                  <Bg>Texto</Bg>
                  <Input name='text' type='radio' checked={background === 'liso' ? true : false} value='liso' onChange={backgroundHandler} />
                </BoxBLock>
                <BoxBLock>
                  <Bg>Texto</Bg>
                  <Input name='text' type='radio' checked={background === 'listraHorizontal' ? true : false} value='listraHorizontal' onChange={backgroundHandler} />
                </BoxBLock>
                <BoxBLock>
                  <Bg>Texto</Bg>
                  <Input name='text' type='radio' checked={background === 'listrasVertical' ? true : false} value='listrasVertical' onChange={backgroundHandler} />
                </BoxBLock>
              </BoxFlex>
            </Block>
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
              <Input type='checkbox' checked={notification} onChange={notificationHandler} />
              <label htmlFor="notification">Enviar notificação push</label>
            </Flex>
          </BoxContent>
          <BoxFooter>
            <Button type='submit'>Salvar</Button>
          </BoxFooter>
        </Box>
      </Content>
      <Closed onClick={() => { CloseTextModal() }}></Closed>
    </Container>
  )
}
export default MuralsAddText;
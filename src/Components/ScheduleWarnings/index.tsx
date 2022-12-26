import React from 'react'
import { MuralsImageContext } from '../../contexts/muralsImageContext';
import { MuralsTextContext } from '../../contexts/muralsTextContext';
import { useAxios } from '../../hooks/useAxios';
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from '../Button';
import Container from "../Container";
import Flex from '../Flex';
import { Buttons, Mural, MuralContent, FlexContent } from './styles';

const ScheduleWarnings = () => {
  const { data } = useAxios('muralstext')
  const { data: dataImage } = useAxios('muralsimage')
  const { OpenModal: OpenTextModal, handleDelete, handleEdit } = React.useContext(MuralsTextContext)
  const { OpenModal: OpenImageModal, handleDelete: handleDeleteImage, handleEdit: handleEditImage } = React.useContext(MuralsImageContext)
  return (
    <Container>
      <Box>
        <BoxHeader title={`Resultados: ${data?.muralsText.length + dataImage?.muralsImage.length}`} >
          <Flex>
            <Buttons onClick={() => { OpenImageModal() }}>+ Adicionar imagem</Buttons>
            <Buttons onClick={() => { OpenTextModal() }}>+ Adicionar texto</Buttons>
          </Flex>
        </BoxHeader>
        <BoxContent>
          <FlexContent>

            {data?.muralsText.map((text: any, index: number) => {
              return (
                <Mural key={index}>
                  <MuralContent backColor={text.backColor} textColor={text.textColor}>
                    <h3>{text.name}</h3>
                    <h3>{text.description}</h3>
                  </MuralContent>
                  <Flex>
                    <Button type='button' onClick={() => {
                      handleEdit(
                        text._id,
                        text.name,
                        text.description,
                        text.textColor,
                        text.backColor,
                        text.background,
                        text.status,
                        text.unpublish,
                        text.link,
                        text.notification)
                    }}>Editar</Button>
                    <Button type='button' onClick={() => { handleDelete(text._id) }}>Remover</Button>
                  </Flex>
                </Mural>
              )
            })}
            {dataImage?.muralsImage.map((image: any, index: number) => {
              return (
                <Mural key={index}>
                  <MuralContent >
                    <img src={image.image} alt="" />
                  </MuralContent>
                  <Flex>
                    <Button type='button' onClick={() => {
                      handleEditImage(
                        image._id,
                        image.image,
                        image.status,
                        image.unpublish,
                        image.link,
                        image.notification)
                    }}>Editar</Button>
                    <Button type='button' onClick={() => { handleDeleteImage(image._id) }}>Remover</Button>
                  </Flex>
                </Mural>
              )
            })}
          </FlexContent>
        </BoxContent>
      </Box>

    </Container>
  )
}

export default ScheduleWarnings;
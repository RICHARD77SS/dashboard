import React from 'react'
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from '../Button';
import Container from "../Container";
import Flex from '../Flex';
import MuralsAddImage from '../MuralsAddImage';
import MuralsAddText from '../MuralsAddText';
import { Buttons } from './styles';
const ScheduleWarnings = () => {
  const [addText, setAddText] = React.useState(false)
  const [addImage, setAddImage] = React.useState(false)
  return (
    <Container>
      <Box>
        <BoxHeader title='Resultados: 0' />
        <BoxContent>
          <Flex>
            <Buttons onClick={()=>{setAddImage(true)}}>+ Adicionar imagem</Buttons>
            <Buttons onClick={() => { setAddText(true) }}>+ Adicionar texto</Buttons>
          </Flex>
        </BoxContent>
      </Box>
      {addText ?
        <>
          <MuralsAddText onClick={() => { setAddText(false) }}>
            <Button onClick={() => { setAddText(false) }}>Close</Button>
          </MuralsAddText>
        </> : null}
      {addImage ? 
        <>
          <MuralsAddImage onClick={() => { setAddImage(false) }}>
            <Button onClick={()=>{setAddImage(false)}}>Close</Button>
          </MuralsAddImage>
        </>: null}
    </Container>
  )
}

export default ScheduleWarnings;
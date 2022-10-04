import React from 'react'
import Button from "../Button";
import Flex from '../Flex';

import FlexBetween from "../FlexBetween";
import Input from '../Input';
import InputBlock from '../InputBlock';


import { Container, Content, Box, BoxHeader, CutImage, BoxContent, BoxFooter, Closed } from './styles'

interface Props {
  children?: React.ReactNode;
  onClick?: any;
}
const MuralsAddImage = ({ children, onClick }: Props) => {
  const [selectedImage, setSelectedImage] = React.useState<File>()
  return (
    <Container >
      <Content>
        <Box>
          <BoxHeader>
            <FlexBetween>
              <h3>Adicionar</h3>
              {children}
            </FlexBetween>
          </BoxHeader>
          <BoxContent>
            <Button>
              <Input type='file' name='myimage' onChange={(event) => { setSelectedImage(event.target.files![0]); }} />
              <p>Selecione uma imagem</p></Button>
            {selectedImage ?
              <>
                <CutImage>
                  <img alt="not fount" src={URL.createObjectURL(selectedImage)} />
                </CutImage>
                <FlexBetween>
                  <InputBlock>
                    <p>Status</p>
                    <Flex>
                      <Input name='status' id='publi' type='radio' />
                      <label htmlFor="publi">Publicado</label>
                    </Flex>
                    <Flex>
                      <Input name='status' id='despubli' type='radio' />
                      <label htmlFor="despubli">Despublicado</label>
                    </Flex>
                  </InputBlock>
                  <InputBlock>
                    <p>Despublicar automaticamente</p>
                    <Flex>
                      <Input name='despublicar' id='never' type='radio' />
                      <label htmlFor="never">Nunca</label>
                    </Flex>
                    <Flex>
                      <Input name='despublicar' id='postdate' type='radio' />
                      <label htmlFor="postdate">Após esta data</label>
                    </Flex>
                  </InputBlock>
                </FlexBetween>
                <InputBlock>
                  <label htmlFor="link">Link externo</label>
                  <Input type='text' />
                </InputBlock>
                <Flex>
                  <Input type='checkbox' />
                  <label htmlFor="notification">Enviar notificação push</label>
                </Flex>
              </> : null}
          </BoxContent>
          <BoxFooter>
            <Button>Salvar</Button>
          </BoxFooter>
        </Box>
      </Content>
      <Closed onClick={onClick}></Closed>
    </Container>
  )
}
export default MuralsAddImage;
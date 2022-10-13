
import Button from "../Button";

import FlexBetween from "../FlexBetween";
import Input from "../Input";
import InputBlock from "../InputBlock";

import { Container, Content, Box, BoxHeader, BoxContent, BoxFooter, Closed } from './styles'

interface Props {
  children?: React.ReactNode;
  onClick?: any;
}
const ModalAddVideo = ({ children, onClick }: Props) => {
  return (
    <Container >
      <Content>
        <Box>
          <BoxHeader>
            <FlexBetween>
              <h3>Adicionar vídeo</h3>
              {children}
            </FlexBetween>
          </BoxHeader>
          <BoxContent>
            <InputBlock>
              <label htmlFor="title">Título</label>
              <Input placeholder='título' type='text' />
            </InputBlock>
            <InputBlock>
              <label htmlFor="link">Link/URL do Vídeo (Youtube)</label>
              <Input id="link" type='text' placeholder='Video link' />
            </InputBlock>
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
export default ModalAddVideo;
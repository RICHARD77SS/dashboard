
import Button from "../Button";

import FlexBetween from "../FlexBetween";


import { Container, Content, Box, BoxHeader, BoxContent, BoxFooter, Closed } from './styles'

interface Props {
  children?: React.ReactNode;
  onClick?: any;
}
const MuralsAddImage = ({ children, onClick }: Props) => {
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
            <Button>Selecione uma imagem</Button>
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
import Button from "../Button";
import Close from "../Close";
import FlexBetween from "../FlexBetween";

import { Container, Content, Box, BoxHeader, BoxContent } from './styles'

interface Props {
  children?: React.ReactNode;
  onClick?: any;
}
const ModalColumn = ({ children, onClick }: Props) => {
  return (
    <Container >
      <Content>
        <Box>
          <BoxHeader>
            <FlexBetween>
              <h3>Selecione para ocultar a coluna</h3>
              <Button onClick={onClick}>Close</Button>
            </FlexBetween>
          </BoxHeader>
          <BoxContent>
            {children}
          </BoxContent>
        </Box>
      </Content>
      <Close onClick={onClick}></Close>
    </Container>
  )
}
export default ModalColumn;
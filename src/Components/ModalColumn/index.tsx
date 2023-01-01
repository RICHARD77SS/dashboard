import Block from "../Block";
import Button from "../Button";
import Flex from "../Flex";
import FlexBetween from "../FlexBetween";
import Input from "../Input";
import InputBlock from "../InputBlock";

import { Container, Content, Box, BoxHeader, BoxContent, BoxFooter, Closed } from './styles'

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
              <h3>Selecione a coluna</h3>
              <Button onClick={onClick}>Close</Button>
            </FlexBetween>
          </BoxHeader>
          <BoxContent>
            {children}
          </BoxContent>
          <BoxFooter>
          </BoxFooter>
        </Box>
      </Content>
      <Closed onClick={onClick}></Closed>
    </Container>
  )
}
export default ModalColumn;
import Button from "../Button";
import FlexBetween from "../FlexBetween";
import Input from "../Input";
import InputBlock from "../InputBlock";
import { Container, Content, Box, BoxHeader, BoxContent, BoxFooter, Closed } from './styles'


interface Props {
  children?: React.ReactNode;
  onClick?: any;
}
const NewImputFieldText = ({ children, onClick }: Props) => {
  
  return (
    <Container>
      <Content>
        <Box>
          <BoxHeader>
            <FlexBetween>
              <h3>Criar</h3>
              {children}
            </FlexBetween>
          </BoxHeader>
          <BoxContent>
            <InputBlock>
              <label htmlFor="name">Nome do campo</label>
              <Input id='name' placeholder='Nome do campo' type='text' />
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

export default NewImputFieldText;
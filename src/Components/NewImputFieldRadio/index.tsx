import Button from "../Button";
import FlexBetween from "../FlexBetween";
import Input from "../Input";
import InputBlock from "../InputBlock";
import { Container, Content, Box, BoxHeader, BoxContent, BoxFooter, Closed } from './styles'


interface Props {
  children?: React.ReactNode;
  onClick?: any;
}
const NewImputFieldRadio = ({ children, onClick }: Props) => {
  
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
            <InputBlock>
              <label htmlFor=" ">Opções</label>
              <Input type='text' placeholder='Escreva aqui (o campo vazio será removido)' />
              <Input type='text' placeholder='Escreva aqui (o campo vazio será removido)' />
              <Input type='text' placeholder='Escreva aqui (o campo vazio será removido)' />
            </InputBlock>
            <Button>+ Adicionar nova opção</Button>
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

export default NewImputFieldRadio;
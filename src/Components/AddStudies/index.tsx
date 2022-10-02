
import Container from '../Container';
import Input from '../Input';
import {Content, Box, Top, Flex,TextArea,Aside,MiniBox } from './styles';
import BoxHeader from '../BoxHeader';
import BoxContent from '../BoxContent';
import Button from '../Button';
import TextEditor from '../TextEditor';


const AddStudies = () => {
  return (
    <Container>
      <h3>Crie um estudo</h3>
      <Content>
        <Box>
          <Top>
            <Flex>
              <Input type='text' placeholder=' Título do estudo' />
              <Input type='text' list='categories' placeholder=' Categoria' />
              <datalist id='categories'>
                <option value='Group name' />
                <option value='Group here' />
              </datalist>
              <Button>Salvar</Button>
              <Button>Cancelar</Button>
            </Flex>
          </Top>
          <TextArea>
            <TextEditor />
          </TextArea>
        </Box>
        <Aside>
          <MiniBox>
            <BoxHeader title='Imagem em destaque'>

            </BoxHeader>
            <BoxContent>
              <Button>Selecione uma imagem</Button>
              <Button>Carregar uma imagem</Button>
            </BoxContent>
          </MiniBox>
          <MiniBox>
            <BoxHeader title='Anexar arquivo'>

            </BoxHeader>
            <BoxContent>
              <Button>Selecione um arquivo</Button>
            </BoxContent>
          </MiniBox>
          <MiniBox>
            <BoxHeader title='Notificações'>

            </BoxHeader>
            <BoxContent>
              <Input type='checkbox' />
              <p>Enviar notificação push</p>
            </BoxContent>
          </MiniBox>
        </Aside>
      </Content>
    </Container>
  )
}

export default AddStudies
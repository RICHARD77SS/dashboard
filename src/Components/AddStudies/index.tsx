
import { AiOutlineAlignLeft, AiOutlineAlignRight, AiOutlineFontColors, AiOutlineItalic, AiOutlineOrderedList, AiOutlineUnderline, AiOutlineUnorderedList } from 'react-icons/ai';
import { FaBold, FaQuoteRight } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { TbTextDirectionRtl } from 'react-icons/tb';
import { ImSubscript2, ImSuperscript2, ImTextColor } from 'react-icons/im';
import { BiLink } from 'react-icons/bi';
import { HiPhotograph } from 'react-icons/hi';
import { ImFileVideo } from 'react-icons/im';
import Container from '../Container';
import Input from '../Input';
import {Content, Box, Top, Flex,TextEdits,TextArea,Aside,MiniBox } from './styles';
import BoxHeader from '../BoxHeader';
import BoxContent from '../BoxContent';
import Button from '../Button';


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
            <TextEdits>
              <FaBold />
              <AiOutlineItalic />
              <AiOutlineUnderline />
              <FaQuoteRight />
              <BsCodeSlash />
              <AiOutlineOrderedList />
              <AiOutlineUnorderedList />
              <ImSubscript2 />
              <ImSuperscript2 />
              <TbTextDirectionRtl />
              <Input placeholder='  size' id='size' type='text' list='sizes' />
              <datalist id='sizes'>
                <option value="Smal" />
                <option value="Normal" />
                <option value="Large" />
                <option value="Huge" />
              </datalist>
              <Input placeholder='  Titulo' id='leader1' type='text' list='heading' />
              <datalist id='heading'>
                <option value="Heading 1" />
                <option value="Heading 2" />
                <option value="Heading 3" />
                <option value="Heading 4" />
                <option value="Heading 5" />
                <option value="Heading 6" />
                <option value="Normal" />
          
              </datalist>
              <AiOutlineFontColors />
              <ImTextColor />
              <Input placeholder='  fonts' id='fonts' type='text' list='sizes' />
              <datalist id='sizes'>
                <option value="Sans Serif" />
                <option value="Serif" />
                <option value="Monospacce" />

              </datalist>
              <AiOutlineAlignLeft />
              <AiOutlineAlignRight />
              <BiLink />
              <HiPhotograph />
              <ImFileVideo />
            </TextEdits>
          </Top>
          <TextArea>
            <textarea title='title' name="" id=""  rows={30} contentEditable='true'>  </textarea>
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
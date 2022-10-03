import React from  'react'
import { AiFillTags, AiOutlineMenu, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";
import Input from "../Input";
import TextEditor from "../TextEditor";

import { Notes, TopNotes, Box, Top, Flex, TextArea, } from './styles';

const ScheduleMyAnnotations = () => {
  const [value, setValue] = React.useState('');

  function getValues() {
    window.alert('Salvo')
    console.log(value)

  }
  return (
    <Container>
      <Content>
        <Notes>
          <TopNotes>
            <Button>
              <AiOutlineMenu />
            </Button>
            <Button>
              <AiOutlinePlus />
            </Button>
            <Button>
              <AiOutlineSearch />
            </Button>
            <Button>
              <AiFillTags />
            </Button>
            <Button>
              <BsTrash />
            </Button>
          </TopNotes>
        </Notes>
        <Box>
          <Top>
            <Flex>
              <Input type='text' placeholder=' Título do estudo' />
              <Input type='text' list='categories' placeholder=' Categoria' />
              <datalist id='categories'>
                <option value='Group name' />
                <option value='Group here' />
              </datalist>
              <Button onClick={()=>{getValues()}}>Salvar</Button>
              <Button>Cancelar</Button>
            </Flex>
          </Top>
          <TextArea>
            <TextEditor value={value} setValue={setValue} />
          </TextArea>
        </Box>
      </Content>
    </Container>
  )
}

export default ScheduleMyAnnotations;
import React from 'react';
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";
import Input from "../Input";
import TextArea from "../TextArea";
import TextEditor from "../TextEditor";
import { Flexs } from "./styles";




const DocumentEditor = () => {
  const [value, setValue] = React.useState('');
  return (
    <Container>
      <Content>
        <Box>
          <BoxHeader title='Editor de documento' />
          <BoxContent>
            <Flexs><Input type='text' /><Button>Salvar</Button><Button>Cancelar</Button></Flexs>
            <TextArea height="600px">
              <TextEditor value={value} setValue={setValue} />
            </TextArea>
          </BoxContent>
        </Box>
      </Content>
    </Container>
  )
}

export default DocumentEditor;
import React from 'react';
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";
import Input from "../Input";
import TextArea from "../TextArea";
import TextEditor from "../TextEditor";
import { Box, Flexs } from "./styles";
import { DocumentsContext } from '../../contexts/documentsContext';
import { Link, useParams } from 'react-router-dom';
import { useAxios } from '../../hooks/useAxios';




const DocumentEditor = () => {
  const { name, nameHandler, description, setDescription, handleSubmit, CloseModal, id: idDoc, setName, setId } = React.useContext(DocumentsContext)
  const { id } = useParams()
  const { data } = useAxios('document')
  React.useEffect(() => {
    if (parseInt(id!) >= 0) {
      setId(data?.documents[`${id}`]._id)
      setName(data?.documents[`${id}`].name)
      setDescription(data?.documents[`${id}`].description)
    }
  }, [data?.documents, id, setDescription, setId, setName])

  return (
    <Container>
      <Content>
        <Box onSubmit={handleSubmit}>
          <BoxHeader title='Editor de documento' />
          <BoxContent>
            <Flexs><Input type='text' value={name} onChange={nameHandler} /><Button type='submit'>Salvar</Button>
              <Link to='/mediasdocuments'><Button type='button' onClick={() => CloseModal()}>Cancelar</Button></Link></Flexs>
            <TextArea height="600px">
              <TextEditor value={description} setValue={setDescription} />
            </TextArea>
          </BoxContent>
        </Box>
      </Content>
    </Container>
  )
}

export default DocumentEditor;
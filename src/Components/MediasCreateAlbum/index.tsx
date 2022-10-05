import React from 'react';
import Box from '../Box';
import BoxContent from '../BoxContent';
import BoxHeader from '../BoxHeader';
import Button from '../Button';
import Container from '../Container';
import Flex from '../Flex';
import Input from '../Input';
import ModalEdit from '../ModalEdit';

import { Submit, Flex1 } from './styles';

const MAX_COUNT = 10;

const MediasCreateAlbum = () => {
  const [edit, setEdit] = React.useState(false)

  const [uploadedFiles, setUploadedFiles] = React.useState<any[]>([])
  const [fileLimit, setFileLimit] = React.useState(false);

  const handleUploadFiles = (files: any) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    files.some((file: any) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          alert(`Você pode adicionar no maximo ${MAX_COUNT} arquivos`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    })
    if (!limitExceeded) setUploadedFiles(uploaded)

  }

  const handleFileEvent = (e: any) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files)
    handleUploadFiles(chosenFiles);
  }
  console.log(uploadedFiles)

  return (
    <Container>
      <br />
      <br />
      <h2>Álbum</h2>
      {edit ?
        <>
          <ModalEdit onClick={() => { setEdit(false) }}>
            <Button onClick={() => { setEdit(false) }}>Close</Button>
          </ModalEdit>
        </> : null}
      <Box>
        <BoxHeader title='Album'>
          <Flex>
            <Button onClick={() => { setEdit(true) }}>Editar</Button>
            <Button>Remover álbum</Button>
          </Flex>
        </BoxHeader>
        <BoxContent>
          <p>Album name</p>
          <Submit>
            <h4>Arraste ou selecione um arquivo</h4>
            <Input id='fileUpload' type='file' multiple
              accept='image/png,image/jpg'
              onChange={handleFileEvent}
              disabled={fileLimit} />
          </Submit>
          <Flex1>
            {uploadedFiles.map(file => (
              <img alt='not fould' src={URL.createObjectURL(file)} />
            ))}
          </Flex1>
        </BoxContent>
      </Box>
    </Container>
  )
}

export default MediasCreateAlbum;
import React from 'react'
import Container from '../Container';
import Input from '../Input';
import { Content, Box, Top, Flex, Aside, MiniBox } from './styles';
import BoxHeader from '../BoxHeader';
import BoxContent from '../BoxContent';
import Button from '../Button';
import TextEditor from '../TextEditor';
import TextArea from '../TextArea';
import { StudiesContext } from '../../contexts/studiesContext';
import { Link } from 'react-router-dom';
import { useAxios } from '../../hooks/useAxios';


const AddStudies = () => {
  const [value, setValue] = React.useState('');
  const {
    name,
    category,
    content,
    image,
    file,
    nameHandler,
    categoryHandler,
    contentHandler,
    imageHandler,
    fileHandler,
    notificationHandler,
    handleSubmit,
    setContent,
    handleClear,
    handleDelete,
    id
  } = React.useContext(StudiesContext)
  const { data } = useAxios('studiescategory')
  return (
    <Container>
      <h3>Crie um estudo</h3>
      <Content onSubmit={handleSubmit}>
        <Box>
          <Top>
            <Flex>
              <Input type='text' placeholder=' Título do estudo' value={name} onChange={nameHandler} required />
              <select placeholder=' Categoria' title='category' id='categories' value={category} onChange={categoryHandler}>
                <option value='' ></option>
                {data?.studiesCategory.map((category: any, index: number) => {
                  return (
                    <option key={index} value={category.name} >{category.name}</option>

                  )
                })}
              </select>
              <Button type='submit'>Salvar</Button>

              <Link to='/studies'><Button type='button' onClick={() => handleClear()}>Cancelar</Button></Link>
              {id ? <Link to='/studies'><Button type='button' onClick={() => handleDelete(id)}>Apagar</Button></Link> : null}
            </Flex>
          </Top>
          <TextArea>
            <TextEditor value={content} setValue={setContent} />
          </TextArea>
        </Box>
        <Aside>
          <MiniBox>
            <BoxHeader title='Imagem em destaque'>

            </BoxHeader>
            <BoxContent>
              <Input type='file' value='' onChange={imageHandler} accept=".jpg, .jpeg, .png" />
              <img src={image} width='100px' height='100px' alt='based'  />
              <Button type='button'>Carregar uma imagem</Button>
            </BoxContent>
          </MiniBox>
          <MiniBox>
            <BoxHeader title='Anexar arquivo'>

            </BoxHeader>
            <BoxContent>
              <Button type='button'>Selecione um arquivo</Button>
            </BoxContent>
          </MiniBox>
          <MiniBox>
            <BoxHeader title='Notificações'>

            </BoxHeader>
            <BoxContent>
              <Input name='notification' type='checkbox' value='val' onChange={notificationHandler} />
              <p>Enviar notificação push</p>
            </BoxContent>
          </MiniBox>
        </Aside>
      </Content>
    </Container>
  )
}

export default AddStudies
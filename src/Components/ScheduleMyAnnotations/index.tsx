import React from 'react'
import { AiFillTags, AiOutlineMenu, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";
import Input from "../Input";
import TextEditor from "../TextEditor";

import { Notes, TopNotes, Box, Top, Flex, TextArea, NotesContent, Anotation, CategoryAdd, CategoryItem } from './styles';
import { AnotationsContext } from '../../contexts/anotationsContext';
import { CategoryAnotationsContext } from '../../contexts/categoryAnotationsContext';
import { useAxios } from '../../hooks/useAxios';

const ScheduleMyAnnotations = () => {

  const [categ, setCateg] = React.useState(false);

  const { data } = useAxios('anotations')
  const { data: dataCategory } = useAxios('categoryanotations')
  const { name,
    description,
    category,
    nameHandler,
    descriptionHandler,
    categoryHandler,
    setDescription,
    handleSubmit,
    handleDelete,
    handleEdit,
    Clear } = React.useContext(AnotationsContext)

  const { name: nameCategory,
    nameHandler: nameCategoryHandler,
    handleSubmit: categorySubmit,
    handleDelete: categoryDelete,
    setId,
    id,
    handleEdit: categoryEdit, } = React.useContext(CategoryAnotationsContext)
  return (
    <Container>
      <Content>
        <Box onSubmit={handleSubmit}>
          <Top>
            <Flex>
              <Input type='text' placeholder=' Título do estudo' value={name} onChange={nameHandler} />
              <select title='categories' value={category} onClick={categoryHandler}>
                <option value='' ></option>
                {dataCategory?.categoryAnotations.map((category: any, index: number) => {
                  return (
                    <option key={index} value={category.name} >{category.name}</option>
                  )
                })}
              </select>
              <Button type='submit'>Salvar</Button>
              <Button type='button' onClick={() => Clear()}>Cancelar</Button>
            </Flex>
          </Top>
          <TextArea>
            <TextEditor value={description} setValue={setDescription} />
          </TextArea>
        </Box>
        <Notes>
          <TopNotes>
            <Button onClick={() => setCateg(false)}>
              <AiOutlineMenu size='20' />
            </Button>
            <Button onClick={() => Clear()}>
              <AiOutlinePlus size='20' />
            </Button>
            <Button>
              <AiOutlineSearch size='20' />
            </Button>
            <Button>
              <AiFillTags size='20' onClick={() => setCateg(true)} />
            </Button>
          </TopNotes>
          <NotesContent>
            {categ === false ?
              <>
                <h3>Anotações</h3>
                {data?.anotations.map((anotations: any, index: number) => {
                  return (
                    <>

                      <Anotation key={index} onClick={() => handleEdit(anotations._id, anotations.name, anotations.description, anotations.category)}>
                        <h3 className={name === anotations.name ? 'green' : 'black'}>{anotations.name}</h3>
                      </Anotation>
                      <Button onClick={() => handleDelete(anotations._id)}>
                        <BsTrash size='20' />
                      </Button>
                    </>
                  )
                })}
              </>
              :
              <>
                <h3>Adicionar categoria</h3>
                <CategoryAdd onSubmit={categorySubmit}>
                  <Input type='text' value={nameCategory} onChange={nameCategoryHandler} />
                  <Button type='submit'>Salvar</Button>
                </CategoryAdd>
                {dataCategory?.categoryAnotations.map((category: any, index: number) => {
                  return (
                    <CategoryItem key={index} onClick={() => categoryEdit(category._id, category.name, category.description)}>
                      <h3>{category.name}</h3>
                      <Button onClick={() => handleDelete(category._id)}>
                        <BsTrash size='20' />
                      </Button>
                    </CategoryItem>
                  )
                })}
              </>
            }
          </NotesContent>
        </Notes>
      </Content>
    </Container>
  )
}

export default ScheduleMyAnnotations;
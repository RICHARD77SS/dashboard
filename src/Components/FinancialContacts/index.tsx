
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";
import Flex from "../Flex";
import Input from "../Input";
import InputBlock from "../InputBlock";
import TabContact from "../TabContact";
import { Aside } from "./styles";
import React from 'react'
import { ContactContext } from "../../contexts/contactContext";
import { useAxios } from "../../hooks/useAxios";
const FinancialContacts = () => {
  const { name,
    email,
    category,
    type,
    phone1,
    phone2,
    anotations,
    nameHandler,
    emailHandler,
    categoryHandler,
    typeHandler,
    phone1Handler,
    phone2Handler,
    anotationsHandler,
    handleSubmit,
  } = React.useContext(ContactContext)
  const { data } = useAxios('contactcategory')
  return (
    <Container>
      <Content>
        <TabContact />
        <Aside onSubmit={handleSubmit}>
          <BoxHeader title="+ Criar Contato" />
          <BoxContent>
            <Flex>
              <InputBlock>
                <label htmlFor="name">Nome</label>
                <Input id='name' type='text' value={name} onChange={nameHandler} />
              </InputBlock>
              <InputBlock>
                <label htmlFor="email">E-mail</label>
                <Input id='email' type='email' value={email} onChange={emailHandler} />
              </InputBlock>
            </Flex>
            <Flex>
              <InputBlock>
                <label htmlFor="category">Categoria</label>
                <select title='cat' id='categories' value={category} onChange={categoryHandler}>

                  <option value=''></option>
                  {data?.contactCategory.map((category: any, index: number) => {
                    return (
                      <option key={index} value={category.name}>{category.name}</option>
                    )
                  })}
                </select>
              </InputBlock>
              <InputBlock>
                <label htmlFor="type">Tipo</label>
                <select title='tipo' id='person' value={type} onChange={typeHandler}>
                  <option value='Pessoa física' >Pessoa fisica</option>
                  <option value='Pessoa juridica' >Pessoa juridica</option>
                </select>
              </InputBlock>
            </Flex>
            <Flex>
              <InputBlock>
                <label htmlFor='tel1'>Telefone 1</label>
                <Input id='tel1' type='tel' value={phone1} onChange={phone1Handler} />
              </InputBlock>
              <InputBlock>
                <label htmlFor="tel2">Telefone 2</label>
                <Input id='tel2' type='tel' value={phone2} onChange={phone2Handler} />
              </InputBlock>
            </Flex>
            <label htmlFor="note">Anotações</label>
            <textarea title='title' name="" id="note" value={anotations} onChange={anotationsHandler} ></textarea>
            <Button type='submit'>Criar</Button>
          </BoxContent>
        </Aside>
      </Content>
    </Container>
  )
}

export default FinancialContacts;
import React from 'react'
import { useAxios } from '../../hooks/useAxios';
import Button from '../Button';
import Input from '../Input';

import { Container, Form, Content, Fieldset, Data, Header, DataContent, Flex, Block, Foto, InputBlock } from './styles';
import { GroupsContext } from '../../contexts/groupsContext';
import { Link } from 'react-router-dom';

const AddGroup = () => {

  const { data: dataPerson } = useAxios('person');
  const { data: dataGroups } = useAxios('groups');
  const { data: groupCategory } = useAxios('groupCategory');
  const {
    name,
    image,
    creationDate,
    weekDay,
    sex,
    time,
    category,
    originGroup,
    lider1,
    lider2,
    lider3,
    lider4,
    address,
    district,
    number,
    country,
    state,
    city,
    anotations,
    nameHandler,
    imageHandler,
    creationDateHandler,
    weekDayHandler,
    sexHandler,
    timeHandler,
    categoryHandler,
    originGroupHandler,
    lider1Handler,
    lider2Handler,
    lider3Handler,
    lider4Handler,
    addressHandler,
    districtHandler,
    numberHandler,
    countryHandler,
    stateHandler,
    cityHandler,
    anotationsHandler,
    handleSubmit
  } = React.useContext(GroupsContext)

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <legend>Adicionar Grupo</legend>
        <Content>
          <Fieldset>
            <Data>
              <Header>
                <h3>Informações</h3>
              </Header>
              <DataContent>
                <Flex>
                  <Block>
                    <label htmlFor="foto">Foto do grupo</label>
                    <Foto>
                      <img src={image} alt="" />
                      <input type='text' placeholder='Adicione um link de imagem' value={image} onChange={imageHandler} />
                    </Foto>
                  </Block>
                  <InputBlock>
                    <Block>
                      <label htmlFor="groupnome">Nome do grupo</label>
                      <Input type='text' value={name} onChange={nameHandler} />
                    </Block>
                  </InputBlock>
                </Flex>
                <br />
                <br />
                <Flex>
                  <Block>
                    <label htmlFor="creationdate">Data de Criação</label>
                    <Input type='date' value={creationDate} onChange={creationDateHandler} />
                  </Block>
                  <Block>
                    <label htmlFor="weekday">Dia da semana</label>
                    <select title='weekday' id='weekday' value={weekDay} onChange={weekDayHandler}>
                      <option value="Domingo">Domingo</option>
                      <option value="Segunda-feira">Segunda-feira</option>
                      <option value="Terça-feira">Terça-feira</option>
                      <option value="Quarta-feira">Quarta-feira</option>
                      <option value="Quinta-feira">Quinta-feira</option>
                      <option value="Sexta-feira">Sexta-feira</option>
                      <option value="Sabado">Sabado</option>
                    </select>
                  </Block>
                </Flex>
                <Flex>
                  <Block>
                    <label htmlFor="perfil">Perfil</label>
                    <select title='perfil' id='perfil' value={sex} onChange={sexHandler}>
                      <option value="Ambos">Ambos</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                    </select>
                  </Block>
                  <Block>
                    <label htmlFor="period">Periodo</label>
                    <select title='period' id='periodo' value={time} onChange={timeHandler}>
                      <option value="Manhã">Manhã</option>
                      <option value="Tarde">Tarde</option>
                      <option value="Noite">Noite</option>
                    </select>
                  </Block>
                </Flex>
                <Flex>
                  <Block>
                    <label htmlFor="category">Categoria</label>
                    <select title='category' value={category} onChange={categoryHandler}>
                      <option value='Familias'>Familias</option>
                      <option value='Casais'>Casais</option>
                      <option value='Adultos'>Adultos</option>
                      <option value='Jovens'>Jovens</option>
                      <option value='Adolescentes'>Adolescentes</option>
                      <option value='Crianças'>Crianças</option>
                      {groupCategory?.groupCategory.map((category: any, index: any) => {
                        return (
                          <option value={category.name}>{category.name}</option>
                        )
                      })}
                    </select>
                  </Block>
                </Flex>
              </DataContent>
            </Data>
            <Data>
              <Header>
                <h3>Liderança</h3>
              </Header>
              <DataContent>
                <Block>
                  <label htmlFor="origin">Grupo de origem</label>
                  <select title='origin group' id='groups' value={originGroup} onChange={originGroupHandler}>
                    <option value=""></option>
                    {dataGroups?.groups.map((groups: any, index: any) => {
                      return (
                        <option value={groups.name}>{groups.name}</option>

                      )
                    })}
                  </select>
                </Block>
                <Block>
                  <label htmlFor="lider1">Lider 1:&nbsp;{lider1?.name}</label>
                  <select title='firstlider' id='firstliders' onChange={lider1Handler} >
                    <option value=''></option>
                    {dataPerson?.person.map((person: any, index: any) => {
                      return (
                        <option key={index} value={index}>{person.name}</option>

                      )
                    })}
                  </select>
                </Block>
                <Block>
                  <label htmlFor="lider2">Lider 2&nbsp;{lider2?.name}</label>
                  <select title='secondLeader' id='secondLeader' onChange={lider2Handler}>
                    <option value=''></option>
                    {dataPerson?.person.map((person: any, index: any) => {
                      return (
                        <option key={index} value={index}>{person.name}</option>

                      )
                    })}
                  </select>
                </Block>
                <Block>
                  <label htmlFor="lider3">Lider 3&nbsp;{lider3?.name}</label>
                  <select title='tirdLeader' id='tirdLeader' onChange={lider3Handler}>
                    <option value=''></option>
                    {dataPerson?.person.map((person: any, index: any) => {
                      return (
                        <option key={index} value={index}>{person.name}</option>

                      )
                    })}
                  </select>
                </Block>
                <Block>
                  <label htmlFor="lider4">Lider 4&nbsp;{lider4?.name}</label>
                  <select title='fourLeader' id='fourLeader' onChange={lider4Handler}>
                    <option value=''></option>
                    {dataPerson?.person.map((person: any, index: any) => {
                      return (
                        <option key={index} value={index}>{person.name}</option>

                      )
                    })}
                  </select>
                </Block>
              </DataContent>
            </Data>
          </Fieldset>
          <Fieldset>
            <Data>
              <Header>
                <h3>Endereço</h3>
              </Header>
              <DataContent>
                <Block>
                  <label htmlFor="address">Endereço</label>
                  <Input id='address' type='text' value={address} onChange={addressHandler} />
                </Block>
                <Block>
                  <label htmlFor="number">Numero</label>
                  <Input id='number' type='text' value={number} onChange={numberHandler} />
                </Block>
                <Flex>
                  <Block>
                    <label htmlFor="district">Bairro</label>
                    <Input id='district' type='text' value={district} onChange={districtHandler} />
                  </Block>
                  <Block>
                    <label htmlFor="cep">CEP</label>
                    <Input id='cep' type='text' />
                  </Block>
                </Flex>
                <Flex>
                  <Block>
                    <label htmlFor="country">País</label>
                    <Input id='country' type='text' value={country} onChange={countryHandler} />
                  </Block>
                  <Block>
                    <label htmlFor="state">Estado</label>
                    <Input id='state' type='text' value={state} onChange={stateHandler} />
                  </Block>
                </Flex>
                <Block>
                  <label htmlFor="city">Cidade</label>
                  <Input id='city' type='text' value={city} onChange={cityHandler} />
                </Block>
              </DataContent>
            </Data>
            <Data>
              <Header>
                <h3>Anotações</h3>
              </Header>
              <DataContent>
                <textarea title='notation' name="" id="" cols={30} rows={10} value={anotations} onChange={anotationsHandler} ></textarea>
              </DataContent>
            </Data>
          </Fieldset>
        </Content>

        <Flex>
          <Button type='submit'>Salvar</Button>
          <Link to='/groups'><Button type='button'>Voltar</Button></Link>
        </Flex>
      </Form>
    </Container>
  )
}

export default AddGroup
import React from 'react'
import Button from '../Button';
import Input from '../Input';

import { Container, Form, Content, Fieldset, Data, Header, DataContent, Flex, Block, Foto, InputBlock, Scroll } from './styles';

import { PersonContext } from '../../contexts/personContext';
import { useAxios } from '../../hooks/useAxios';
const AddPeople = () => {


  const { name,
    nameHandler,
    email,
    emailHandler,
    handleSubmit,
    password,
    birth,
    sex,
    schooling,
    marital,
    document1,
    document2,
    phone1,
    phone2,
    address,
    number,
    district,
    zipcode,
    country,
    state,
    city,
    conversion,
    notes,
    passwordHandler,
    birthHandler,
    sexHandler,
    schoolingHandler,
    maritalHandler,
    document1Handler,
    document2Handler,
    phone1Handler,
    phone2Handler,
    addressHandler,
    numberHandler,
    districtHandler,
    zipcodeHandler,
    countryHandler,
    stateHandler,
    cityHandler,
    groupHandler,
    categoryHandler,
    officeHandler,
    conversionHandler,
    notesHandler,
    baptizedHandler,
    setRegisterDate,
    spouse,
    baptismDate,
    spouseHandler,
    convertedSpouseHandler,
    baptismDateHandler,
    baptized,
    convertedSpouse,
    image,
    imageHandler
  } = React.useContext(PersonContext)

  const { data } = useAxios('person')
  var Lenght = data?.person.length

  function getDate() {
    let DateNow = new Date().toISOString()
    setRegisterDate(DateNow)
  }
  const { data: datafield } = useAxios('extraFields')

  const { data: dataCategory } = useAxios('category')

  const { data: dataPositions } = useAxios('positions')

  const { data: dataGroups } = useAxios('groups')
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <br />
        <br />
        <legend><h2>Adicionar pessoas</h2></legend>
        <h3>Pessoas: ({Lenght})</h3>
        <Content>
          <Fieldset>
            <Data>
              <Header>
                <h3>Dados pessoais</h3>
              </Header>
              <DataContent>
                <Flex>
                  <Block>
                    <label htmlFor="foto">Foto</label>
                    <Foto>
                      <img src={image} alt="" />
                      <Input title='image' type='text' value={image} onChange={imageHandler} />
                    </Foto>
                  </Block>
                  <InputBlock>
                    <Block>
                      <label htmlFor="name">Nome</label>
                      <Input
                        id='name'
                        name='name'
                        type='text'
                        value={name}
                        onChange={nameHandler}
                        required
                      />
                    </Block>
                    <Block>
                      <label htmlFor="password">Senha</label>
                      <Input
                        id='password'
                        name='password'
                        type='text'
                        value={password}
                        onChange={passwordHandler}
                      />
                    </Block>
                  </InputBlock>
                </Flex>
                <Flex>
                  <Block>
                    <label htmlFor="birth">Data de nascimento</label>
                    <Input
                      name='birth'
                      id='birth'
                      value={birth}
                      onChange={birthHandler}
                      type='date'
                      required
                    />
                  </Block>
                  <Block>
                    <label htmlFor="sex">Sexo</label>
                    <select title='sex' id='sexo' value={sex}
                      onChange={sexHandler} required>
                      <option value='Masculino' >Masculino</option>
                      <option value='Feminino' >Feminino</option>
                    </select>
                  </Block>
                </Flex>
                <Block>
                  <Block>
                    <label htmlFor="schooling">Escolaridade</label>
                    <select title='school' id='scool' value={schooling}
                      onChange={schoolingHandler}>
                      <option value='Maternal' >Maternal</option>
                      <option value='Educação infantil'>Educação infantil</option>
                      <option value='Ensino fundamental' >Ensino fundamental</option>
                      <option value='Ensino medio' >Ensino medio</option>
                      <option value='Ensino superior - Tecnólogo' >Ensino superior - Tecnólogo</option>
                      <option value='Ensino superior - Bacharel' >Ensino superior - Bacharel</option>
                      <option value='Ensino superior - Mestrado' >Ensino superior - Mestrado</option>
                      <option value='Ensino superior - Licenciatura' >Ensino superior - Licenciatura</option>
                      <option value='Ensino superior - Doutorado'>Ensino superior - Doutorado</option>
                      <option value='Outros' >Outros</option>
                      <option value='Nenhum' >Nenhum</option>
                    </select>
                  </Block>
                  <Block>
                    <label htmlFor="marital">Estado civil</label>
                    <select title='civilstate' id='civilstate' value={marital}
                      onChange={maritalHandler}>
                      <option value='Solteiro(a)' >Solteiro(a)</option>
                      <option value='Casado(a)' >Casado(a)</option>
                      <option value='Viúvo(a)' >Viúvo(a)</option>
                      <option value='Divorciado(a)' >Divorciado(a)</option>
                      <option value='Outros' >Outros</option>
                    </select>
                    {marital === 'Casado(a)' ?
                      <Flex>
                        <Block>
                          <label htmlFor="conjugue">Nome do Cônjugue</label>
                          <Input type='text' value={spouse} onChange={spouseHandler} />
                        </Block>
                        <Block>
                          <label htmlFor="convertedspouse">Cônjugue convertido</label>
                          <select title='selecte' id='convertedSpouse' value={convertedSpouse} onChange={convertedSpouseHandler}>
                            <option value='Sim' >Sim</option>
                            <option value='Não' >Não</option>
                          </select>
                        </Block>
                      </Flex>
                      : null}
                  </Block>
                </Block>
                <Block>
                  <label htmlFor="document1">Documento 1</label>
                  <Input
                    name='document1'
                    id='document1'
                    value={document1}
                    onChange={document1Handler}
                    type='number'
                  />
                </Block>
                <Block>
                  <label htmlFor="document2">Documento 2</label>
                  <Input
                    name='document2'
                    id='document2'
                    value={document2}
                    onChange={document2Handler}
                    type='text'
                  />
                </Block>
              </DataContent>
            </Data>
            <Data>
              <Header>
                <h3>Outras informações</h3>
              </Header>
              <DataContent>
                <Block>
                  <label htmlFor="group">Grupos</label>
                  <Flex>
                    <Scroll>
                      {dataGroups?.groups.map((groups: any, index: any) => {
                        return (

                          <Flex>
                            <Input key={index} name={groups.name} id={groups.name} type='checkbox' value={groups.name} onChange={groupHandler} />
                            <label htmlFor={groups.name} >{groups.name}</label>
                          </Flex>
                        )
                      })}
                    </Scroll>
                  </Flex>
                </Block>
                <Block>
                  <label htmlFor="category">Categorias</label>
                  <Flex>
                    <Scroll>

                      {dataCategory?.category.map((category: any, index: any) => {
                        return (
                          <Flex>
                            <Input key={index} name={category.name} id={category.name} type='checkbox' value={category.name} onChange={categoryHandler} />
                            <label htmlFor={category.name}>{category.name}</label>
                          </Flex>
                        )
                      })}
                    </Scroll>
                  </Flex>
                </Block>
                <Block>
                  <label htmlFor="office">Cargos</label>
                  <Flex>
                    <Scroll>
                      {dataPositions?.positions.map((positions: any, index: any) => {
                        return (
                          <Flex>
                            <Input key={index} id={positions.name} value={positions.name} onChange={officeHandler} type='checkbox' />
                            <label htmlFor={positions.name}>{positions.name}</label>
                          </Flex>
                        )
                      })}
                    </Scroll>
                  </Flex>
                </Block>
                <Block>
                  <label htmlFor="conversion">Data da conversão</label>
                  <Input
                    name='conversion'
                    id='conversion'
                    value={conversion}
                    onChange={conversionHandler}
                    type='date'
                  />
                </Block>
                <Flex>
                  <Block>
                    <label htmlFor="baptized">Batizado(Sim ou Não)</label>
                    <select title='sele' id='baptis' value={baptized} onChange={baptizedHandler}>
                      <option value='Sim' >Sim</option>
                      <option value='Não' >Não</option>
                    </select>
                  </Block>
                  <Block>
                    {baptized === 'Sim' ?
                      <>
                        <label htmlFor="baptismdate">Data de batismo</label>
                        <Input id='baptismdate' type='date' value={baptismDate} onChange={baptismDateHandler} />
                      </> : null}
                  </Block>
                </Flex>
              </DataContent>
            </Data>
          </Fieldset>
          <Fieldset>
            <Data>
              <Header>
                <h3>Contatos</h3>
              </Header>
              <DataContent>
                <Flex>
                  <Block>
                    <label htmlFor="phone1">Telefone 1</label>
                    <Input
                      name='phone1'
                      id='phone1'
                      value={phone1}
                      onChange={phone1Handler}
                      type='number'
                    />
                  </Block>
                  <Block>
                    <label htmlFor="phone2">Telefone 2</label>
                    <Input
                      name='phone2'
                      id='phone2'
                      value={phone2}
                      onChange={phone2Handler}
                      type='number'
                    />
                  </Block>
                </Flex>
                <Block>
                  <label htmlFor="email">Email</label>
                  <Input
                    id='email'
                    type='email'
                    value={email}
                    onChange={emailHandler}
                  />
                </Block>
              </DataContent>
            </Data>
            <Data>
              <Header>
                <h3>Endereço</h3>
              </Header>
              <DataContent>
                <Block>
                  <label htmlFor="address">Endereço</label>
                  <Input
                    name='address'
                    id='address'
                    value={address}
                    onChange={addressHandler}
                    type='text'
                  />
                </Block>
                <Block>
                  <label htmlFor="number">Numero</label>
                  <Input
                    name='number'
                    id='number'
                    value={number}
                    onChange={numberHandler}
                    type='number'
                  />
                </Block>
                <Flex>
                  <Block>
                    <label htmlFor="district">Bairro</label>
                    <Input
                      name='district'
                      id='district'
                      value={district}
                      onChange={districtHandler}
                      type='text'
                    />
                  </Block>
                  <Block>
                    <label htmlFor="zipcode">CEP</label>
                    <Input
                      name='zipcode'
                      id='zipcode'
                      value={zipcode}
                      onChange={zipcodeHandler}
                      type='number'
                    />
                  </Block>
                </Flex>
                <Flex>
                  <Block>
                    <label htmlFor="country">País</label>
                    <Input
                      name='country'
                      id='country'
                      value={country}
                      onChange={countryHandler}
                      type='text'
                    />
                  </Block>
                  <Block>
                    <label htmlFor="state">Estado</label>
                    <Input
                      name='state'
                      id='state'
                      value={state}
                      onChange={stateHandler}
                      type='text'
                    />
                  </Block>
                </Flex>
                <Block>
                  <label htmlFor="city">Cidade</label>
                  <Input
                    name='city'
                    id='city'
                    value={city}
                    onChange={cityHandler}
                    type='text'
                  />
                </Block>
              </DataContent>
            </Data>
            <Data>
              <Header>
                <h3>Anotações</h3>
              </Header>
              <DataContent>
                <textarea
                  title='notes'
                  name="notes"
                  id="notes"
                  value={notes}
                  onChange={notesHandler}
                  cols={30}
                  rows={10}
                ></textarea>
              </DataContent>
            </Data>
          </Fieldset>
        </Content>
        <Data>
          <Header>
            <h3>Campos adicionais</h3>
          </Header>
          <DataContent>
            {datafield?.extraFields?.map((fields: any, index: any) => {
              if (fields?.inputType === 'checkbox') {
                return (
                  <Data key={index}>
                    <Header title={fields?.inputName}></Header>

                    <DataContent>
                      <Flex>
                        <Input type={fields.inputType} name='' />
                        <label htmlFor="">
                          {fields?.inputOption?.option1}
                        </label>
                      </Flex>
                      <Flex>
                        <Input type={fields.inputType} name='' />
                        <label htmlFor="">
                          {fields?.inputOption?.option2}
                        </label>
                      </Flex>
                      <Flex>
                        <Input type={fields.inputType} name='' />
                        <label htmlFor="">
                          {fields?.inputOption?.option3}
                        </label>
                      </Flex>
                    </DataContent>
                  </Data>)
              }
              if (fields?.inputType === 'radio') {
                return (
                  <Data key={index}>
                    <Header title={fields?.inputName}></Header>

                    <DataContent>
                      <Flex>
                        <Input type={fields.inputType} name='' />
                        <label htmlFor="">
                          {fields?.inputOption?.option1}
                        </label>
                      </Flex>
                      <Flex>
                        <Input type={fields.inputType} name='' />
                        <label htmlFor="">
                          {fields?.inputOption?.option2}
                        </label>
                      </Flex>
                      <Flex>
                        <Input type={fields.inputType} name='' />
                        <label htmlFor="">
                          {fields?.inputOption?.option3}
                        </label>
                      </Flex>
                    </DataContent>
                  </Data>)
              }
              if (fields?.inputType === 'text') {
                return (
                  <Data key={index}>
                    <Header title={fields?.inputName}></Header>
                    <DataContent>
                      <Flex>
                        <Input type={fields.inputType} name='' />
                      </Flex>
                    </DataContent>
                  </Data>)
              }
              if (fields?.inputType === 'textarea') {
                return (
                  <Data key={index}>
                    <Header title={fields?.inputName}></Header>
                    <DataContent>
                      <Flex>
                        <textarea title='textarea'></textarea>
                      </Flex>
                    </DataContent>
                  </Data>)
              }
              return (
                <>
                </>
              )
            })}
          </DataContent>
        </Data>
        <Flex>
          <Input name='accepted' type='checkbox' required />
          <p>Sou consciente das minhas responsabilidades com os dados cadastrados, em conformidade com a LGPD e GDPR. <a href='/'>Políticas de privacidade</a> </p>
        </Flex>
        <Button type='submit' onClick={() => getDate()}>Salvar dados</Button>
      </Form>
    </Container >
  )
}

export default AddPeople

import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Input from "../Input";
import InputBlock from "../InputBlock";
import { Container, Form, Block, Box, BoxContent, ModalContainer, Modal, Imagem } from './styles'
import { PersonContext } from './../../contexts/personContext';
import React from "react";
import { useAxios } from "../../hooks/useAxios";
import Flex from "../Flex";
interface Props {
  name?: string;
  image?: string;
  birth?: string;
  ageGroup?: string;
  sex?: string;
  schooling?: string;
  marital?: string;
  document1?: string;
  document2?: string;
  category?: string;
  office?: string;
  conversion?: string;
  batizm?: string;
  dataCreation?: string;
  phone1?: string;
  phone2?: string;
  email?: string;
  addres?: string;
  district?: string;
  number?: string;
  zipcode?: string;
  city?: string;
  state?: string;
  country?: string;
  password?: string;
  group?: string;
  notes?: string;
  id?: string;
}
const PersonDetailsEdit = (Props: Props) => {
  const {
    name,
    nameHandler,
    email,
    emailHandler,
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
    group,
    category,
    office,
    conversion,
    notes,
    baptized,
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
    image,
    imageHandler,
    setId,
    id,
    handleEdit,
    registerDate,
    registerDateHandler,
    setName,
    setEmail,
    setPassword,
    setBirth,
    setSex,
    setSchooling,
    setMarital,
    setDocument1,
    setDocument2,
    setPhone1,
    setPhone2,
    setAddress,
    setNumber,
    setDistrict,
    setZipcode,
    setCountry,
    setState,
    setCity,
    setRegisterDate,
    setGroup,
    setCategory,
    setOffice,
    setConversion,
    setNotes,
    setBaptized,
    setImage,
    modal, setModal
  } = React.useContext(PersonContext)

  const { data: dataCategory } = useAxios('category')
  const { data: dataGroups } = useAxios('groups')
  const { data: dataPositions } = useAxios('positions')

  let bdate = Props.birth
  let formatBirt = bdate?.split('T')[0]

  let conversionDate = Props.conversion
  let formatConversionDate = conversionDate?.split('T')[0]

  let creationDate = registerDate?.split('T')[0]
  React.useEffect(() => {
    setId(Props.id)
    setName(Props.name)
    setEmail(Props.email)
    setPassword(Props.password)
    setBirth(formatBirt)
    setSex(Props.sex)
    setSchooling(Props.schooling)
    setMarital(Props.marital)
    setDocument1(Props.document1)
    setDocument2(Props.document2)
    setPhone1(Props.phone1)
    setPhone2(Props.phone2)
    setAddress(Props.addres)
    setNumber(Props.number)
    setDistrict(Props.district)
    setZipcode(Props.zipcode)
    setCountry(Props.country)
    setState(Props.state)
    setCity(Props.city)
    setGroup(Props.group)
    setCategory(Props.category)
    setOffice(Props.office)
    setConversion(formatConversionDate)
    setNotes(Props.notes)
    setBaptized(Props.batizm)
    setImage(Props.image)
    setRegisterDate(Props.dataCreation)

  }, [setId, Props.id,
    setName, Props.name,
    setEmail, Props.email,
    setPassword, Props.password,
    setBirth, formatBirt,
    setSex, Props.sex,
    setSchooling, Props.schooling,
    setMarital, Props.marital,
    setDocument1, Props.document1,
    setDocument2, Props.document2,
    setPhone1, Props.phone1,
    setPhone2, Props.phone2,
    setAddress, Props.addres,
    setNumber, Props.number,
    setDistrict, Props.district,
    setZipcode, Props.zipcode,
    setCountry, Props.country,
    setState, Props.state,
    setCity, Props.city,
    setGroup, Props.group,
    setCategory, Props.category,
    setOffice, Props.office,
    setConversion, formatConversionDate,
    setNotes, Props.notes,
    setBaptized, Props.batizm,
    setImage, Props.image,
    setRegisterDate, Props.dataCreation])

  return (
    <Container >

      <Form >
        <Block>
          <Box>
            <BoxHeader title='Dados pessoais'></BoxHeader>
            <BoxContent>
              <InputBlock>
                <Imagem>
                  <img src={image} alt="" />
                </Imagem>
                <Input type='text' placeholder='Nova imagem' value={image} onChange={imageHandler} />
              </InputBlock>
              <InputBlock>
                <p><b>Nome: &nbsp;</b></p>
                <Input title='a' type='text' value={name} onChange={nameHandler} />
              </InputBlock>
              <InputBlock>
                <p><b>Senha: &nbsp;</b></p>
                <Input title='a' type='text' value={password} onChange={passwordHandler} />
              </InputBlock>
              <InputBlock>
                <p><b>Data de nascimento: &nbsp;</b><br /></p>
                <Input type='date' value={birth} onChange={birthHandler} />
              </InputBlock>
              <InputBlock>
                <p><b>Sexo: &nbsp;</b></p>
                <select title='sex' value={sex} onChange={sexHandler} >
                  <option value=''></option>
                  <option value='masculino'>Masculino</option>
                  <option value='feminino'>Feminino</option>
                </select>
              </InputBlock>
              <InputBlock>
                <p><b>Escolaridade: &nbsp;</b></p>
                <select title='school' id='scool' value={schooling} onChange={schoolingHandler}>
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
              </InputBlock>
              <InputBlock>
                <p><b>Estado civil: &nbsp;</b></p>
                <select title='civilstate' value={marital} onChange={maritalHandler} id='civilstate'>
                  <option value='Solteiro(a)' >Solteiro(a)</option>
                  <option value='Casado(a)' >Casado(a)</option>
                  <option value='Viúvo(a)' >Viúvo(a)</option>
                  <option value='Divorciado(a)' >Divorciado(a)</option>
                  <option value='Outros' >Outros</option>
                </select>
              </InputBlock>
              <InputBlock>
                <p><b>Documento 1: &nbsp;</b></p>
                <Input type='text' value={document1} onChange={document1Handler} />
              </InputBlock>
              <InputBlock>
                <p><b>Documento 2: &nbsp;</b></p>
                <Input type='text' value={document2} onChange={document2Handler} />
              </InputBlock>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Outras informações'></BoxHeader>
            <BoxContent>
              <Block>
                <p><b>Grupos: &nbsp;</b></p>
                <p>Selecione para remover</p>
                <Flex>
                  {dataGroups?.groups.map((groups: any, index: any) => {
                    return (
                      <Flex>
                        <Input key={index}
                          type='checkbox'
                          name={groups.name}
                          id={groups.name}
                          value={groups.name}
                          onChange={groupHandler}
                        />
                        <label htmlFor={groups.name} >{groups.name}</label>
                      </Flex>
                    )
                  })}
                </Flex>
              </Block>
              <Block>
                <p><b>Categorias: &nbsp;</b></p>
                <p>Selecione para remover</p>
                <Flex>
                  {dataCategory?.category.map((categories: any, index: any) => {
                    return (
                      <Flex>
                        <Input key={index}
                          name={categories.name}
                          id={categories.name}
                          type='checkbox'
                          value={categories.name}
                          onChange={categoryHandler}

                        />
                        <label className={category?.map((cat: string) => cat === categories.name ? 'green' : 'red')} htmlFor={categories.name}>{categories.name}</label>
                      </Flex>
                    )
                  })}
                </Flex>
              </Block>
              <Block>
                <p><b>Cargos: &nbsp;</b></p>
                <Flex>
                  {dataPositions?.positions.map((positions: any, index: any) => {
                    return (
                      <Flex>
                        <Input key={index}
                          id={positions.name}
                          name={positions.name}
                          value={positions.name}
                          onChange={officeHandler}
                          type='checkbox'
                        />
                        <label htmlFor={positions.name}>{positions.name}</label>
                      </Flex>
                    )
                  })}
                </Flex>
              </Block>
              <InputBlock>
                <p><b>Data de conversão: &nbsp;</b></p>
                <Input type='date' value={conversion} onChange={conversionHandler} />
              </InputBlock>
              <InputBlock>

                <p><b>Batizado: &nbsp;</b></p>
                <select title='baptizm' id='baptism' value={baptized} onChange={baptizedHandler}>
                  <option value='true' >Sim</option>
                  <option value='false' >Não</option>
                </select>
              </InputBlock>
              <InputBlock>

                <p><b>Perfil criado em: &nbsp;</b></p>
                <Input type='date' onChange={registerDateHandler} value={creationDate} />
              </InputBlock>
            </BoxContent>
          </Box>
        </Block>
        <Block>
          <Box>
            <BoxHeader title='Contatos'></BoxHeader>
            <BoxContent>
              <InputBlock>

                <p><b>Telefone 1: &nbsp;</b></p>
                <Input type='text' value={phone1} onChange={phone1Handler} />
              </InputBlock>
              <InputBlock>

                <p><b>Telefone 2: &nbsp;</b></p>
                <Input type='text' value={phone2} onChange={phone2Handler} />
              </InputBlock>
              <InputBlock>

                <p><b>E-mail: &nbsp;</b></p>
                <Input type='email' value={email} onChange={emailHandler} />
              </InputBlock>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Endereço'></BoxHeader>
            <BoxContent>
              <InputBlock>
                <p><b>Endereço: &nbsp;  </b></p>
                <Input type='text' value={address} onChange={addressHandler} />
              </InputBlock>
              <InputBlock>

                <p><b>Bairro: &nbsp; </b></p>
                <Input type='text' value={district} onChange={districtHandler} />
              </InputBlock>
              <InputBlock>
                <p><b>Número: &nbsp; </b></p>
                <Input type='text' value={number} onChange={numberHandler} />
              </InputBlock>
              <InputBlock>
                <p><b>CEP: &nbsp; </b></p>
                <Input type='text' value={zipcode} onChange={zipcodeHandler} />
              </InputBlock>
              <InputBlock>
                <p><b>Cidade: &nbsp; </b></p>
                <Input type='text' value={city} onChange={cityHandler} />
              </InputBlock>
              <InputBlock>
                <p><b>Estado: &nbsp; </b></p>
                <Input type='text' value={state} onChange={stateHandler} />
              </InputBlock>
              <InputBlock>
                <p><b>País: &nbsp; </b></p>
                <Input type='text' value={country} onChange={countryHandler} />
              </InputBlock>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Anotações'></BoxHeader>
            <BoxContent>
              <p><b> Anotações</b></p>
              <textarea title='text' name="" id="" value={notes} onChange={notesHandler} ></textarea>
            </BoxContent>
          </Box>
        </Block>
        {modal ?
          <ModalContainer>
            <Modal>
              <h2>Deseja salvar as alterações?</h2>
              <Button type='button' onClick={() => { handleEdit(id) }}>Salvar</Button>
              <Button type='button' onClick={() => { setModal(false) }} >Cancelar</Button>
            </Modal>
          </ModalContainer>
          : null}
      </Form>
      <Button type='submit' onClick={() => { setModal(true) }}>Salvar</Button>
    </Container>
  )
}

export default PersonDetailsEdit;
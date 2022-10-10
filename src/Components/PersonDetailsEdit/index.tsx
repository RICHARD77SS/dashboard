
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Input from "../Input";
import InputBlock from "../InputBlock";
import { Container, Form, Block, Box,BoxContent, ModalContainer, Modal } from './styles'
import { PersonContext } from './../../contexts/personContext';
import React from "react";

interface Props {
  name?: string;
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
    setId,
    id,
    handleEdit,
    handleDelete
  } = React.useContext(PersonContext)
  const [modal, setModal] = React.useState(false);

  setId(Props.id)
  return (
    <Container >
      <Form >
        <Block>
          <Box>
            <BoxHeader title='Dados pessoais'></BoxHeader>
            <BoxContent>
              <InputBlock>
                <p><b>Nome: &nbsp;</b>{Props.name}</p>
                <p><b>Novo Nome: &nbsp;</b>{name}</p>
                <Input title='a' type='text' value={name} onChange={nameHandler} />
              </InputBlock>
              <InputBlock>
                <p><b>Senha: &nbsp;</b>{Props.password}</p>
                <p><b>Nova Senha: &nbsp;</b>{password}</p>
                <Input title='a' type='text' value={password} onChange={passwordHandler} />
              </InputBlock>
              <InputBlock>

                <p><b>Data de nascimento: &nbsp;</b>{Props.birth}</p>
                <p><b>Nova Data de nascimento: &nbsp;</b>{birth}</p>
                <Input type='date' value={birth} onChange={birthHandler} />
              </InputBlock>
              <InputBlock>

                <p><b>Sexo: &nbsp;</b>{Props.sex}</p>
                <p><b>Novo Sexo: &nbsp;</b>{sex}</p>
                <Input type='text' value={sex} onChange={sexHandler} />
              </InputBlock>
              <InputBlock>

                <p><b>Escolaridade: &nbsp;</b>{Props.schooling}</p>
                <p><b>Nova Escolaridade: &nbsp;</b>{schooling}</p>
                <Input type='text' value={schooling} onChange={schoolingHandler} list='scool' />
                <datalist id='scool'>
                  <option value='Maternal' />
                  <option value='Educação infantil' />
                  <option value='Ensino fundamental' />
                  <option value='Ensino medio' />
                  <option value='Ensino superior - Tecnólogo' />
                  <option value='Ensino superior - Bacharel' />
                  <option value='Ensino superior - Mestrado' />
                  <option value='Ensino superior - Licenciatura' />
                  <option value='Ensino superior - Doutorado' />
                  <option value='Outros' />
                  <option value='Nenhum' />
                </datalist>
              </InputBlock>
              <InputBlock>

                <p><b>Estado civil: &nbsp;</b>{Props.marital}</p>
                <p><b>Novo Estado civil: &nbsp;</b>{marital}</p>
                <Input type='text' value={marital} onChange={maritalHandler} list='civilstate'/>
                <datalist id='civilstate'>
                      <option value='Solteiro(a)' />
                      <option value='Casado(a)' />
                      <option value='Viúvo(a)' />
                      <option value='Divorciado(a)' />
                      <option value='Outros' />
                    </datalist>
              </InputBlock>
              <InputBlock>

                <p><b>Documento 1: &nbsp;</b>{Props.document1}</p>
                <p><b>Novo Documento 1: &nbsp;</b>{document1}</p>
                <Input type='text' value={document1} onChange={document1Handler} />
              </InputBlock>
              <InputBlock>

                <p><b>Documento 2: &nbsp;</b>{Props.document2}</p>
                <p><b>Novo Documento 2: &nbsp;</b>{document2}</p>
                <Input type='text' value={document2} onChange={document2Handler} />
              </InputBlock>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Outras informações'></BoxHeader>
            <BoxContent>
              <InputBlock>

                <p><b>Categorias: &nbsp;</b>{Props.category}</p>
                <p><b>Novo Categorias: &nbsp;</b>{category}</p>
                <Input type='text' value={category} onChange={categoryHandler} />
              </InputBlock>
              <InputBlock>

                <p><b>Grupo: &nbsp;</b>{Props.group}</p>
                <p><b>Novo Grupo: &nbsp;</b>{group}</p>
                <Input type='text' value={group} onChange={groupHandler} />
              </InputBlock>
              <InputBlock>
                <p><b>Cargos: &nbsp;</b>{Props.office}</p>
                <p><b>Novo Cargos: &nbsp;</b>{office}</p>

                <Input type='text' value={office} onChange={officeHandler} />
              </InputBlock>
              <InputBlock>
                <p><b>Data de conversão: &nbsp;</b>{Props.conversion}</p>
                <p><b>Nova Data de conversão: &nbsp;</b>{conversion}</p>

                <Input type='text' value={conversion} onChange={conversionHandler} />
              </InputBlock>
              <InputBlock>

                <p><b>Batizado: &nbsp;</b>{Props.batizm}</p>
                <p><b>Novo Batizado: &nbsp;</b>{baptized}</p>
                <Input type='text' value={baptized} onChange={baptizedHandler} />
              </InputBlock>
              <InputBlock>

                <p><b>Perfil criado em: &nbsp;</b>{Props.dataCreation}</p>
                <p><b>Perfil criado em: &nbsp;</b>{Props.dataCreation}</p>
                <Input type='text' value={Props.dataCreation} onChange={() => { }} />
              </InputBlock>
            </BoxContent>
          </Box>
        </Block>
        <Block>
          <Box>
            <BoxHeader title='Contatos'></BoxHeader>
            <BoxContent>
              <InputBlock>

                <p><b>Telefone 1: &nbsp;</b>{Props.phone1} </p>
                <p><b>Novo Telefone 1: &nbsp;</b>{phone1} </p>
                <Input type='text' value={phone1} onChange={phone1Handler} />
              </InputBlock>
              <InputBlock>

                <p><b>Telefone 2: &nbsp;</b>{Props.phone2}</p>
                <p><b>Novo Telefone 2: &nbsp;</b>{phone2}</p>
                <Input type='text' value={phone2} onChange={phone2Handler} />
              </InputBlock>
              <InputBlock>

                <p><b>E-mail: &nbsp;</b>{Props.email}</p>
                <p><b>Novo E-mail: &nbsp;</b>{email}</p>
                <Input type='email' value={email} onChange={emailHandler} />
              </InputBlock>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Endereço'></BoxHeader>
            <BoxContent>
              <InputBlock>
                <p><b>Endereço: &nbsp;  </b>{Props.addres}</p>
                <p><b>Novo Endereço: &nbsp;  </b>{address}</p>

                <Input type='text' value={address} onChange={addressHandler} />
              </InputBlock>
              <InputBlock>

                <p><b>Bairro: &nbsp; </b>{Props.district}</p>
                <p><b>Novo Bairro: &nbsp; </b>{district}</p>
                <Input type='text' value={district} onChange={districtHandler} />
              </InputBlock>
              <InputBlock>
                <p><b>Número: &nbsp; </b>{Props.number}</p>
                <p><b>Novo Número: &nbsp; </b>{number}</p>

                <Input type='text' value={number} onChange={numberHandler} />
              </InputBlock>
              <InputBlock>
                <p><b>CEP: &nbsp; </b>{Props.zipcode}</p>
                <p><b>Novo CEP: &nbsp; </b>{zipcode}</p>

                <Input type='text' value={zipcode} onChange={zipcodeHandler} />
              </InputBlock>
              <InputBlock>

                <p><b>Cidade: &nbsp; </b>{Props.city}</p>
                <p><b>Nova Cidade: &nbsp; </b>{city}</p>
                <Input type='text' value={city} onChange={cityHandler} />
              </InputBlock>
              <InputBlock>
                <p><b>Estado: &nbsp; </b>{Props.state}</p>
                <p><b>Novo Estado: &nbsp; </b>{state}</p>

                <Input type='text' value={state} onChange={stateHandler} />
              </InputBlock>
              <InputBlock>

                <p><b>País: &nbsp; </b>{Props.country}</p>
                <p><b>Novo País: &nbsp; </b>{country}</p>
                <Input type='text' value={country} onChange={countryHandler} />
              </InputBlock>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Anotações'></BoxHeader>
            <BoxContent>
              <p><b>Anotações</b></p>
              <textarea title='text' name="" id="" value={notes} onChange={notesHandler} ></textarea>
            </BoxContent>
          </Box>
        </Block>
        {modal ?
          <ModalContainer>
            <Modal>
              <Button onClick={() => { handleEdit(id) }}>Salvar</Button>
              <Button onClick={() => { setModal(false) }} >Cancelar</Button>
            </Modal>
          </ModalContainer>
          : null}
      </Form>
      <Button type='submit' onClick={() => { setModal(true) }}>Salvar</Button>
    </Container>
  )
}

export default PersonDetailsEdit;
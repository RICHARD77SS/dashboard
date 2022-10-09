import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Input from "../Input";
import InputBlock from "../InputBlock";
import { Container, Form, Block, Box } from './styles'
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
}
const PersonDetailsEdit = (Props: Props) => {
  const {
    name,
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
    baptizedHandler
  } = React.useContext(PersonContext)
  return (
    <Container >
      <Form>
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

                <p><b>Data de nascimento: &nbsp;</b>{Props.birth}</p>
                <p><b>Nova Data de nascimento: &nbsp;</b>{birth}</p>
                <Input type='date' value={birth} onChange={birthHandler} />
              </InputBlock>
              <InputBlock>

                <p><b>Sexo: &nbsp;</b>{Props.sex}</p>
                <Input type='text' value={sex} onChange={() => { }} />
              </InputBlock>
              <InputBlock>

                <p><b>Escolaridade: &nbsp;</b></p>
                <Input type='text' value={Props.schooling} onChange={() => { }} />
              </InputBlock>
              <InputBlock>

                <p><b>Estado civil: &nbsp;</b></p>
                <Input type='text' value={Props.marital} onChange={() => { }} />
              </InputBlock>
              <InputBlock>

                <p><b>Documento 1: &nbsp;</b></p>
                <Input type='text' value={Props.document1} onChange={() => { }} />
              </InputBlock>
              <InputBlock>

                <p><b>Documento 2: &nbsp;</b></p>
                <Input type='text' value={Props.document2} onChange={() => { }} />
              </InputBlock>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Outras informações'></BoxHeader>
            <BoxContent>
              <InputBlock>

                <p><b>Categorias: &nbsp;</b></p>
                <Input type='text' value={Props.category} onChange={() => { }} />
              </InputBlock>
              <InputBlock>
                <p><b>Cargos: &nbsp;</b></p>

                <Input type='text' value={Props.office} onChange={() => { }} />
              </InputBlock>
              <InputBlock>
                <p><b>Data de conversão: &nbsp;</b></p>

                <Input type='text' value={Props.conversion} onChange={() => { }} />
              </InputBlock>
              <InputBlock>

                <p><b>Batizado: &nbsp;</b></p>
                <Input type='text' value={Props.batizm} onChange={() => { }} />
              </InputBlock>
              <InputBlock>

                <p><b>Perfil criado em: &nbsp;</b></p>
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

                <p><b>Telefone 1: &nbsp;</b></p>
                <Input type='text' value={Props.phone1} onChange={() => { }} />
              </InputBlock>
              <InputBlock>

                <p><b>Telefone 2: &nbsp;</b></p>
                <Input type='text' value={Props.phone2} onChange={() => { }} />
              </InputBlock>
              <InputBlock>

                <p><b>E-mail: &nbsp;</b></p>
                <Input type='text' value={Props.email} onChange={() => { }} />
              </InputBlock>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Endereço'></BoxHeader>
            <BoxContent>
              <InputBlock>
                <p><b>Endereço: &nbsp;  </b></p>

                <Input type='text' value={Props.addres} onChange={() => { }} />
              </InputBlock>
              <InputBlock>

                <p><b>Bairro: &nbsp; </b></p>
                <Input type='text' value={Props.district} onChange={() => { }} />
              </InputBlock>
              <InputBlock>
                <p><b>Número: &nbsp; </b></p>

                <Input type='text' value={Props.number} onChange={() => { }} />
              </InputBlock>
              <InputBlock>
                <p><b>CEP: &nbsp; </b></p>

                <Input type='text' value={Props.zipcode} onChange={() => { }} />
              </InputBlock>
              <InputBlock>

                <p><b>Cidade: &nbsp; </b></p>
                <Input type='text' value={Props.city} onChange={() => { }} />
              </InputBlock>
              <InputBlock>
                <p><b>Estado: &nbsp; </b></p>

                <Input type='text' value={Props.state} onChange={() => { }} />
              </InputBlock>
              <InputBlock>

                <p><b>País: &nbsp; </b></p>
                <Input type='text' value={Props.country} onChange={() => { }} />
              </InputBlock>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Anotações'></BoxHeader>
            <BoxContent>
              <p><b>Anotações</b></p>
            </BoxContent>
          </Box>
        </Block>
      </Form>
    </Container>
  )
}

export default PersonDetailsEdit;
import React from 'react'
import Button from '../Button';
import Input from '../Input';

import { Container, Form, Content, Fieldset, Data, Header, DataContent, Flex, Block, Foto, InputBlock, Radio } from './styles';

import { PersonContext } from '../../contexts/personContext';
const AddPeople = () => {

  const inputRef1 = React.useRef<HTMLInputElement | null>(null);
  const inputRef2 = React.useRef<HTMLInputElement | null>(null);
  const inputRef3 = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (!inputRef1.current) return;

    inputRef1.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef2.current?.focus();
      }
    }
  }, [inputRef1, inputRef2])
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
    <Container>
      <Form onSubmit={handleSubmit}>
        <br />
        <br />
        <legend><h2>Adicionar pessoas</h2></legend>
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

                    </Foto>
                  </Block>
                  <InputBlock>
                    <Block>
                      <label htmlFor="name">Nome</label>
                      <input
                        id='name'
                        name='name'
                        type='text'
                        value={name}
                        onChange={nameHandler}
                        ref={inputRef1}
                        onKeyDown={e => {
                          if (e.key === 'Enter') e.preventDefault();
                        }}
                      />
                    </Block>
                    <Block>
                      <label htmlFor="password">Senha</label>
                      <input
                        id='password'
                        name='password'
                        type='text'
                        value={password}
                        onChange={passwordHandler}
                        ref={inputRef2}
                        onKeyDown={e => {
                          if (e.key === 'Enter') e.preventDefault();
                        }}
                      />
                    </Block>
                  </InputBlock>
                </Flex>
                <Flex>
                  <Block>
                    <label htmlFor="birth">Data de nascimento</label>
                    <input
                      name='birth'
                      id='birth'
                      value={birth}
                      onChange={birthHandler}
                      type='date'
                      ref={inputRef3}
                      onKeyDown={e => {
                        if (e.key === 'Enter') e.preventDefault();
                      }}
                    />
                  </Block>
                  <Block>
                    <label htmlFor="sex">Sexo</label>
                    <Input id='masculino' type='text' name='sex' value={sex} onChange={sexHandler} list='sexo' />
                    <datalist id='sexo'>
                      <option value='Masculino' />
                      <option value='feminino' />
                    </datalist>
                  </Block>
                </Flex>
                <Flex>
                  <Block>
                    <label htmlFor="schooling">Escolaridade</label>
                    <Input name='schooling' id='schooling' value={schooling} onChange={schoolingHandler} type='text' list='scool' />
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
                  </Block>
                  <Block>
                    <label htmlFor="marital">Estado civil</label>
                    <Input name='marital' id='marital' value={marital} onChange={maritalHandler} type='text' list='civilstate' />
                    <datalist id='civilstate'>
                      <option value='Solteiro(a)' />
                      <option value='Casado(a)' />
                      <option value='Viúvo(a)' />
                      <option value='Divorciado(a)' />
                      <option value='Outros' />
                    </datalist>
                  </Block>
                </Flex>
                <Block>
                  <label htmlFor="document1">Documento 1</label>
                  <Input name='document1' id='document1' value={document1} onChange={document1Handler} type='number' />
                </Block>
                <Block>
                  <label htmlFor="document2">Documento 2</label>
                  <Input name='document2' id='document2' value={document2} onChange={document2Handler} type='text' />
                </Block>
              </DataContent>
            </Data>
            <Data>
              <Header>
                <h3>Outras informações</h3>
              </Header>
              <DataContent>
                <Block>
                  <label htmlFor="group">Grupo</label>
                  <Input name='group' id='group' value={group} onChange={groupHandler} type='text' />
                </Block>
                <Block>
                  <label htmlFor="category">Categoria</label>
                  <Input name='category' id='category' value={category} onChange={categoryHandler} type='text' />
                </Block>
                <Block>
                  <label htmlFor="office">Cargo</label>
                  <Input name='office' id='office' value={office} onChange={officeHandler} type='text' />
                </Block>
                <Block>
                  <label htmlFor="conversion">Data da conversão</label>
                  <Input name='conversion' id='conversion' value={conversion} onChange={conversionHandler} type='data' />
                </Block>
                <Block>
                  <label htmlFor="baptized">Batizado(Sim ou Não)</label>
                  <Input name='baptized' id='baptized' type='text' onChange={baptizedHandler} list='baptis' />
                  <datalist id='baptis'>
                    <option value='Sim' />
                    <option value='Não' />
                  </datalist>
                </Block>
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
                    <Input name='phone1' id='phone1' value={phone1} onChange={phone1Handler} type='tel' />
                  </Block>
                  <Block>
                    <label htmlFor="phone2">Telefone 2</label>
                    <Input name='phone2' id='phone2' value={phone2} onChange={phone2Handler} type='tel' />
                  </Block>
                </Flex>
                <Block>
                  <label htmlFor="email">Email</label>
                  <Input id='email' type='email' value={email} onChange={emailHandler} />
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
                  <Input name='address' id='address' value={address} onChange={addressHandler} type='text' />
                </Block>
                <Block>
                  <label htmlFor="number">Numero</label>
                  <Input name='number' id='number' value={number} onChange={numberHandler} type='number' />
                </Block>
                <Flex>
                  <Block>
                    <label htmlFor="district">Bairro</label>
                    <Input name='district' id='district' value={district} onChange={districtHandler} type='text' />
                  </Block>
                  <Block>
                    <label htmlFor="zipcode">CEP</label>
                    <Input name='zipcode' id='zipcode' value={zipcode} onChange={zipcodeHandler} type='number' />
                  </Block>
                </Flex>
                <Flex>
                  <Block>
                    <label htmlFor="country">País</label>
                    <Input name='country' id='country' value={country} onChange={countryHandler} type='text' />
                  </Block>
                  <Block>
                    <label htmlFor="state">Estado</label>
                    <Input name='state' id='state' value={state} onChange={stateHandler} type='text' />
                  </Block>
                </Flex>
                <Block>
                  <label htmlFor="city">Cidade</label>
                  <Input name='city' id='city' value={city} onChange={cityHandler} type='text' />
                </Block>
              </DataContent>
            </Data>
            <Data>
              <Header>
                <h3>Anotações</h3>
              </Header>
              <DataContent>
                <textarea title='notes' name="notes" id="notes" value={notes} onChange={notesHandler} cols={30} rows={10}></textarea>
              </DataContent>
            </Data>
          </Fieldset>
        </Content>
        <Data>
          <Header>
            <h3>Campos adicionais</h3>
          </Header>
          <DataContent>

          </DataContent>
        </Data>
        <Block>
          <Input name='accepted' type='checkbox' required />
          <p>Sou consciente das minhas responsabilidades com os dados cadastrados, em conformidade com a LGPD e GDPR. <a href="/">Termos de uso, Políticas de privacidade</a> </p>
        </Block>
        <Button type='submit'>Salvar dados</Button>
      </Form>
    </Container>
  )
}

export default AddPeople
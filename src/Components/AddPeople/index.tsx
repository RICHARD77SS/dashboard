import React from 'react'
import Button from '../Button';
import Input from '../Input';

import { Container, Form, Content, Fieldset, Data, Header, DataContent, Flex, Block, Foto, InputBlock } from './styles';

import { PersonContext } from '../../contexts/personContext';
import { useAxios } from '../../hooks/useAxios';
const AddPeople = () => {

  const inputRef1 = React.useRef<HTMLInputElement | null>(null);
  const inputRef2 = React.useRef<HTMLInputElement | null>(null);
  const inputRef3 = React.useRef<HTMLInputElement | null>(null);
  const inputRef4 = React.useRef<HTMLInputElement | null>(null);
  const inputRef5 = React.useRef<HTMLInputElement | null>(null);
  const inputRef6 = React.useRef<HTMLInputElement | null>(null);
  const inputRef7 = React.useRef<HTMLInputElement | null>(null);
  const inputRef8 = React.useRef<HTMLInputElement | null>(null);
  const inputRef9 = React.useRef<HTMLInputElement | null>(null);
  const inputRef10 = React.useRef<HTMLInputElement | null>(null);
  const inputRef11 = React.useRef<HTMLInputElement | null>(null);
  const inputRef12 = React.useRef<HTMLInputElement | null>(null);
  const inputRef13 = React.useRef<HTMLInputElement | null>(null);
  const inputRef14 = React.useRef<HTMLInputElement | null>(null);
  const inputRef15 = React.useRef<HTMLInputElement | null>(null);
  const inputRef16 = React.useRef<HTMLInputElement | null>(null);
  const inputRef17 = React.useRef<HTMLInputElement | null>(null);
  const inputRef18 = React.useRef<HTMLInputElement | null>(null);
  const inputRef19 = React.useRef<HTMLInputElement | null>(null);
  const inputRef20 = React.useRef<HTMLInputElement | null>(null);
  const inputRef21 = React.useRef<HTMLInputElement | null>(null);
  const inputRef22 = React.useRef<HTMLInputElement | null>(null);
  const inputRef23 = React.useRef<HTMLInputElement | null>(null);


  React.useEffect(() => {
    if (!inputRef1.current) return;

    inputRef1.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef2.current?.focus();
      }
    }
  }, [inputRef1, inputRef2])

  React.useEffect(() => {
    if (!inputRef2.current) return;

    inputRef2.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef3.current?.focus();
      }
    }
  }, [inputRef2, inputRef3])

  React.useEffect(() => {
    if (!inputRef3.current) return;

    inputRef3.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef4.current?.focus();
      }
    }
  }, [inputRef3, inputRef4])

  React.useEffect(() => {
    if (!inputRef4.current) return;

    inputRef4.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef5.current?.focus();
      }
    }
  }, [inputRef4, inputRef5])

  React.useEffect(() => {
    if (!inputRef5.current) return;

    inputRef5.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef6.current?.focus();
      }
    }
  }, [inputRef5, inputRef6])

  React.useEffect(() => {
    if (!inputRef6.current) return;

    inputRef6.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef7.current?.focus();
      }
    }
  }, [inputRef6, inputRef7])

  React.useEffect(() => {
    if (!inputRef7.current) return;

    inputRef7.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef8.current?.focus();
      }
    }
  }, [inputRef7, inputRef8])

  React.useEffect(() => {
    if (!inputRef8.current) return;

    inputRef8.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef9.current?.focus();
      }
    }
  }, [inputRef8, inputRef9])

  React.useEffect(() => {
    if (!inputRef9.current) return;

    inputRef9.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef10.current?.focus();
      }
    }
  }, [inputRef9, inputRef10])

  React.useEffect(() => {
    if (!inputRef10.current) return;

    inputRef10.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef11.current?.focus();
      }
    }
  }, [inputRef10, inputRef11])

  React.useEffect(() => {
    if (!inputRef11.current) return;

    inputRef11.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef12.current?.focus();
      }
    }
  }, [inputRef11, inputRef12])

  React.useEffect(() => {
    if (!inputRef12.current) return;

    inputRef12.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef13.current?.focus();
      }
    }
  }, [inputRef12, inputRef13])

  React.useEffect(() => {
    if (!inputRef13.current) return;

    inputRef13.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef14.current?.focus();
      }
    }
  }, [inputRef13, inputRef14])

  React.useEffect(() => {
    if (!inputRef14.current) return;

    inputRef14.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef15.current?.focus();
      }
    }
  }, [inputRef14, inputRef15])

  React.useEffect(() => {
    if (!inputRef15.current) return;

    inputRef15.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef16.current?.focus();
      }
    }
  }, [inputRef15, inputRef16])

  React.useEffect(() => {
    if (!inputRef16.current) return;

    inputRef16.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef17.current?.focus();
      }
    }
  }, [inputRef16, inputRef17])

  React.useEffect(() => {
    if (!inputRef17.current) return;

    inputRef17.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef18.current?.focus();
      }
    }
  }, [inputRef17, inputRef18])

  React.useEffect(() => {
    if (!inputRef18.current) return;

    inputRef18.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef19.current?.focus();
      }
    }
  }, [inputRef18, inputRef19])

  React.useEffect(() => {
    if (!inputRef19.current) return;

    inputRef19.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef20.current?.focus();
      }
    }
  }, [inputRef19, inputRef20])
  React.useEffect(() => {
    if (!inputRef20.current) return;

    inputRef20.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef21.current?.focus();
      }
    }
  }, [inputRef20, inputRef21])
  React.useEffect(() => {
    if (!inputRef21.current) return;

    inputRef21.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef22.current?.focus();
      }
    }
  }, [inputRef21, inputRef22])
  React.useEffect(() => {
    if (!inputRef22.current) return;

    inputRef22.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef23.current?.focus();
      }
    }
  }, [inputRef22, inputRef23])


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
    convertedSpouse
  } = React.useContext(PersonContext)

  const { data } = useAxios('person')
  var Lenght = data?.person.length

  function getDate() {
    let DateNow = new Date().toLocaleString() + ""
    setRegisterDate(DateNow)
  }
  const { data: datafield } = useAxios('extraFields')

  const { data: dataCategory } = useAxios('category')

  const { data: dataPositions } = useAxios('positions')
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
                        required
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
                    <select title='sex' id='sexo' value={sex}
                      onChange={sexHandler}>
                      <option value='Masculino' />
                      <option value='feminino' />
                    </select>
                  </Block>
                </Flex>
                <Block>
                  <Block>
                    <label htmlFor="schooling">Escolaridade</label>
                    <select title='school' id='scool' value={schooling}
                      onChange={schoolingHandler}>
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
                            <option value='true' >Sim</option>
                            <option value='false' >Não</option>
                          </select>
                        </Block>
                      </Flex>
                    :null}
                  </Block>
                </Block>
                <Block>
                  <label htmlFor="document1">Documento 1</label>
                  <input
                    name='document1'
                    id='document1'
                    value={document1}
                    onChange={document1Handler}
                    type='number'
                    ref={inputRef7}
                    onKeyDown={e => {
                      if (e.key === 'Enter') e.preventDefault();
                    }}
                  />
                </Block>
                <Block>
                  <label htmlFor="document2">Documento 2</label>
                  <input
                    name='document2'
                    id='document2'
                    value={document2}
                    onChange={document2Handler}
                    type='text'
                    ref={inputRef8}
                    onKeyDown={e => {
                      if (e.key === 'Enter') e.preventDefault();
                    }}
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
                  <label htmlFor="group">Grupo</label>
                  <input
                    name='group'
                    id='group'
                    value={group}
                    onChange={groupHandler}
                    type='text'
                    ref={inputRef9}
                    onKeyDown={e => {
                      if (e.key === 'Enter') e.preventDefault();
                    }}
                  />
                </Block>
                <Block>
                  <label htmlFor="category">Categoria</label>
                  <select title='sel' id='categories' value={category}
                    onChange={categoryHandler}>
                    <option value='' ></option>

                    {dataCategory?.category.map((category: any) => {
                      return (
                        <option value={category.categoryName}>{category.categoryName}</option>
                      )
                    })}
                  </select>
                </Block>
                <Block>
                  <label htmlFor="office">Cargo</label>
                  <select title='select' id='positions' onChange={officeHandler} value={office}>
                    <option value='' ></option>
                    {dataPositions?.positions.map((positions: any) => {
                      return (
                        <option value={positions.name} >{positions.name}</option>
                      )
                    })}
                  </select>
                </Block>
                <Block>
                  <label htmlFor="conversion">Data da conversão</label>
                  <input
                    name='conversion'
                    id='conversion'
                    value={conversion}
                    onChange={conversionHandler}
                    type='date'
                    ref={inputRef12}
                    onKeyDown={e => {
                      if (e.key === 'Enter') e.preventDefault();
                    }}
                  />
                </Block>
                <Flex>
                  <Block>
                    <label htmlFor="baptized">Batizado(Sim ou Não)</label>
                    <select title='sele' id='baptis' value={baptized} onChange={baptizedHandler}>
                      <option value='true' >Sim</option>
                      <option value='false' >Não</option>
                    </select>
                  </Block>
                  <Block>
                    {baptized ?
                      <>
                        <label htmlFor="baptismdate">Data de batismo</label>
                        <input id='baptismdate' type='date' value={baptismDate} onChange={baptismDateHandler} />
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
                    <input
                      name='phone1'
                      id='phone1'
                      value={phone1}
                      onChange={phone1Handler}
                      type='number'
                      ref={inputRef14}
                      onKeyDown={e => {
                        if (e.key === 'Enter') e.preventDefault();
                      }}
                    />
                  </Block>
                  <Block>
                    <label htmlFor="phone2">Telefone 2</label>
                    <input
                      name='phone2'
                      id='phone2'
                      value={phone2}
                      onChange={phone2Handler}
                      type='number'
                      ref={inputRef15}
                      onKeyDown={e => {
                        if (e.key === 'Enter') e.preventDefault();
                      }}
                    />
                  </Block>
                </Flex>
                <Block>
                  <label htmlFor="email">Email</label>
                  <input
                    id='email'
                    type='email'
                    value={email}
                    onChange={emailHandler}
                    ref={inputRef16}
                    onKeyDown={e => {
                      if (e.key === 'Enter') e.preventDefault();
                    }}
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
                  <input
                    name='address'
                    id='address'
                    value={address}
                    onChange={addressHandler}
                    type='text'
                    ref={inputRef17}
                    onKeyDown={e => {
                      if (e.key === 'Enter') e.preventDefault();
                    }}
                  />
                </Block>
                <Block>
                  <label htmlFor="number">Numero</label>
                  <input
                    name='number'
                    id='number'
                    value={number}
                    onChange={numberHandler}
                    type='number'
                    ref={inputRef18}
                    onKeyDown={e => {
                      if (e.key === 'Enter') e.preventDefault();
                    }}
                  />
                </Block>
                <Flex>
                  <Block>
                    <label htmlFor="district">Bairro</label>
                    <input
                      name='district'
                      id='district'
                      value={district}
                      onChange={districtHandler}
                      type='text'
                      ref={inputRef19}
                      onKeyDown={e => {
                        if (e.key === 'Enter') e.preventDefault();
                      }}
                    />
                  </Block>
                  <Block>
                    <label htmlFor="zipcode">CEP</label>
                    <input
                      name='zipcode'
                      id='zipcode'
                      value={zipcode}
                      onChange={zipcodeHandler}
                      type='number'
                      ref={inputRef20}
                      onKeyDown={e => {
                        if (e.key === 'Enter') e.preventDefault();
                      }}
                    />
                  </Block>
                </Flex>
                <Flex>
                  <Block>
                    <label htmlFor="country">País</label>
                    <input
                      name='country'
                      id='country'
                      value={country}
                      onChange={countryHandler}
                      type='text'
                      ref={inputRef21}
                      onKeyDown={e => {
                        if (e.key === 'Enter') e.preventDefault();
                      }}
                    />
                  </Block>
                  <Block>
                    <label htmlFor="state">Estado</label>
                    <input
                      name='state'
                      id='state'
                      value={state}
                      onChange={stateHandler}
                      type='text'
                      ref={inputRef22}
                      onKeyDown={e => {
                        if (e.key === 'Enter') e.preventDefault();
                      }}
                    />
                  </Block>
                </Flex>
                <Block>
                  <label htmlFor="city">Cidade</label>
                  <input
                    name='city'
                    id='city'
                    value={city}
                    onChange={cityHandler}
                    type='text'
                    ref={inputRef23}

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
        <Block>
          <Input name='accepted' type='checkbox' required />
          <p>Sou consciente das minhas responsabilidades com os dados cadastrados, em conformidade com a LGPD e GDPR. <a href="/">Termos de uso, Políticas de privacidade</a> </p>
        </Block>
        <Button type='submit' onClick={() => getDate()}>Salvar dados</Button>
      </Form>
    </Container>
  )
}

export default AddPeople
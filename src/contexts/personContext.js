import React from 'react';

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';

export const PersonContext = React.createContext();


export function PersonContextProvider({ children }) {
  const { data, mutate } = useAxios('person')

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [image, setImage] = React.useState('');
  const [password, setPassword] = React.useState('')
  const [birth, setBirth] = React.useState('')
  const [sex, setSex] = React.useState('')
  const [schooling, setSchooling] = React.useState('')
  const [marital, setMarital] = React.useState('')
  const [document1, setDocument1] = React.useState()
  const [document2, setDocument2] = React.useState()
  const [phone1, setPhone1] = React.useState()
  const [phone2, setPhone2] = React.useState()
  const [address, setAddress] = React.useState('')
  const [number, setNumber] = React.useState()
  const [district, setDistrict] = React.useState('')
  const [zipcode, setZipcode] = React.useState('')
  const [country, setCountry] = React.useState('')
  const [state, setState] = React.useState('')
  const [city, setCity] = React.useState('')
  const [group, setGroup] = React.useState('')
  const [category, setCategory] = React.useState('')
  const [office, setOffice] = React.useState('')
  const [conversion, setConversion] = React.useState('')
  const [notes, setNotes] = React.useState('')
  const [baptized, setBaptized] = React.useState(false)
  const [spouse, setSpouse] = React.useState('')
  const [convertedSpouse, setConvertedSpouse] = React.useState(false)
  const [baptismDate, setBaptismDate] = React.useState('')
  const [registerDate, setRegisterDate] = React.useState('')
  const [id, setId] = React.useState('');

  function nameHandler(event) {
    setName(event.target.value);
  }
  function emailHandler(event) {
    setEmail(event.target.value);
  }
  function imageHandler(event) {
    setImage(event.target.value);
  }
  function passwordHandler(event) {
    setPassword(event.target.value);
  }
  function birthHandler(event) {
    setBirth(event.target.value);
  }
  function sexHandler(event) {
    setSex(event.target.value);
  }
  function schoolingHandler(event) {
    setSchooling(event.target.value);
  }
  function maritalHandler(event) {
    setMarital(event.target.value);
  }
  function document1Handler(event) {
    setDocument1(event.target.value);
  }
  function document2Handler(event) {
    setDocument2(event.target.value);
  }
  function phone1Handler(event) {
    setPhone1(event.target.value);
  }
  function phone2Handler(event) {
    setPhone2(event.target.value);
  }
  function addressHandler(event) {
    setAddress(event.target.value);
  }
  function numberHandler(event) {
    setNumber(event.target.value);
  }
  function districtHandler(event) {
    setDistrict(event.target.value);
  }
  function zipcodeHandler(event) {
    setZipcode(event.target.value);
  }
  function countryHandler(event) {
    setCountry(event.target.value);
  }
  function stateHandler(event) {
    setState(event.target.value);
  }
  function cityHandler(event) {
    setCity(event.target.value);
  }
  function groupHandler(event) {
    setGroup(event.target.value);
  }
  function categoryHandler(event) {
    setCategory(event.target.value);
  }
  function officeHandler(event) {
    setOffice(event.target.value);
  }
  function conversionHandler(event) {
    setConversion(event.target.value);
  }
  function notesHandler(event) {
    setNotes(event.target.value);
  }
  function registerDateHandler(event) {
    setRegisterDate(event.target.value);
  }
  function baptizedHandler(event) {
    setBaptized(event.target.value)
  }
  function convertedSpouseHandler(event) {
    setConvertedSpouse(event.target.value);
  }
  function spouseHandler(event) {
    setSpouse(event.target.value);
  }
  function baptismDateHandler(event) {
    setBaptismDate(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const person = {
      name,
      email,
      image,
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
      registerDate,
      spouse,
      convertedSpouse,
      baptismDate
    }
    api.post('person', person);
    window.alert('Usuario Cadastrado')
    const updatedPerson = {
      person: [...data.person, person]
    }
    mutate(updatedPerson, false)
  }
  function handleEdit(id) {
    const person = {
      name,
      email,
      image,
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
      registerDate,
      spouse,
      convertedSpouse,
      baptismDate
    }
    api.put(`person/${id}`, person)
    const updatedPerson = {
      person: data.person?.map((persons) => {
        if (persons._id === id) {
          return {
            ...persons,
            name,
            email,
            image,
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
            registerDate,
            spouse,
            convertedSpouse,
            baptismDate
          };
        }
        return persons;
      }),
    };
    mutate(updatedPerson, false);
  }

  function handleDelete(id) {
    api.delete(`person/${id}`);
    window.alert('Usuario Deletado')
    const updatedPerson = {
      person: data.person?.filter((persons) => persons._id !== id)
    };

    mutate(updatedPerson, false);
  }
  return <PersonContext.Provider value={{
    registerDate,
    setRegisterDate,
    registerDateHandler,
    handleEdit,
    handleDelete,
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
    image,
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
    handleSubmit,
    setId,
    id,
    spouse,
    convertedSpouse,
    baptismDate,
    spouseHandler,
    convertedSpouseHandler,
    baptismDateHandler,
    imageHandler,
    setName
  }}>
    {children}
  </PersonContext.Provider>
}

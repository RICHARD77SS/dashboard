import React from 'react';

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import { dayNow, monthNow, yearNow } from '../utils/getDate';

export const PersonContext = React.createContext();


export function PersonContextProvider({ children }) {
  const { data, mutate } = useAxios('person')
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [image, setImage] = React.useState('');
  const [password, setPassword] = React.useState('')
  const [birth, setBirth] = React.useState('')
  const [sex, setSex] = React.useState('Masculino')
  const [schooling, setSchooling] = React.useState('Maternal')
  const [marital, setMarital] = React.useState('Solteiro(a)')
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
  const [group, setGroup] = React.useState([])
  const [category, setCategory] = React.useState([])
  const [office, setOffice] = React.useState([])
  const [conversion, setConversion] = React.useState('')
  const [notes, setNotes] = React.useState('')
  const [baptized, setBaptized] = React.useState('Não')
  const [spouse, setSpouse] = React.useState('')
  const [convertedSpouse, setConvertedSpouse] = React.useState('Não')
  const [baptismDate, setBaptismDate] = React.useState('')
  const [registerDate, setRegisterDate] = React.useState('')
  const [id, setId] = React.useState('');
  const [index, setIndex] = React.useState(-1);
  const [ageGroup, setAgeGroup] = React.useState('');
  const [age, setAge] = React.useState('');

  const [modal, setModal] = React.useState(false);
  const [modalAddPeople, setModalAddPeople] = React.useState(false)
  const [modalDeletePeople, setModalDeletePeople] = React.useState(false)


  function birthHandler(event) {
    var birthday = new Date(event.target.value)
    var age_now = yearNow - birthday.getFullYear()
    var mont = monthNow - birthday.getMonth()
    if (mont < 0 || (mont === 0 && dayNow < birthday.getDate())) {
      age_now--;
    }
    var age_group = ''
    if (age_now >= 0 && age_now <= 12) {
      age_group = "Criança"
    }
    if (age_now >= 12 && age_now <= 18) {
      age_group = "Adolescente"
    }
    if (age_now >= 18 && age_now <= 28) {
      age_group = "Jovem"
    }
    if (age_now >= 28 && age_now <= 55) {
      age_group = "Adulto"
    }
    if (age_now >= 55 && age_now <= 145) {
      age_group = "Idoso"
    }
    setAgeGroup(age_group);
    setBirth(event.target.value);
    setAge(age_now)
  }
  function indexHandler(event) {
    setIndex(event.target.value);
  }
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
    let name = event.target.value
    if (group.indexOf(name) > -1) {
      setGroup(prev => prev.filter(gr => gr !== name))
    } else {
      setGroup(oldArr => [...oldArr, event.target.value]);
    }
  }

  function categoryHandler(event) {
    let name = event.target.value
    if (category.indexOf(name) > -1) {
      setCategory(prev => prev.filter(cat => cat !== name))
    } else {
      setCategory(oldArr => [...oldArr, event.target.value]);
    }
  }
  function officeHandler(event) {
    let name = event.target.value
    if (office.indexOf(name) > -1) {
      setOffice(prev => prev.filter(of => of !== name))
    } else {
      setOffice(oldArr => [...oldArr, event.target.value]);
    };
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
  function Clear() {
    setName('')
    setEmail('')
    setImage('')
    setPassword('')
    setBirth('')
    setSex('Masculino')
    setSchooling('Maternal')
    setMarital('Solteiro(a)')
    setDocument1('')
    setDocument2('')
    setPhone1('')
    setPhone2('')
    setAddress('')
    setNumber('')
    setDistrict('')
    setZipcode('')
    setCountry('')
    setState('')
    setCity('')
    setGroup([])
    setCategory([])
    setOffice([])
    setConversion('')
    setNotes('')
    setBaptized('Não')
    setRegisterDate('')
    setSpouse('')
    setConvertedSpouse('')
    setBaptismDate('')
    setAgeGroup('')
    setAge('')
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
      baptismDate,
      ageGroup,
      age
    }
    api.post('person', person);
    window.alert('Usuario Cadastrado')
    Clear()
    const updatedPerson = {
      person: [...data.person, person]
    }
    mutate(updatedPerson, false)
  }
  function handleEdit(pid) {
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
      baptismDate,
      ageGroup,
      age
    }
    api.put(`person/${pid}`, person)
    window.alert('Atualizado')
    setModalDeletePeople(false)
    setModalAddPeople(false)
    const updatedPerson = {
      person: data.person?.map((persons) => {
        if (persons._id === pid) {
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
            baptismDate,
            ageGroup,
            age
          };
        }
        setModal(false)
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
    handleEdit,
    handleDelete,
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
    baptismDate,
    ageGroup,
    age,
    registerDateHandler,
    nameHandler,
    emailHandler,
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
    modal,
    spouseHandler,
    convertedSpouseHandler,
    baptismDateHandler,
    imageHandler,
    setName,
    setEmail,
    setPassword,
    setRegisterDate,
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
    setGroup,
    setCategory,
    setOffice,
    setConversion,
    setNotes,
    setBaptized,
    setImage,
    setModal,
    setBaptismDate,
    setSpouse,
    setConvertedSpouse,
    setAgeGroup,
    setAge,
    indexHandler,
    index,
    setIndex,
    modalAddPeople, setModalAddPeople,
    modalDeletePeople, setModalDeletePeople
  }}>
    {children}
  </PersonContext.Provider>
}

import React from 'react';
import api from '../services/api';
import { useAxios } from '../hooks/useAxios';
import { dayNow, monthNow, yearNow } from '../utils/getDate';
import { personTypes, InitialValue, userContext } from './@types.personContext';

export const PersonContext = React.createContext<personTypes>(InitialValue);

export const PersonContextProvider = ({ children }: userContext) => {
  const { data, mutate } = useAxios('person')
  const [id, setId] = React.useState(InitialValue.id);
  const [name, setName] = React.useState(InitialValue.name);
  const [email, setEmail] = React.useState(InitialValue.email);
  const [image, setImage] = React.useState(InitialValue.image);
  const [password, setPassword] = React.useState(InitialValue.password)
  const [birth, setBirth] = React.useState(InitialValue.birth)
  const [sex, setSex] = React.useState(InitialValue.sex)
  const [schooling, setSchooling] = React.useState(InitialValue.schooling)
  const [marital, setMarital] = React.useState(InitialValue.marital)
  const [document1, setDocument1] = React.useState(InitialValue.document1)
  const [document2, setDocument2] = React.useState(InitialValue.document2)
  const [phone1, setPhone1] = React.useState(InitialValue.phone1)
  const [phone2, setPhone2] = React.useState(InitialValue.phone2)
  const [address, setAddress] = React.useState(InitialValue.address)
  const [number, setNumber] = React.useState(InitialValue.number)
  const [district, setDistrict] = React.useState(InitialValue.district)
  const [zipcode, setZipcode] = React.useState(InitialValue.zipcode)
  const [country, setCountry] = React.useState(InitialValue.country)
  const [state, setState] = React.useState(InitialValue.state)
  const [city, setCity] = React.useState(InitialValue.city)
  const [group, setGroup] = React.useState<string[]>(InitialValue.group)
  const [category, setCategory] = React.useState<string[]>(InitialValue.category)
  const [office, setOffice] = React.useState<string[]>(InitialValue.office)
  const [conversion, setConversion] = React.useState(InitialValue.conversion)
  const [notes, setNotes] = React.useState(InitialValue.notes)
  const [baptized, setBaptized] = React.useState(InitialValue.baptized)
  const [spouse, setSpouse] = React.useState(InitialValue.spouse)
  const [convertedSpouse, setConvertedSpouse] = React.useState(InitialValue.convertedSpouse)
  const [baptismDate, setBaptismDate] = React.useState(InitialValue.baptismDate)
  const [registerDate, setRegisterDate] = React.useState(InitialValue.registerDate)
  const [index, setIndex] = React.useState(InitialValue.index);
  const [ageGroup, setAgeGroup] = React.useState(InitialValue.ageGroup);
  const [age, setAge] = React.useState(InitialValue.age);
  const [modal, setModal] = React.useState(InitialValue.modal);
  const [modalAddPeople, setModalAddPeople] = React.useState(InitialValue.modalAddPeople)
  const [modalDeletePeople, setModalDeletePeople] = React.useState(InitialValue.modalDeletePeople)
  const [activeColumn, setActiveColum] = React.useState<string[]>(InitialValue.activeColumn)
  const [filters, setFilters] = React.useState<string[]>(InitialValue.filters)
  const [resultsPage, setResultsPage] = React.useState(InitialValue.resultsPage)
  const [initialItem, setInitialItem] = React.useState(InitialValue.initialItem)
  const [finalItem, setFinalItem] = React.useState(resultsPage)
  const [currentPages, setCurrentPages] = React.useState(InitialValue.currentPages)
  var Lenght = data?.person.length
  let dados = data?.person[0]
  let names = ['Nome', 'E-mail', 'Data De Nascimento', 'Sexo', 'Escolaridade', 'EstadoCivil', 'Documento 1', 'Documento 2', 'Telefones', 'Endereço', 'Bairro', 'CEP', 'Pais', 'Estado', 'Cidade', 'Grupos', 'Categorias', 'Cargo', 'Data de conversão', 'Batizado', 'Data de batismo', 'Criado em ', 'Nome do cônjugue', 'Faixa etária', 'Idade']

  function birthHandler(event: React.ChangeEvent<HTMLInputElement>) {
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
  function indexHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setIndex(parseInt(event.target.value));
  }
  function nameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function emailHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  function imageHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setImage(event.target.value);
  }
  function passwordHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }
  function sexHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setSex(event.target.value);
  }
  function schoolingHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setSchooling(event.target.value);
  }
  function maritalHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setMarital(event.target.value);
  }
  function document1Handler(event: React.ChangeEvent<HTMLInputElement>) {
    setDocument1(parseInt(event.target.value));
  }
  function document2Handler(event: React.ChangeEvent<HTMLInputElement>) {
    setDocument2(parseInt(event.target.value));
  }
  function phone1Handler(event: React.ChangeEvent<HTMLInputElement>) {
    setPhone1(parseInt(event.target.value));
  }
  function phone2Handler(event: React.ChangeEvent<HTMLInputElement>) {
    setPhone2(parseInt(event.target.value));
  }
  function addressHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value);
  }
  function numberHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setNumber(parseInt(event.target.value));
  }
  function districtHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setDistrict(event.target.value);
  }
  function zipcodeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setZipcode(parseInt(event.target.value));
  }
  function countryHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setCountry(event.target.value);
  }
  function stateHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setState(event.target.value);
  }
  function cityHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }
  function conversionHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setConversion(new Date(event.target.value));
  }
  function notesHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setNotes(event.target.value);
  }
  function registerDateHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setRegisterDate(new Date(event.target.value));
  }
  function baptizedHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setBaptized(event.target.value)
  }
  function convertedSpouseHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setConvertedSpouse(event.target.value);
  }
  function spouseHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSpouse(event.target.value);
  }
  function baptismDateHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setBaptismDate(new Date(event.target.value))
  }
  function groupHandler(event: React.ChangeEvent<HTMLInputElement>) {
    let name = event.target.value
    if (group.indexOf(name) > -1) {
      setGroup(prev => prev.filter(gr => gr !== name))
    } else {
      setGroup(oldArr => [...oldArr, event.target.value]);
    }
  }
  function categoryHandler(event: React.ChangeEvent<HTMLInputElement>) {
    let name = event.target.value
    if (category.indexOf(name) > -1) {
      setCategory(prev => prev.filter(cat => cat !== name))
    } else {
      setCategory(oldArr => [...oldArr, event.target.value]);
    }
  }
  function officeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    let name = event.target.value
    if (office.indexOf(name) > -1) {
      setOffice(prev => prev.filter(of => of !== name))
    } else {
      setOffice(oldArr => [...oldArr, event.target.value]);
    };
  }
  const handleColumn = (event: React.ChangeEvent<HTMLInputElement>) => {
    let nameColumn = event.target.value
    if (activeColumn.indexOf(nameColumn) > -1) {
      setActiveColum(prev => prev.filter((column: any) => column !== nameColumn))
    } else {
      setActiveColum((oldArr: string[]) => [...oldArr, event.target.value])
    }
  }
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    let nameFilter = event.target.value
    if (filters.indexOf(nameFilter) > -1) {
      setFilters(prev => prev.filter((filter: any) => filter !== nameFilter))
    } else {
      setFilters((oldArr: string[]) => [...oldArr, event.target.value])
    }
  }

  const useSortedData = (items: [], config = null) => {
    const [sortConfig, setSortConfig] = React.useState<any>(config);

    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems?.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key: string) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
    return { items: sortedItems, requestSort, sortConfig };
  };
  const { items, requestSort, sortConfig } = useSortedData(data?.person ? data?.person : []);
  
  const handleResults = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResultsPage(parseInt(event.target.value))
  }
  const nextItem = () => {
    setInitialItem(initialItem + resultsPage)
    setFinalItem(finalItem + resultsPage)
    setCurrentPages(currentPages + 1)
  }
  const previousItem = () => {
    setInitialItem(initialItem - resultsPage)
    setFinalItem(finalItem - resultsPage)
    setCurrentPages(currentPages - 1)
  }
  function Clear() {
    setName(InitialValue.name)
    setEmail(InitialValue.email)
    setImage(InitialValue.image)
    setPassword(InitialValue.password)
    setBirth(InitialValue.birth)
    setSex(InitialValue.sex)
    setSchooling(InitialValue.schooling)
    setMarital(InitialValue.marital)
    setDocument1(InitialValue.document1)
    setDocument2(document2)
    setPhone1(InitialValue.phone1)
    setPhone2(InitialValue.phone2)
    setAddress(InitialValue.address)
    setNumber(InitialValue.number)
    setDistrict(InitialValue.district)
    setZipcode(InitialValue.zipcode)
    setCountry(InitialValue.country)
    setState(InitialValue.state)
    setCity(InitialValue.city)
    setGroup(InitialValue.group)
    setCategory(InitialValue.category)
    setOffice(InitialValue.office)
    setConversion(InitialValue.conversion)
    setNotes(InitialValue.notes)
    setBaptized(InitialValue.baptized)
    setRegisterDate(InitialValue.registerDate)
    setSpouse(InitialValue.spouse)
    setConvertedSpouse(InitialValue.convertedSpouse)
    setBaptismDate(InitialValue.baptismDate)
    setAgeGroup(InitialValue.ageGroup)
    setAge(InitialValue.age)
  }
  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
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
  function handleEdit(pid: string) {
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
      person: data.person?.map((persons: any) => {
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

  function handleDelete(id: string) {
    api.delete(`person/${id}`);
    window.alert('Usuario Deletado')
    const updatedPerson = {
      person: data.person?.filter((persons: any) => persons._id !== id)
    };

    mutate(updatedPerson, false);
  }
  return <PersonContext.Provider value={{
    id,
    modal,
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
    modalDeletePeople,
    modalAddPeople,
    index,
    resultsPage,
    filters,
    initialItem,
    finalItem,
    activeColumn,
    currentPages,
    Lenght,
    dados,
    names,
    handleEdit,
    handleDelete,
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
    setIndex,
    setModalAddPeople,
    setModalDeletePeople,
    handleResults,
    nextItem,
    previousItem,
    handleColumn,
    handleFilter,
    items,
    requestSort,
    sortConfig
  }}>
    {children}
  </PersonContext.Provider>
}

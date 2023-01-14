
export type personTypes = {
  id: string;
  name: string;
  email: string;
  image: string;
  password: string;
  birth: string;
  sex: string;
  schooling: string;
  marital: string;
  address: string;
  district: string;
  zipcode: number;
  country: string;
  state: string;
  city: string;
  notes: string;
  baptized: string;
  spouse: string;
  convertedSpouse: string;
  ageGroup: string;
  index: number;
  document1: number;
  document2: number;
  phone1: number;
  phone2: number;
  number: number;
  resultsPage: number;
  age: number;
  initialItem: number;
  finalItem: number;
  currentPages: number;
  Lenght: number;
  modalDeletePeople: boolean;
  modalAddPeople: boolean;
  modal: boolean;
  baptismDate: Date;
  registerDate: Date;
  conversion: Date;
  dados: string[];
  group: string[];
  category: string[];
  office: string[];
  filters: string[];
  names: string[];
  activeColumn: string[];
  items: string[];
  additionalField: any[];
  data: { person: {}[] };
  setAdditionalField: (newState: any[]) => void;
  additionalFieldHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  requestSort: (key: string) => void;
  sortConfig: never[];
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  registerDateHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  nameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  emailHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  passwordHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  birthHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sexHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  schoolingHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  maritalHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  document1Handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  document2Handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  phone1Handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  phone2Handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addressHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  numberHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  districtHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  zipcodeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  countryHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  stateHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  cityHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  groupHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  categoryHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  officeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  conversionHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  notesHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  baptizedHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  spouseHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  convertedSpouseHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  baptismDateHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imageHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  indexHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleResults: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleColumn: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setId: (newState: string) => void;
  setName: (newState: string) => void;
  setEmail: (newState: string) => void;
  setPassword: (newState: string) => void;
  setBirth: (newState: string) => void;
  setSex: (newState: string) => void;
  setSchooling: (newState: string) => void;
  setMarital: (newState: string) => void;
  setAddress: (newState: string) => void;
  setDistrict: (newState: string) => void;
  setCountry: (newState: string) => void;
  setState: (newState: string) => void;
  setCity: (newState: string) => void;
  setNotes: (newState: string) => void;
  setBaptized: (newState: string) => void;
  setImage: (newState: string) => void;
  setBaptismDate: (newState: Date) => void;
  setSpouse: (newState: string) => void;
  setConvertedSpouse: (newState: string) => void;
  setAgeGroup: (newState: string) => void;
  setIndex: (newState: number) => void;
  setAge: (newState: number) => void;
  setZipcode: (newState: number) => void;
  setDocument1: (newState: number) => void;
  setDocument2: (newState: number) => void;
  setPhone1: (newState: number) => void;
  setPhone2: (newState: number) => void;
  setNumber: (newState: number) => void;
  setModalDeletePeople: (newState: boolean) => void;
  setModalAddPeople: (newState: boolean) => void;
  setModal: (newState: boolean) => void;
  setConversion: (newState: Date) => void;
  setRegisterDate: (newState: Date) => void;
  setGroup: (newState: string[]) => void;
  setCategory: (newState: string[]) => void;
  setOffice: (newState: string[]) => void;
  nextItem: () => void;
  previousItem: () => void;
}

export const InitialValue = {
  data: { person: [{}] },
  id: '',
  name: '',
  email: '',
  image: '',
  password: '',
  birth: '',
  sex: 'Masculino',
  schooling: 'Maternal',
  marital: 'Solteiro(a)',
  address: '',
  district: '',
  zipcode: 0,
  country: '',
  state: '',
  city: '',
  notes: '',
  baptized: 'Não',
  spouse: '',
  convertedSpouse: 'Não',
  ageGroup: '',
  index: -1,
  document1: -1,
  document2: -1,
  phone1: -1,
  phone2: -1,
  number: -1,
  resultsPage: 20,
  age: 0,
  initialItem: 0,
  finalItem: 20,
  currentPages: 1,
  Lenght: -1,
  modalDeletePeople: false,
  modalAddPeople: false,
  modal: false,
  baptismDate: new Date(),
  registerDate: new Date(),
  conversion: new Date(),
  dados: [],
  group: [],
  category: [],
  office: [],
  filters: [],
  names: [],
  activeColumn: [],
  items: [],
  sortConfig: [],
  requestSort: () => { },
  handleEdit: () => { },
  handleDelete: () => { },
  handleSubmit: () => { },
  registerDateHandler: () => { },
  nameHandler: () => { },
  emailHandler: () => { },
  passwordHandler: () => { },
  birthHandler: () => { },
  sexHandler: () => { },
  schoolingHandler: () => { },
  maritalHandler: () => { },
  document1Handler: () => { },
  document2Handler: () => { },
  phone1Handler: () => { },
  phone2Handler: () => { },
  addressHandler: () => { },
  numberHandler: () => { },
  districtHandler: () => { },
  zipcodeHandler: () => { },
  countryHandler: () => { },
  stateHandler: () => { },
  cityHandler: () => { },
  groupHandler: () => { },
  categoryHandler: () => { },
  officeHandler: () => { },
  conversionHandler: () => { },
  notesHandler: () => { },
  baptizedHandler: () => { },
  spouseHandler: () => { },
  convertedSpouseHandler: () => { },
  baptismDateHandler: () => { },
  imageHandler: () => { },
  indexHandler: () => { },
  handleResults: () => { },
  handleColumn: () => { },
  handleFilter: () => { },
  setId: () => { },
  setName: () => { },
  setEmail: () => { },
  setPassword: () => { },
  setBirth: () => { },
  setSex: () => { },
  setSchooling: () => { },
  setMarital: () => { },
  setAddress: () => { },
  setDistrict: () => { },
  setZipcode: () => { },
  setCountry: () => { },
  setState: () => { },
  setCity: () => { },
  setNotes: () => { },
  setBaptized: () => { },
  setImage: () => { },
  setBaptismDate: () => { },
  setSpouse: () => { },
  setConvertedSpouse: () => { },
  setAgeGroup: () => { },
  setIndex: () => { },
  setAge: () => { },
  setDocument1: () => { },
  setDocument2: () => { },
  setPhone1: () => { },
  setPhone2: () => { },
  setNumber: () => { },
  setModalDeletePeople: () => { },
  setModalAddPeople: () => { },
  setModal: () => { },
  setConversion: () => { },
  setRegisterDate: () => { },
  setGroup: () => { },
  setCategory: () => { },
  setOffice: () => { },
  nextItem: () => { },
  previousItem: () => { },
  additionalField: [],
  setAdditionalField: () => { },
  additionalFieldHandler: () => { },
}
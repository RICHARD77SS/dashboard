export type eventsRegisterTypes = {
  id: string;
  name: string;
  evento: string;
  phone: number;
  email: string;
  address: string;
  number: number;
  district: string;
  zipCode: number;
  country: string;
  state: string;
  city: string;
  payment: string;
  date: Date;
  nameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  eventoHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  phoneHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  emailHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addressHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  numberHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  districtHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  zipCodeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  countryHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  stateHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  cityHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  paymentHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleDelete: (id: string) => void;
  setId: (newValue: string) => void;
  handleEdit: (eventsId: string,
    eventsName: string,
    eventsEvento: string,
    eventsPhone: number,
    eventsEmail: string,
    eventsAddress: string,
    eventsNumber: number,
    eventsDistrict: string,
    eventsZipCode: number,
    eventsCountry: string,
    eventsState: string,
    eventsCity: string,
    eventsPayment: string) => void;
  setName: (newValue: string) => void;
  setEvento: (newValue: string) => void;
  setPhone: (newValue: number) => void;
  setEmail: (newValue: string) => void;
  setAddress: (newValue: string) => void;
  setNumber: (newValue: number) => void;
  setDistrict: (newValue: string) => void;
  setZipCode: (newValue: number) => void;
  setCountry: (newValue: string) => void;
  setState: (newValue: string) => void;
  setCity: (newValue: string) => void;
  setPayment: (newValue: string) => void;
  setDate: (newValue: Date) => void;
}
export const initialValue = {
  id: '',
  name: '',
  evento: '',
  phone: 0,
  email: '',
  address: '',
  number: 0,
  district: '',
  zipCode: 0,
  country: '',
  state: '',
  city: '',
  payment: '',
  date: new Date(),
  nameHandler: () => {},
  eventoHandler: () => {},
  phoneHandler: () => {},
  emailHandler: () => {},
  addressHandler: () => {},
  numberHandler: () => {},
  districtHandler: () => {},
  zipCodeHandler: () => {},
  countryHandler: () => {},
  stateHandler: () => {},
  cityHandler: () => {},
  paymentHandler: () => {},
  handleSubmit: () => {},
  handleDelete: () => {},
  setId: () => {},
  handleEdit: () => {},
  setName: () => {},
  setEvento: () => {},
  setPhone: () => {},
  setEmail: () => {},
  setAddress: () => {},
  setNumber: () => {},
  setDistrict: () => {},
  setZipCode: () => {},
  setCountry: () => {},
  setState: () => {},
  setCity: () => {},
  setPayment: () => {},
  setDate: () => {},
}
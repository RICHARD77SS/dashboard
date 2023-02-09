export type CategorySchedule = {
  name: string;
  email: string;
  category: string;
  type: string;
  phone1: number;
  phone2: number;
  anotations: string;
  setName: (newValue:string)=>void;
  setEmail: (newValue: string) => void;
  setCategory: (newValue: string) => void;
  setType: (newValue: string) => void;
  setPhone1: (newValue: string) => void;
  setPhone2: (newValue: string) => void;
  setAnotations: (newValue: string) => void;
  nameHandler: (event: React.ChangeEvent<HTMLInputElement>)=>void;
  emailHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  categoryHandler: (event: React.ChangeEvent<HTMLSelectElement) => void;
  typeHandler: (event: React.ChangeEvent<HTMLSelectElement) => void;
  phone1Handler: (event: React.ChangeEvent<HTMLInputElement) => void;
  phone2Handler: (event: React.ChangeEvent<HTMLInputElement) => void;
  anotationsHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleDelete: (id:string) => void;
  setId: () => void;
  id: string;
  openModal: boolean;
  handleEdit: (contactId: string,
    contactName: string,
    contactEmail: string,
    contactCategory: string,
    contactType: string,
    contactPhone1: string,
    contactPhone2: string,
    contactAnotations: string) => void;
  setOpenModal: () => void;
  CloseModal: () => void;
}
export const initialValue = {
  name: '',
  description: '',
  setName: ()=>{},
  setDescription: () => {},
  nameHandler: ()=>{},
  descriptionHandler: () => {},
  handleSubmit: () => {},
  handleDelete: ()=>{},
  setId: () => {},
  id: '',
  openModal: false,
  handleEdit: () => {},
  setOpenModal: () => {},
  CloseModal: () => {},
}
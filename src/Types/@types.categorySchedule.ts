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
  nameHandler: ;
  emailHandler: ;
  categoryHandler: ;
  typeHandler: ;
  phone1Handler: ;
  phone2Handler: ;
  anotationsHandler: ;
  handleSubmit: ;
  handleDelete: ;
  setId: ;
  id: ;
  openModal: ;
  handleEdit: ;
  setOpenModal: ;
  CloseModal: ;
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
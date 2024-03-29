export type CategoryPatrimoniesTypes = {
  name: string;
  description: string;
  setName: (newValue:string)=>void;
  setDescription: (newValue: string) => void;
  nameHandler: (event:React.ChangeEvent<HTMLInputElement>)=>void;
  descriptionHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleDelete: (id:string)=>void;
  setId: (newValue: string) => void;
  id: string;
  openModal: boolean;
  handleEdit: (id: string,name:string,description:string) => void;
  setOpenModal: (newValue: boolean) => void;
  CloseModal: () => void;
  OpenModal: () => void;
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
  OpenModal: () => {},
}
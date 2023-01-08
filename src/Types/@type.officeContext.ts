export type officeType = {
  id: string;
  name: string;
  data: {positions:{}[]};
  setId: (newValue:string)=>void;
  setName: (newValue:string)=>void;
  nameHandler: (event:React.ChangeEvent<HTMLInputElement>)=>void;
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleEdit: (id:string,name:string)=>void;
  handleDelete: (id:string)=>void;
  CloseModal: ()=>void;
  openModal: boolean;
  setOpenModal: (newValue:boolean)=>void;
}
export const initialValue = {
  id: '',
  name: '',
  data: { positions: [{}] },
  setId: () => {},
  setName: () => {},
  nameHandler: () => {},
  handleSubmit: () => {},
  handleEdit: () => {},
  handleDelete: (id: string) => {},
  CloseModal: () => {},
  openModal: false,
  setOpenModal: () => {},
} 
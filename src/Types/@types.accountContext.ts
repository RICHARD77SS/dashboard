export type AccountTypes = {
  name: string;
  description: string;
  setName: (newValue:string)=>void;
  setDescription: (newValue: string) => void;
  nameHandler: (event:React.ChangeEvent<HTMLInputElement>)=>void;
  descriptionHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleDelete: (id:string)=>void;
  setId: (newValue: string) => void;
  id: string;
  openModal: boolean;
  handleEdit: (id: string,name:string,description:string) => void;
  setOpenModal: (newValue: boolean) => void;
  CloseModal: () => void;
}
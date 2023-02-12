export type CustCenterTypes = {
  name: string;
  description: string;
  openModal: boolean;
  setName: (newValue: string) => void;
  setDescription: (newValue: string) => void;
  nameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  descriptionHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  setOpenModal: (newValue:boolean) => void,
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleDelete: (id: string) => void;
  setId: (newValue: string) => void;
  id: string;
  handleEdit: (id: string, name: string, description: string, category: string) => void;
  CloseModal: () => void;
}
export const initialValue = {
  name: '',
  description: '',
  setName: () => { },
  setDescription: () => { },
  nameHandler: () => { },
  descriptionHandler: () => { },
  handleSubmit: () => { },
  handleDelete: () => { },
  setId: () => { },
  id: '',
  handleEdit: () => { },
  CloseModal: () => { },
  openModal: false,
  setOpenModal:()=>{},
}
export type FinancialCategoryTypes = {
  name: string;
  description: string;
  type: string;
  nameHandler: (event:React.ChangeEvent<HTMLInputElement>)=>void;
  descriptionHandler: (event:React.ChangeEvent<HTMLInputElement>) => void;
  typeHandler: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleSubmit: () => void;
  handleDelete: (id:string) => void;
  setId: (id: string) => void;
  id: string;
  openModal: boolean;
  handleEdit: (financialcategoryId: string, financialcategoryName: string, financialcategoryDescription: string, financialcategoryType: string)=>void;
  setOpenModal: (openModal:boolean) => void;
  CloseModal: (newValue:boolean) => void;
}
export const initialValue = {
  id: '',
  name: '',
  description: '',
  type: '',
  nameHandler: ()=>{},
  descriptionHandler: () => {},
  typeHandler: () => {},
  handleSubmit: () => {},
  handleDelete: () => {},
  setId: () => {},
  openModal: false,
  handleEdit: ()=>{},
  setOpenModal: () => {},
  CloseModal: () => {},
}
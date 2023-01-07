export type useContext = {
  children: React.ReactNode
}

export type extrafieldsType = {
  id: string;
  inputName: string;
  inputType: string;
  inputOption: any[];
  openModalEdit1: boolean;
  openCheck: boolean
  openRadio: boolean
  openText: boolean
  openTextArea: boolean
  openModalCheck: () => void;
  openModalRadio: () => void;
  openModalText: () => void;
  openModalTextArea: () => void;
  setId: (newState: string) => void;
  RemoveOption: (index: number) => void;
  setInputName: (newState: string) => void;
  setInputType: (newState: string) => void;
  setInputOption: (newState: any[]) => void;
  setOpenCheck: (newState: boolean) => void;
  setOpenRadio: (newState: boolean) => void;
  setOpenText: (newState: boolean) => void;
  setOpenTextArea: (newState: boolean) => void;
  inputNameHandle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputTypeHandle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputOptionHandle: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleDelete: (id: string) => void;
  handleEdit: (id: string, name: string, option: any[], type: string) => void;
  CloseModal: () => void;
  closeModalCheck: () => void;
  closeModalRadio: () => void;
  closeModalText: () => void;
  closeModalTextArea: () => void;
  AddOption: () => void;
}
export const initialValue = {
  id: '',
  inputName: '',
  inputType: '',
  inputOption: [],
  openCheck: false,
  openRadio: false,
  openText: false,
  openTextArea: false,
  openModalEdit1: false,
  openModalCheck: () => { },
  openModalRadio: () => { },
  openModalText: () => { },
  openModalTextArea: () => { },
  setId: () => { },
  RemoveOption: () => { },
  setInputName: () => { },
  setInputType: () => { },
  setInputOption: () => { },
  setOpenCheck: () => { },
  setOpenRadio: () => { },
  setOpenText: () => { },
  setOpenTextArea: () => { },
  inputNameHandle: () => { },
  inputTypeHandle: () => { },
  inputOptionHandle: () => { },
  handleSubmit: () => { },
  handleDelete: () => { },
  handleEdit: () => { },
  CloseModal: () => { },
  closeModalCheck: () => { },
  closeModalRadio: () => { },
  closeModalText: () => { },
  closeModalTextArea: () => { },
  AddOption: () => { },
}
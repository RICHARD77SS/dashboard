export type ContactCategoryType = {
  id: string;
  data: { contactCategory: {}[] };
  name: string;
  description: string;
  openModal: boolean;
  nameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  descriptionHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleDelete: (id: string) => void;
  setId: (newValue: string) => void;
  setName: (newValue: string) => void;
  setDescription: (newValue: string) => void;
  handleEdit: (id: string, name: string, description: string) => void;
  setOpenModal: (newValue: boolean) => void;
  CloseModal: () => void;
}
export const initialValue = {
  id: '',
  data: { contactCategory: [{}] },
  name: '',
  description: '',
  openModal: false,
  nameHandler: () => { },
  descriptionHandler: () => { },
  handleSubmit: () => { },
  handleDelete: () => { },
  setId: () => { },
  setName: () => { },
  setDescription: () => { },
  handleEdit: () => { },
  setOpenModal: () => { },
  CloseModal: () => { },
}
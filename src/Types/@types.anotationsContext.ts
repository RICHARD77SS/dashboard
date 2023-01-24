export type AnotationsTypes = {
  name: string;
  description: string;
  category: string;
  setName: (newValue: string) => void;
  setDescription: (newValue: string) => void;
  setCategory: (newValue: string) => void;
  nameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  categoryHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  descriptionHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleDelete: (id: string) => void;
  setId: (newValue: string) => void;
  id: string;
  handleEdit: (id: string, name: string, description: string, category: string) => void;
  Clear: () => void;
}
export const initialValue = {
  name: '',
  description: '',
  category: '',
  setName: () => { },
  setDescription: () => { },
  setCategory: () => { },
  nameHandler: () => { },
  descriptionHandler: () => { },
  categoryHandler: () => { },
  handleSubmit: () => { },
  handleDelete: () => { },
  setId: () => { },
  id: '',
  handleEdit: () => { },
  Clear: () => { },
}
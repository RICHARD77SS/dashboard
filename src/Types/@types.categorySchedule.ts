export type CategorySchedule = {
  name: string;
  email: string;
  category: string;
  type: string;
  phone1: string;
  phone2: string;
  anotations: string;
  id: string;
  openModal: boolean;
  setName: (newValue: string) => void;
  setEmail: (newValue: string) => void;
  setCategory: (newValue: string) => void;
  setType: (newValue: string) => void;
  setPhone1: (newValue: string) => void;
  setPhone2: (newValue: string) => void;
  setAnotations: (newValue: string) => void;
  nameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  emailHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  categoryHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  typeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  phone1Handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  phone2Handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  anotationsHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleDelete: (id: string) => void;
  setId: (newValue: string) => void;
  handleEdit: (contactId: string,
    contactName: string,
    contactEmail: string,
    contactCategory: string,
    contactType: string,
    contactPhone1: string,
    contactPhone2: string,
    contactAnotations: string) => void;
  setOpenModal: (newValue: boolean) => void;
  CloseModal: () => void;
}
export const initialValue = {
  name: '',
  email: '',
  category: '',
  type: 'Pessoa fisica',
  phone1: '',
  phone2: '',
  anotations: '',
  id: '',
  openModal: false,
  setName: () => { },
  setEmail: () => { },
  setCategory: () => { },
  setType: () => { },
  setPhone1: () => { },
  setPhone2: () => { },
  setAnotations: () => { },
  nameHandler: () => { },
  emailHandler: () => { },
  categoryHandler: () => { },
  typeHandler: () => { },
  phone1Handler: () => { },
  phone2Handler: () => { },
  anotationsHandler: () => { },
  handleSubmit: () => { },
  handleDelete: () => { },
  setId: () => { },
  handleEdit: () => { },
  setOpenModal: () => { },
  CloseModal: () => { },
}
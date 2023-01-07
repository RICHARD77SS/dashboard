export type useContext = {
  children: React.ReactNode
}
export type studiesTypes = {
  id: string;
  name: string;
  category: string;
  content: string;
  image: any;
  file: any;
  date: Date;
  notification: boolean;
  items: string[];
  sortConfig: never[];
  nameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  categoryHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  contentHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imageHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fileHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  notificationHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleEdit: (id: string, name: string, category: string, content: string, image: string, file: string, notification: boolean) => void;
  handleDelete: (id: string) => void;
  setId: (newState: string) => void;
  setName: (newState: string) => void;
  setCategory: (newState: string) => void;
  setContent: (newState: string) => void;
  setImage: (newState: any) => void;
  setFile: (newState: string) => void;
  setDate: (newState: Date) => void;
  setNotification: (newState: boolean) => void;
  requestSort: (key: string) => void;
  handleClear: () => void;
}
export const InitialValue = {
  id: '',
  name: '',
  category: '',
  content: '',
  image: '',
  file: '',
  notification: false,
  date: new Date(),
  items: [],
  sortConfig: [],
  nameHandler: () => { },
  categoryHandler: () => { },
  contentHandler: () => { },
  imageHandler: () => { },
  fileHandler: () => { },
  notificationHandler: () => { },
  handleSubmit: () => { },
  handleEdit: () => { },
  handleDelete: () => { },
  setId: () => { },
  setName: () => { },
  setCategory: () => { },
  setContent: () => { },
  setImage: () => { },
  setFile: () => { },
  setDate: () => { },
  setNotification: () => { },
  requestSort: () => { },
  handleClear: () => { },
}
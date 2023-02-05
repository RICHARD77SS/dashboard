export type ClaassTypes = {
  id: string;
  name: string;
  school: string;
  time: string;
  status: string;
  date: Date;
  participants: string[];
  description: string;
  openModal: boolean;
  setName: (newValue: string) => void;
  setSchool: (newValue: string) => void;
  setTime: (newValue: string) => void;
  setStatus: (newValue: string) => void;
  setDate: (newValue: Date) => void;
  setDescription: (newValue: string) => void;
  setId: (newValue: string) => void;
  setParticipants: (newValue: string[]) => void;
  setOpenModal: (newValue: boolean) => void;
  nameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  schoolHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  timeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  statusHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  descriptionHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  participantsHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleDelete: (id: string) => void;
  handleEdit: (claassId: string, claassName: string, claassSchool: string, claassTime: string, claassStatus: string, claassDescription: string, claassParticipants: string[]) => void;
  Clear: () => void;
  CloseModal: () => void;
}
export const initialValue = {
  id: '',
  name: '',
  school: '',
  time: '',
  status: '',
  date: new Date(),
  participants: [],
  description: '',
  openModal: false,
  setName: () => { },
  setTime: () => { },
  setSchool: () => { },
  setStatus: () => { },
  setDescription: () => { },
  setParticipants: () => { },
  setDate: () => { },
  nameHandler: () => { },
  schoolHandler: () => { },
  timeHandler: () => { },
  statusHandler: () => { },
  descriptionHandler: () => { },
  participantsHandler: () => { },
  handleSubmit: () => { },
  handleDelete: () => { },
  setId: () => { },
  handleEdit: () => { },
  setOpenModal: () => { },
  Clear: () => { },
  CloseModal: () => { },
}
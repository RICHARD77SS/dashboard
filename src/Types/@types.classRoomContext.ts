export type classRoomTypes = {
  discipline: string;
  participants: string[];
  topic: string;
  notes: string;
  remarks: string;
  openModal: boolean;
  id: string;
  date: string;
  index: string;
  setId: (newValue: string) => void;
  setDiscipline: (newValue: string) => void;
  setTopic: (newValue: string) => void;
  setRemarks: (newValue: string) => void;
  setNotes: (newValue: string) => void;
  setIndex: (newValue: string) => void;
  setParticipants: (newValue: string[]) => void;
  disciplineHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  participantsHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  topicHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  notesHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  dateHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  remarksHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleEdit: (classRoomId: string, classRoomDiscipline: string, classRoomTopic: string, classRoomRemarks: string, classRoomNotes: string, classRoomParticipants: string) => void;
  handleDelete: (id: string) => void;
  OpenModal: (index: string) => void;
  CloseModal: () => void;
}
export const initialValue = {
  discipline: '',
  participants: [],
  topic: '',
  notes: '',
  remarks: '',
  openModal: false,
  id: '',
  date: '',
  index: '',
  setId: () => { },
  setDiscipline: () => { },
  setTopic: () => { },
  setRemarks: () => { },
  setIndex: () => { },
  setNotes: () => { },
  setParticipants: () => { },
  disciplineHandler: () => { },
  participantsHandler: () => { },
  topicHandler: () => { },
  notesHandler: () => { },
  dateHandler: () => { },
  remarksHandler: () => { },
  handleSubmit: () => { },
  handleEdit: () => { },
  handleDelete: () => { },
  OpenModal: () => { },
  CloseModal: () => { },
}
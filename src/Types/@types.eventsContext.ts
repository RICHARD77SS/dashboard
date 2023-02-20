export type eventsTypes = {
  name: string;
  subName: string;
  startDate: string;
  endDate: string;
  notification: boolean;
  payment: string;
  value: string;
  numberOfVacancies: string;
  formOfPayment: string;
  schedule: any[];
  aboutTheEvent: string;
  place: string;
  image: string;
  speakers: any[];
  nameHandler: (event:React.ChangeEvent<HTMLInputElement>)=>void;
  subNameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  startDateHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  endDateHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  notificationHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  paymentHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  valueHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  numberOfVacanciesHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formOfPaymentHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  scheduleHandler: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  aboutTheEventHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imageHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  speakersHandler: (event: React.ChangeEvent<HTMLInputElement>,index: number) => void;
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleDelete: (id:string)=>void;
  openModal: boolean;
  id: string;
  handleEdit: (eventsId: string,
    eventsName: string,
    eventsSubName: string,
    eventsStartDate: string,
    eventsEndDate: string,
    eventsNotification: boolean,
    eventsPayment: string,
    eventsValue: string,
    eventsNumberOfVacancies: string,
    eventsFormOfPayment: string,
    eventsSchedule: any[],
    eventsAboutTheEvent: string,
    eventsPlace: string,
    eventsImage: string,
    eventsSpeakers: any[])=>void,
  setOpenModal: (newValue:boolean)=>void;
  CloseModal: ()=>void;
  RemoveSchedule: (index:number) => void;
  RemoveSpeakers: (index: number) => void;
  AddSchedule: () => void;
  AddSpeakers: () => void;
  setId: (newValue: string) => void;
  setName: (newValue: string) => void;
  setSubName: (newValue: string) => void;
  setStartDate: (newValue: string) => void;
  setEndDate: (newValue: string) => void;
  setNotification: (newValue: boolean) => void;
  setPayment: (newValue: string) => void;
  setValue: (newValue: string) => void;
  setNumberOfVacancies: (newValue: string) => void;
  setFormOfPayment: (newValue: string) => void;
  setSchedule: (newValue: any[]) => void;
  setAboutTheEvent: (newValue: string) => void;
  setPlace: (newValue: string) => void;
  setImage: (newValue: string) => void;
  setSpeakers: (newValue: any[]) => void;
}
export const initialValue = {
  id: '',
  name: '',
  subName: '',
  startDate: '',
  endDate: '',
  payment: '',
  value: '',
  numberOfVacancies: '',
  formOfPayment: '',
  aboutTheEvent: '',
  place: '',
  image: '',
  schedule: [],
  speakers: [],
  openModal: false,
  notification: false,
  nameHandler: ()=>{},
  subNameHandler: () => {},
  startDateHandler: () => {},
  endDateHandler: () => {},
  notificationHandler: () => {},
  paymentHandler: () => {},
  valueHandler: () => {},
  numberOfVacanciesHandler: () => {},
  formOfPaymentHandler: () => {},
  scheduleHandler: () => {},
  aboutTheEventHandler: () => {},
  placeHandler: () => {},
  imageHandler: () => {},
  speakersHandler: () => {},
  handleSubmit: () => {},
  handleDelete: ()=>{},
handleEdit: () => {},
  setOpenModal: ()=>{},
  CloseModal: ()=>{},
  RemoveSchedule: () => {},
  RemoveSpeakers: () => {},
  AddSchedule: () => {},
  AddSpeakers: () => {},
  setId: () => {},
  setName: () => {},
  setSubName: () => {},
  setStartDate: () => {},
  setEndDate: () => {},
  setNotification: () => {},
  setPayment: () => {},
  setValue: () => {},
  setNumberOfVacancies: () => {},
  setFormOfPayment: () => {},
  setSchedule: () => {},
  setAboutTheEvent: () => {},
  setPlace: () => {},
  setImage: () => {},
  setSpeakers: () => {},
}
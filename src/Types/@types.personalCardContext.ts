export type PersonalCardTypes = {
  data: { personalCard: {}[] };
  id: string;
  name: string;
  frontBgColor: string;
  frontBgImage: string;
  frontTitleColor: string;
  frontTextColor: string;
  frontSpanColor: string;
  frontPositions: { id: string, x: string, y: string }[];
  backBgImage: string;
  backBgColor: string;
  backTitleColor: string;
  backTextColor: string;
  backSpanColor: string;
  backPositions: { id: string, x: string, y: string }[];
  nameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  frontBgColorHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  frontBgImageHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  frontTitleColorHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  frontTextColorHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  frontSpanColorHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  frontPositionsHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  backBgImageHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  backBgColorHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  backTitleColorHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  backTextColorHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  backSpanColorHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  backPositionsHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDragStart: (event: any) => void;
  onDragEnd: (event: any) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: any) => void;
  set: (element: string, x: string, y: string) => void;
  onDragEnter: (event: any) => void;
  onDragLeave: (event: any) => void;
  backOnDragEnter: (event: any) => void;
  backOnDragLeave: (event: any) => void;
  backOnDragStart: (event: any) => void;
  backOnDragEnd: (event: any) => void;
  backOnDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  backOnDrop: (event: any) => void;
  backSet: (element: string, x: string, y: string) => void;
  setId: (newValue: string) => void;
  setName: (newValue: string) => void;
  setFrontBgColor: (newValue: string) => void;
  setFrontBgImage: (newValue: string) => void;
  setFrontTitleColor: (newValue: string) => void;
  setFrontTextColor: (newValue: string) => void;
  setFrontSpanColor: (newValue: string) => void;
  setFrontPositions: (newValue: []) => void;
  setBackBgImage: (newValue: string) => void;
  setBackBgColor: (newValue: string) => void;
  setBackTitleColor: (newValue: string) => void;
  setBackTextColor: (newValue: string) => void;
  setBackSpanColor: (newValue: string) => void;
  setBackPositions: (newValue: []) => void;
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleDelete: (id: string) => void;
  handleEdit: (personalCardid: string,
    personalCardname: string,
    personalCardfrontBgColor: string,
    personalCardfrontBgImage: string,
    personalCardfrontTitleColor: string,
    personalCardfrontTextColor: string,
    personalCardfrontSpanColor: string,
    personalCardfrontPositions: [],
    personalCardbackBgImage: string,
    personalCardbackBgColor: string,
    personalCardbackTitleColor: string,
    personalCardbackTextColor: string,
    personalCardbackSpanColor: string,
    personalCardbackPositions: [],
  ) => void
}
export const initialValue = {
  data: { personalCard: [{}] },
  id: '',
  name: '',
  frontBgColor: '#eee',
  frontBgImage: '',
  frontTitleColor: '',
  frontTextColor: '',
  frontSpanColor: '',
  frontPositions: [{
    id: 'draggable-1',
    x: '',
    y: ''
  },
  {
    id: 'draggable-2',
    x: '',
    y: ''
  },
  {
    id: 'draggable-3',
    x: '',
    y: ''
  },
  {
    id: 'draggable-4',
    x: '',
    y: ''
  },
  {
    id: 'draggable-5',
    x: '',
    y: ''
  },
  {
    id: 'draggable-6',
    x: '',
    y: ''
  },
  {
    id: 'draggable-7',
    x: '',
    y: ''
  },
  {
    id: 'draggable-8',
    x: '',
    y: ''
  },
  {
    id: 'draggable-9',
    x: '',
    y: ''
  },
  {
    id: 'draggable-10',
    x: '',
    y: ''
  },
  {
    id: 'draggable-11',
    x: '',
    y: ''
  },
  {
    id: 'draggable-12',
    x: '',
    y: ''
  },
  {
    id: 'draggable-13',
    x: '',
    y: ''
  },
  {
    id: 'draggable-14',
    x: '',
    y: ''
  },],
  backBgImage: '',
  backBgColor: '#eee',
  backTitleColor: '',
  backTextColor: '',
  backSpanColor: '',
  backPositions: [{
    id: 'draggable-1',
    x: '',
    y: ''
  },
  {
    id: 'draggable-2',
    x: '',
    y: ''
  },
  {
    id: 'draggable-3',
    x: '',
    y: ''
  },
  {
    id: 'draggable-4',
    x: '',
    y: ''
  },
  {
    id: 'draggable-5',
    x: '',
    y: ''
  },
  {
    id: 'draggable-6',
    x: '',
    y: ''
  },
  {
    id: 'draggable-7',
    x: '',
    y: ''
  },
  {
    id: 'draggable-8',
    x: '',
    y: ''
  },
  {
    id: 'draggable-9',
    x: '',
    y: ''
  },
  {
    id: 'draggable-10',
    x: '',
    y: ''
  },
  {
    id: 'draggable-11',
    x: '',
    y: ''
  },
  {
    id: 'draggable-12',
    x: '',
    y: ''
  },
  {
    id: 'draggable-13',
    x: '',
    y: ''
  },
  {
    id: 'draggable-14',
    x: '',
    y: ''
  },],
  nameHandler: () => { },
  frontBgColorHandler: () => { },
  frontBgImageHandler: () => { },
  frontTitleColorHandler: () => { },
  frontTextColorHandler: () => { },
  frontSpanColorHandler: () => { },
  frontPositionsHandler: () => { },
  backBgImageHandler: () => { },
  backBgColorHandler: () => { },
  backTitleColorHandler: () => { },
  backTextColorHandler: () => { },
  backSpanColorHandler: () => { },
  backPositionsHandler: () => { },
  onDragEnter: () => { },
  onDragLeave: () => { },
  backOnDragEnter: () => { },
  backOnDragLeave: () => { },
  onDragStart: () => { },
  onDragEnd: () => { },
  onDragOver: () => { },
  onDrop: () => { },
  set: () => { },
  backOnDragStart: () => { },
  backOnDragEnd: () => { },
  backOnDragOver: () => { },
  backOnDrop: () => { },
  backSet: () => { },
  setId: () => { },
  setName: () => { },
  setFrontBgColor: () => { },
  setFrontBgImage: () => { },
  setFrontTitleColor: () => { },
  setFrontTextColor: () => { },
  setFrontSpanColor: () => { },
  setFrontPositions: () => { },
  setBackBgImage: () => { },
  setBackBgColor: () => { },
  setBackTitleColor: () => { },
  setBackTextColor: () => { },
  setBackSpanColor: () => { },
  setBackPositions: () => { },
  handleSubmit: () => { },
  handleDelete: () => { },
  handleEdit: () => { },
}
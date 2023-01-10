export type PersonalCardTypes = {
  id: string;
  name: string;
  frontBgColor: string;
  frontBgImage: string;
  frontTitleColor: string;
  frontTextColor: string;
  frontSpanColor: string;
  frontPositions: string[];
  backBgImage: string;
  backBgColor: string;
  backTitleColor: string;
  backTextColor: string;
  backSpanColor: string;
  backPositions: string[];
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
  setId: (newValue: string) => void;
  setName: (newValue: string) => void;
  setFrontBgColor: (newValue: string) => void;
  setFrontBgImage: (newValue: string) => void;
  setFrontTitleColor: (newValue: string) => void;
  setFrontTextColor: (newValue: string) => void;
  setFrontSpanColor: (newValue: string) => void;
  setFrontPositions: (newValue: string[]) => void;
  setBackBgImage: (newValue: string) => void;
  setBackBgColor: (newValue: string) => void;
  setBackTitleColor: (newValue: string) => void;
  setBackTextColor: (newValue: string) => void;
  setBackSpanColor: (newValue: string) => void;
  setBackPositions: (newValue: string[]) => void;
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  handleDelete: (id: string) => void;
  handleEdit: (personalCardid: string,
    personalCardname: string,
    personalCardfrontBgColor: string,
    personalCardfrontBgImage: string,
    personalCardfrontTitleColor: string,
    personalCardfrontTextColor: string,
    personalCardfrontSpanColor: string,
    personalCardfrontPositions: string[],
    personalCardbackBgImage: string,
    personalCardbackBgColor: string,
    personalCardbackTitleColor: string,
    personalCardbackTextColor: string,
    personalCardbackSpanColor: string,
    personalCardbackPositions: string[],) => void;
}
export const initialValue = {
  id: '',
  name: '',
  frontBgColor: '',
  frontBgImage: '',
  frontTitleColor: '',
  frontTextColor: '',
  frontSpanColor: '',
  frontPositions: [],
  backBgImage: '',
  backBgColor: '',
  backTitleColor: '',
  backTextColor: '',
  backSpanColor: '',
  backPositions: [],
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
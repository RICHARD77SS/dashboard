import React from 'react';

import api from '../services/api';
import { useAxios } from '../hooks/useAxios';
import { useContext } from '../Types/@type.useContext';
import { initialValue, PersonalCardTypes } from '../Types/@types.personalCardContext';

export const PersonalCardContext = React.createContext<PersonalCardTypes>(initialValue);

export function PersonalCardContextProvider({ children }: useContext) {
  const { data, mutate } = useAxios('personalcard')

  const [id, setId] = React.useState(initialValue.id);
  const [name, setName] = React.useState(initialValue.name);
  const [frontBgColor, setFrontBgColor] = React.useState(initialValue.frontBgColor);
  const [frontBgImage, setFrontBgImage] = React.useState(initialValue.frontBgImage);
  const [frontTitleColor, setFrontTitleColor] = React.useState(initialValue.frontTitleColor);
  const [frontTextColor, setFrontTextColor] = React.useState(initialValue.frontTextColor);
  const [frontSpanColor, setFrontSpanColor] = React.useState(initialValue.frontSpanColor);
  const [frontPositions, setFrontPositions] = React.useState<string[]>(initialValue.frontPositions);
  const [backBgImage, setBackBgImage] = React.useState(initialValue.backBgImage);
  const [backBgColor, setBackBgColor] = React.useState(initialValue.backBgColor);
  const [backTitleColor, setBackTitleColor] = React.useState(initialValue.backTitleColor);
  const [backTextColor, setBackTextColor] = React.useState(initialValue.backTextColor);
  const [backSpanColor, setBackSpanColor] = React.useState(initialValue.backSpanColor);
  const [backPositions, setBackPositions] = React.useState<string[]>(initialValue.backPositions);

  function nameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }
  function frontBgColorHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFrontBgColor(event.target.value)
  }
  function frontBgImageHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFrontBgImage(event.target.value)
  }
  function frontTitleColorHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFrontTitleColor(event.target.value)
  }
  function frontTextColorHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFrontTextColor(event.target.value)
  }
  function frontSpanColorHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFrontSpanColor(event.target.value)
  }
  function frontPositionsHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFrontPositions([])
  }
  function backBgImageHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setBackBgImage(event.target.value)
  }
  function backBgColorHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setBackBgColor(event.target.value)
  }
  function backTitleColorHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setBackTitleColor(event.target.value)
  }
  function backTextColorHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setBackTextColor(event.target.value)
  }
  function backSpanColorHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setBackSpanColor(event.target.value)
  }
  function backPositionsHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setBackPositions([])
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    const personalCard = {
      name,
      frontBgColor,
      frontBgImage,
      frontTitleColor,
      frontTextColor,
      frontSpanColor,
      frontPositions,
      backBgImage,
      backBgColor,
      backTitleColor,
      backTextColor,
      backSpanColor,
      backPositions
    }
    if (id) {
      api.put(`personalcard/${id}`, personalCard)
      window.alert('Cartão editado')
      const updatedPersonalCard = {
        personalCard: data.personalCard?.map((personalCard: { _id: string }) => {
          if (personalCard._id === id) {
            return {
              name,
              frontBgColor,
              frontBgImage,
              frontTitleColor,
              frontTextColor,
              frontSpanColor,
              frontPositions,
              backBgImage,
              backBgColor,
              backTitleColor,
              backTextColor,
              backSpanColor,
              backPositions
            };
          }
          return personalCard
        }),
      };
      mutate(updatedPersonalCard, false)
    } else {
      api.post('personalcard', personalCard)
      window.alert('Card adicionado')
      const updatedPersonalCard = {
        personalCard: [...data.personalCard, personalCard]
      }
      mutate(updatedPersonalCard, false)
    }
  }
  function handleDelete(id: string) {
    api.delete(`personalcard/${id}`);
    window.alert('Card removido')
    const updatedPersonalCard = {
      personalCard: data.personalCard?.filter((personalCard: { _id: string }) => personalCard._id !== id)
    }
    mutate(updatedPersonalCard, false)
  }
  function handleEdit(
    personalCardid: string,
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
    personalCardbackPositions: string[],
  ) {
    setId(personalCardid)
    setName(personalCardname)
    setFrontBgColor(personalCardfrontBgColor)
    setFrontBgImage(personalCardfrontBgImage)
    setFrontTitleColor(personalCardfrontTitleColor)
    setFrontTextColor(personalCardfrontTextColor)
    setFrontSpanColor(personalCardfrontSpanColor)
    setFrontPositions(personalCardfrontPositions)
    setBackBgImage(personalCardbackBgImage)
    setBackBgColor(personalCardbackBgColor)
    setBackTitleColor(personalCardbackTitleColor)
    setBackTextColor(personalCardbackTextColor)
    setBackSpanColor(personalCardbackSpanColor)
    setBackPositions(personalCardbackPositions)
  }
  return <PersonalCardContext.Provider value={{
    id,
    name,
    frontBgColor,
    frontBgImage,
    frontTitleColor,
    frontTextColor,
    frontSpanColor,
    frontPositions,
    backBgImage,
    backBgColor,
    backTitleColor,
    backTextColor,
    backSpanColor,
    backPositions,
    nameHandler,
    frontBgColorHandler,
    frontBgImageHandler,
    frontTitleColorHandler,
    frontTextColorHandler,
    frontSpanColorHandler,
    frontPositionsHandler,
    backBgImageHandler,
    backBgColorHandler,
    backTitleColorHandler,
    backTextColorHandler,
    backSpanColorHandler,
    backPositionsHandler,
    setId,
    setName,
    setFrontBgColor,
    setFrontBgImage,
    setFrontTitleColor,
    setFrontTextColor,
    setFrontSpanColor,
    setFrontPositions,
    setBackBgImage,
    setBackBgColor,
    setBackTitleColor,
    setBackTextColor,
    setBackSpanColor,
    setBackPositions,
    handleSubmit,
    handleDelete,
    handleEdit
  }}>{children}</PersonalCardContext.Provider>
}
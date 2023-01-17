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
  const [frontPositions, setFrontPositions] = React.useState(initialValue.frontPositions);
  const [backBgImage, setBackBgImage] = React.useState(initialValue.backBgImage);
  const [backBgColor, setBackBgColor] = React.useState(initialValue.backBgColor);
  const [backTitleColor, setBackTitleColor] = React.useState(initialValue.backTitleColor);
  const [backTextColor, setBackTextColor] = React.useState(initialValue.backTextColor);
  const [backSpanColor, setBackSpanColor] = React.useState(initialValue.backSpanColor);
  const [backPositions, setBackPositions] = React.useState(initialValue.backPositions);

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

  function onDragStart(event: any) {
    event.dataTransfer.setData('text/plain', event.target.id)
    event.dataTransfer.setData('left', event.clientX)
    event.dataTransfer.setData('top', event.pageY)
    event.currentTarget.style.background = 'yellow'
  }
  function onDragEnd(event: any) {
    event.currentTarget.style.background = 'transparent'
  }
  function onDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }
  function onDragEnter(event: any) {

  }
  function onDragLeave(event: any) {

  }
  console.log(frontPositions)
  console.log(backPositions)
  function onDrop(event: any) {
    event.preventDefault()
    var width = window.innerWidth;
    const element = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(element)
    const rect = document.getElementById(element)?.getBoundingClientRect()

    let left = event.dataTransfer.getData('left') - rect!.left
    let top = event.dataTransfer.getData('top') - rect!.top

    draggableElement!.style.left = `${(event.clientX - left) / width * 100}%`
    draggableElement!.style.top = `${event.pageY - top}px`

    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    let data = [...frontPositions]
    data[element.split('-')[1] - 1].x = `${(event.clientX - left) / width * 100}%`
    data[element.split('-')[1] - 1].y = `${event.pageY - top}px`
    setFrontPositions(data)
    event.dataTransfer.clearData();

  }

  function set(element: any, x: any, y: any) {
    const draggableElement = document.getElementById(element)
    draggableElement!.style.left = x
    draggableElement!.style.top = y
    const dropzone = document.getElementById('drop-zone')
    dropzone?.appendChild(draggableElement!)
  }
  React.useEffect(() => {
    if (id) {
      frontPositions?.forEach((element: any) => set(element.id, element.x, element.y))
    }
  }, [frontPositions, id])

  function backOnDragStart(event: any) {
    event.dataTransfer.setData('text/plain', event.target.id)
    event.dataTransfer.setData('left', event.clientX)
    event.dataTransfer.setData('top', event.clientY)
    event.currentTarget.style.background = 'yellow'
  }
  function backOnDragEnd(event: any) {
    event.currentTarget.style.background = 'transparent'
  }
  function backOnDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }
  function backOnDragEnter(event: any) {

  }
  function backOnDragLeave(event: any) {

  }

  function backOnDrop(event: any) {
    event.preventDefault()
    var width = window.innerWidth;
    const element = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(element)
    const rect = document.getElementById(element)?.getBoundingClientRect()

    let left = event.dataTransfer.getData('left') - rect!.left
    let top = event.dataTransfer.getData('top') - rect!.top

    draggableElement!.style.left = `${(event.clientX - left) / width * 100}%`
    draggableElement!.style.top = `${event.pageY - top}px`
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    let data = [...backPositions]
    data[element.split('-')[1] - 1].x = `${(event.clientX - left) / width * 100}%`
    data[element.split('-')[1] - 1].y = `${event.pageY - top}px`
    setBackPositions(data)
    event.dataTransfer.clearData();

  }
  function backSet(element: any, x: any, y: any) {
    const draggableElement = document.getElementById(element)
    draggableElement!.style.left = x
    draggableElement!.style.top = y
    const dropzone = document.getElementById('drop-zone')
    dropzone?.appendChild(draggableElement!)
  }
  React.useEffect(() => {
    if (id) {
      backPositions?.forEach((element: any) => backSet(element.id, element.x, element.y))
      console.log(backPositions?.forEach((element: any) => backSet(element.id, element.x, element.y)))
    }
  }, [backPositions, id])

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
    personalCardfrontPositions: [],
    personalCardbackBgImage: string,
    personalCardbackBgColor: string,
    personalCardbackTitleColor: string,
    personalCardbackTextColor: string,
    personalCardbackSpanColor: string,
    personalCardbackPositions: [],
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
    data,
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
    onDragStart,
    onDragEnd,
    onDragOver,
    onDrop,
    onDragEnter,
    onDragLeave,
    backOnDragEnter,
    backOnDragLeave,
    set,
    backOnDragStart,
    backOnDragEnd,
    backOnDragOver,
    backOnDrop,
    backSet,
    handleSubmit,
    handleDelete,
    handleEdit
  }}>{children}</PersonalCardContext.Provider>
}
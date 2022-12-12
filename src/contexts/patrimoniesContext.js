import React from 'react'

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import ModalEditPatrimonies from './../Components/ModalEditPatrimonies/index';

export const PatrimoniesContext = React.createContext();

export function PatrimoniesContextProvider({ children }) {
  const { data, mutate } = useAxios('patrimonies');

  const [id, setId] = React.useState();
  const [name, setName] = React.useState()
  const [code, setCode] = React.useState()
  const [category, setCategory] = React.useState()
  const [place, setPlace] = React.useState('indefinido')
  const [situation, setSituation] = React.useState('uso')
  const [conservation, setConservation] = React.useState('novo')
  const [origin, setOrigin] = React.useState('compra')
  const [price, setPrice] = React.useState()
  const [purchaseDate, setPurchaseDate] = React.useState()
  const [docNumber, setDocNumber] = React.useState()
  const [lifeCycle, setLifeCycle] = React.useState()
  const [observation, setObservation] = React.useState()
  const [amount, setAmount] = React.useState()
  const [openModal, setOpenModal] = React.useState(false)

  function nameHandler(event) {
    setName(event.target.value);
  }
  function codeHandler(event) {
    setCode(event.target.value);
  }
  function categoryHandler(event) {
    setCategory(event.target.value)
  }
  function placeHandler(event) {
    setPlace(event.target.value)
  }
  function situationHandler(event) {
    setSituation(event.target.value)
  }
  function conservationHandler(event) {
    setConservation(event.target.value)
  }
  function originHandler(event) {
    setOrigin(event.target.value)
  }
  function priceHandler(event) {
    setPrice(event.target.value)
  }
  function purchaseDateHandler(event) {
    setPurchaseDate(event.target.value)
  }
  function docNumberHandler(event) {
    setDocNumber(event.target.value)
  }
  function lifeCycleHandler(event) {
    setLifeCycle(event.target.value)
  }
  function observationHandler(event) {
    setObservation(event.target.value)
  }
  function amountHandler(event) {
    setAmount(event.target.value)
  }
  function OpenModal() {
    setOpenModal(true)
  }

  function CloseModal() {
    setOpenModal(false)
    setId('')
    setName('')
    setCode('')
    setName('')
    setCode('')
    setCategory('')
    setPlace('')
    setSituation('')
    setConservation('')
    setOrigin('')
    setPrice('')
    setPurchaseDate('')
    setDocNumber('')
    setLifeCycle('')
    setObservation('')
    setAmount('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    CloseModal()
    const patrimonies = {
      name,
      code,
      category,
      place,
      situation,
      conservation,
      origin,
      price,
      purchaseDate,
      docNumber,
      lifeCycle,
      observation,
      amount
    }
    if (id) {
      api.put(`patrimonies/${id}`, patrimonies)
      window.alert('patrimonies Editada')
      const updatedPatrimonies = {
        patrimonies: data.patrimonies?.map((patrimonies) => {
          if (patrimonies._id === id) {
            return {
              ...patrimonies,
              name,
              code,
              category,
              place,
              situation,
              conservation,
              origin,
              price,
              purchaseDate,
              docNumber,
              lifeCycle,
              observation,
              amount
            };
          }
          return patrimonies
        }),
      };
      mutate(updatedPatrimonies, false)
    } else {
      api.post('patrimonies', patrimonies);
      window.alert('patrimonies adicionada')
      const updatedPatrimonies = {
        patrimonies: [...data.patrimonies, patrimonies]
      }
      mutate(updatedPatrimonies, false)
    }
  }
  function handleDelete(id) {
    api.delete(`patrimonies/${id}`);
    window.alert('patrimonies removido')
    const updatedPatrimonies = {
      patrimonies: data.patrimonies?.filter((patrimonies) => patrimonies._id !== id)
    };
    mutate(updatedPatrimonies, false)
  }

  function handleEdit(patrimoniesId, patrimoniesName, patrimoniesCode,
    patrimoniesCategory,
    patrimoniesPlace,
    patrimoniesSituation,
    patrimoniesConservation,
    patrimoniesOrigin,
    patrimoniesPrice,
    patrimoniesPurchaseDate,
    patrimoniesDocNumber,
    patrimoniesLifeCycle,
    patrimoniesObservation,
    patrimoniesAmount,) {
    setName(patrimoniesName);
    setCode(patrimoniesCode);
    setId(patrimoniesId);
    setCategory(patrimoniesCategory)
    setPlace(patrimoniesPlace)
    setSituation(patrimoniesSituation)
    setConservation(patrimoniesConservation)
    setOrigin(patrimoniesOrigin)
    setPrice(patrimoniesPrice)
    setPurchaseDate(patrimoniesPurchaseDate)
    setDocNumber(patrimoniesDocNumber)
    setLifeCycle(patrimoniesLifeCycle)
    setObservation(patrimoniesObservation)
    setAmount(patrimoniesAmount)
    setOpenModal(true);
  }
  return <PatrimoniesContext.Provider value={{
    name,
    code,
    category,
    place,
    situation,
    conservation,
    origin,
    price,
    purchaseDate,
    docNumber,
    lifeCycle,
    observation,
    amount,
    nameHandler,
    codeHandler,
    categoryHandler,
    placeHandler,
    situationHandler,
    conservationHandler,
    originHandler,
    priceHandler,
    purchaseDateHandler,
    docNumberHandler,
    lifeCycleHandler,
    observationHandler,
    amountHandler,
    handleSubmit,
    handleDelete,
    setId,
    id,
    openModal,
    handleEdit,
    setOpenModal,
    CloseModal,
    OpenModal
  }}>
    {children}
    {openModal && <ModalEditPatrimonies />}
  </PatrimoniesContext.Provider>
}
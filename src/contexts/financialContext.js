import React from 'react';

import api from '../services/api';

import { useAxios } from '../hooks/useAxios';
import MakeRevenues from '../Components/MakeRevenues';

export const FinancialContext = React.createContext()
export function FinancialContextProvider({
  children
}) {
  const { data, mutate } = useAxios('financial');
  const [id, setId] = React.useState()
  const [date, setDate] = React.useState()
  const [description, setDescription] = React.useState()
  const [value, setValue] = React.useState()
  const [paidOut, setPaidOut] = React.useState()
  const [receivedFrom, setReceivedFrom] = React.useState()
  const [category, setCategory] = React.useState()
  const [account, setAccount] = React.useState()
  const [costCenter, setCostCenter] = React.useState()
  const [typeOfPayment, setTypeOfPayment] = React.useState()
  const [documentNumber, setDocumentNumber] = React.useState()
  const [competence, setCompetence] = React.useState()
  const [notes, setNotes] = React.useState()
  const [file, setFile] = React.useState()
  const [revenuesExpenses, setRevenuesExpenses] = React.useState(true)
  const [frequenci, setFrequenci] = React.useState()
  const [repetition, setRepetition] = React.useState()

  const [modal, setModal] = React.useState(false)


  function OpenRevenues() {
    setRevenuesExpenses(true)
    setModal(true)
    AddNew()
  }
  function OpenExpenses() {
    setRevenuesExpenses(false)
    setModal(true)
    AddNew()
  }

  function AddNew() {
    setId('')
    setDate('')
    setDescription('')
    setValue()
    setPaidOut('')
    setReceivedFrom('')
    setCategory('')
    setAccount('')
    setCostCenter('')
    setTypeOfPayment('')
    setDocumentNumber('')
    setCompetence('')
    setNotes('')
    setFile('')
  }

  function dateHandler(event) {
    setDate(event.target.value);
  }
  function descriptionHandler(event) {
    setDescription(event.target.value);
  }
  function valueHandler(event) {
    setValue(event.target.value);
  }
  function paidOutHandler(event) {
    setPaidOut(event.target.value);
  }
  function receivedFromHandler(event) {
    setReceivedFrom(event.target.value);
  }
  function categoryHandler(event) {
    setCategory(event.target.value);
  }
  function accountHandler(event) {
    setAccount(event.target.value);
  }
  function costCenterHandler(event) {
    setCostCenter(event.target.value);
  }
  function typeOfPaymentHandler(event) {
    setTypeOfPayment(event.target.value);
  }
  function documentNumberHandler(event) {
    setDocumentNumber(event.target.value);
  }
  function competenceHandler(event) {
    setCompetence(event.target.value);
  }
  function notesHandler(event) {
    setNotes(event.target.value);
  }
  function fileHandler(event) {
    setFile(event.target.value);
  }
  function frequenciHandler(event) {
    setFrequenci(event.target.value);
  }
  function repetitionHandler(event) {
    setRepetition(event.target.value);
  }


  function handleSubmit(event) {
    event.preventDefault()
    const financial = {
      date,
      description,
      value,
      paidOut,
      receivedFrom,
      category,
      account,
      costCenter,
      typeOfPayment,
      documentNumber,
      competence,
      notes,
      file,
      revenuesExpenses,
      frequenci,
      repetition
    }
    if (id) {
      api.put(`financial/${id}`, financial)
      window.alert('Financia adicionada')
      AddNew()
      const updatedFinancial = {
        financial: data.financial?.map((financial) => {
          if (financial._id === id) {
            return {
              ...financial,
              date,
              description,
              value,
              paidOut,
              receivedFrom,
              category,
              account,
              costCenter,
              typeOfPayment,
              documentNumber,
              competence,
              notes,
              file,
              revenuesExpenses,
              frequenci,
              repetition
            }
          }
          return financial
        }),
      };
      mutate(updatedFinancial, false);
    } else {
      api.post('financial', financial);
      window.alert('financia adicionada')
      AddNew()
      setModal(false)
      const updatedFinancial = {
        financial: [...data.financial, financial]
      }
      mutate(updatedFinancial, false)
    }
  }

  function handleDelete(id) {
    api.delete(`financial/${id}`);
    window.alert('financial removido')
    setModal(false)
    const updatedFinancial = {
      financial: data.financial?.filter((financial) => financial._id !== id)
    };
    mutate(updatedFinancial, false);
  }

  function handleEdit(fid,
    fdate,
    fdescription,
    fvalue,
    fpaidOut,
    freceivedFrom,
    fcategory,
    faccount,
    fcostCenter,
    ftypeOfPayment,
    fdocumentNumber,
    fcompetence,
    fnotes,
    ffile,
    ffrequenci,
    frepetition) {
    setModal(true)
    setId(fid)
    setDate(fdate)
    setDescription(fdescription)
    setValue(fvalue)
    setPaidOut(fpaidOut)
    setReceivedFrom(freceivedFrom)
    setCategory(fcategory)
    setAccount(faccount)
    setCostCenter(fcostCenter)
    setTypeOfPayment(ftypeOfPayment)
    setDocumentNumber(fdocumentNumber)
    setCompetence(fcompetence)
    setNotes(fnotes)
    setFile(ffile)
    setFrequenci(ffrequenci)
    setRepetition(frepetition)
  }
  return <FinancialContext.Provider value={{
    date,
    description,
    value,
    receivedFrom,
    category,
    account,
    costCenter,
    typeOfPayment,
    documentNumber,
    competence,
    notes,
    file,
    frequenci,
    repetition,
    frequenciHandler,
    repetitionHandler,
    setPaidOut,
    dateHandler,
    descriptionHandler,
    valueHandler,
    paidOutHandler,
    receivedFromHandler,
    categoryHandler,
    accountHandler,
    costCenterHandler,
    typeOfPaymentHandler,
    documentNumberHandler,
    competenceHandler,
    notesHandler,
    fileHandler,
    handleSubmit,
    handleDelete,
    setId,
    id,
    setModal,
    modal,
    handleEdit,
    setRevenuesExpenses,
    revenuesExpenses,
    OpenExpenses,
    OpenRevenues,

  }}>
    {children}
    {modal && <MakeRevenues />}
  </FinancialContext.Provider>
}
import React from 'react'

import api from '../services/api'

import { useAxios } from '../hooks/useAxios';
import { NowDate } from '../utils/getDate';
export const GroupsContext = React.createContext();

export function GroupsContextProvider({ children }) {

  const { data: dataPerson } = useAxios('person')
  const { data, mutate } = useAxios('groups');
  const [id, setId] = React.useState('')
  const [name, setName] = React.useState('')
  const [image, setImage] = React.useState('')
  const [bg, setBg] = React.useState('')
  const [creationDate, setCreationDate] = React.useState('')
  const [weekDay, setWeekDay] = React.useState('Domingo')
  const [sex, setSex] = React.useState('Ambos')
  const [time, setTime] = React.useState('Manhã')
  const [category, setCategory] = React.useState([])
  const [originGroup, setOriginGroup] = React.useState('')
  const [lider1, setLider1] = React.useState({
    image: '',
    name: '',
    index: -1
  })
  const [lider2, setLider2] = React.useState({
    image: '',
    name: '',
    index: -1
  })
  const [lider3, setLider3] = React.useState({
    image: '',
    name: '',
    index: -1
  })
  const [lider4, setLider4] = React.useState({
    image: '',
    name: '',
    index: -1
  })
  const [address, setAddress] = React.useState('')
  const [district, setDistrict] = React.useState('')
  const [number, setNumber] = React.useState('')
  const [country, setCountry] = React.useState('')
  const [state, setState] = React.useState('')
  const [city, setCity] = React.useState('')
  const [anotations, setAnotations] = React.useState('')
  const [participants, setParticipants] = React.useState([
    {
      image: '',
      name: '',
      index: 0
    }
  ])

  function nameHandler(event) {
    setName(event.target.value)
  }
  function imageHandler(event) {
    setImage(event.target.value)
  }
  function bgHandler(event) {
    setBg(event.target.value)
  }
  function creationDateHandler(event) {
    setCreationDate(event.target.value)
  }
  function weekDayHandler(event) {
    setWeekDay(event.target.value)
  }
  function sexHandler(event) {
    setSex(event.target.value)
  }
  function timeHandler(event) {
    setTime(event.target.value)
  }

  function categoryHandler(event) {
    let name = event.target.value
    if (category.indexOf(name) > -1) {
      setCategory(prev => prev.filter(cat => cat !== name))
    } else {
      setCategory(oldArr => [...oldArr, event.target.value])
    }
  }

  function originGroupHandler(event) {
    setOriginGroup(event.target.value)
  }
  function lider1Handler(event) {
    setLider1({
      image: dataPerson?.person?.[event.target.value].image,
      name: dataPerson?.person?.[event.target.value].name,
      index: event.target.value
    })
  }
  function lider2Handler(event) {
    setLider2({
      image: dataPerson?.person?.[event.target.value].image,
      name: dataPerson?.person?.[event.target.value].name,
      index: event.target.value
    })
  }
  function lider3Handler(event) {
    setLider3({
      image: dataPerson?.person?.[event.target.value].image,
      name: dataPerson?.person?.[event.target.value].name,
      index: event.target.value
    })
  }
  function lider4Handler(event) {
    setLider4({
      image: dataPerson?.person?.[event.target.value].image,
      name: dataPerson?.person?.[event.target.value].name,
      index: event.target.value
    })
  }
  function addressHandler(event) {
    setAddress(event.target.value)
  }
  function districtHandler(event) {
    setDistrict(event.target.value)
  }
  function numberHandler(event) {
    setNumber(event.target.value)
  }
  function countryHandler(event) {
    setCountry(event.target.value)
  }
  function stateHandler(event) {
    setState(event.target.value)
  }
  function cityHandler(event) {
    setCity(event.target.value)
  }
  function anotationsHandler(event) {
    setAnotations(event.target.value)
  }
  function participantsHandler(event) {
    setAnotations(event.target.value)
  }

  function Clear() {
    setId('')
    setName('')
    setImage('')
    setBg('')
    setCreationDate('')
    setWeekDay('Domingo')
    setSex('Ambos')
    setTime('Manhã')
    setCategory([])
    setOriginGroup('')
    setLider1({
      image: '',
      name: '',
      index: -1
    })
    setLider2({
      image: '',
      name: '',
      index: -1
    })
    setLider3({
      image: '',
      name: '',
      index: -1
    })
    setLider4({
      image: '',
      name: '',
      index: -1
    })
    setAddress('')
    setDistrict('')
    setNumber('')
    setCountry('')
    setState('')
    setCity('')
    setAnotations('')
    setParticipants([
      {
        image: '',
        name: '',
        index: 0
      }
    ])
  }

  function handleSubmit(event) {
    event.preventDefault()
    const groups = {
      name,
      image,
      bg,
      creationDate,
      weekDay,
      sex,
      time,
      category,
      originGroup,
      lider1,
      lider2,
      lider3,
      lider4,
      address,
      district,
      number,
      country,
      state,
      city,
      anotations,
      participants
    }
    if (id) {
      api.put(`groups/${id}`, groups);
      window.alert('Grupo Editado com sucesso');
      const updatedGroups = {
        groups: data.groups?.map((groups) => {
          if (groups._id === id) {
            return {
              ...groups,
              name,
              image,
              bg,
              creationDate,
              weekDay,
              sex,
              time,
              category,
              originGroup,
              lider1,
              lider2,
              lider3,
              lider4,
              address,
              district,
              number,
              country,
              state,
              city,
              anotations,
              participants
            }
          }
          return groups
        }),
      };
      mutate(updatedGroups, false);
    } else {
      api.post('groups', groups);
      window.alert('Grupo adicionado');
      Clear()
      const updatedGroups = {
        groups: [...data.groups, groups]
      }
      mutate(updatedGroups, false)
    }
  }
  function handleDelete(id) {
    api.delete(`groups/${id}`);
    window.alert('Grupo removido')
    const updatedGroups = {
      groups: data.groups?.filter((groups) => groups._id !== id)
    }
    mutate(updatedGroups, false)
  }
  function handleEdit(
    gid,
    gname,
    gimage,
    gbg,
    gcreationdate,
    gweekday,
    gsex,
    gtime,
    gcategory,
    gorigingroup,
    glider1,
    glider2,
    glider3,
    glider4,
    gaddress,
    gdistrict,
    gnumber,
    gcountry,
    gstate,
    gcity,
    ganotations,
    gparticipants
  ) {
    setId(gid)
    setName(gname)
    setBg(gbg)
    setImage(gimage)
    setCreationDate(gcreationdate)
    setWeekDay(gweekday)
    setSex(gsex)
    setTime(gtime)
    setCategory(gcategory)
    setOriginGroup(gorigingroup)
    setLider1(glider1)
    setLider2(glider2)
    setLider3(glider3)
    setLider4(glider4)
    setAddress(gaddress)
    setDistrict(gdistrict)
    setNumber(gnumber)
    setCountry(gcountry)
    setState(gstate)
    setCity(gcity)
    setAnotations(ganotations)
    setParticipants(gparticipants)
  }

  const [filterGroup, setFilterGroup] = React.useState()
  const [filterLider1, setFilterLider1] = React.useState()
  const [filterLider2, setFilterLider2] = React.useState()
  const [filterLider3, setFilterLider3] = React.useState()
  const [filterLider4, setFilterLider4] = React.useState()

  const [period, setPeriod] = React.useState(NowDate)

  function filterPeriodHandler(event) {
    setPeriod(event.target.value)
  }

  function filterGroupHandler(event) {
    setFilterGroup(event.target.value)
    if (filterLider1 || filterLider2 || filterLider3 || filterLider4) {
      setFilterLider1('')
      setFilterLider2('')
      setFilterLider3('')
      setFilterLider4('')
    }
  }
  function filterLider1Handler(event) {
    setFilterLider1(event.target.value)
    if (filterGroup) {
      setFilterGroup('')
    }
  }
  function filterLider2Handler(event) {
    setFilterLider2(event.target.value)
    if (filterGroup) {
      setFilterGroup('')
    }
  }
  function filterLider3Handler(event) {
    setFilterLider3(event.target.value)
    if (filterGroup) {
      setFilterGroup('')
    }
  }
  function filterLider4Handler(event) {
    setFilterLider4(event.target.value)
    if (filterGroup) {
      setFilterGroup('')
    }
  }

  return <GroupsContext.Provider value={{
    name,
    image,
    bg,
    creationDate,
    weekDay,
    sex,
    time,
    category,
    originGroup,
    lider1,
    lider2,
    lider3,
    lider4,
    address,
    district,
    number,
    country,
    state,
    city,
    anotations,
    participants,
    nameHandler,
    imageHandler,
    bgHandler,
    creationDateHandler,
    weekDayHandler,
    sexHandler,
    timeHandler,
    categoryHandler,
    originGroupHandler,
    lider1Handler,
    lider2Handler,
    lider3Handler,
    lider4Handler,
    addressHandler,
    districtHandler,
    numberHandler,
    countryHandler,
    stateHandler,
    cityHandler,
    anotationsHandler,
    participantsHandler,
    setId,
    setCreationDate,
    setAnotations,
    id,
    handleDelete,
    handleSubmit,
    handleEdit,
    filterGroup,
    filterGroupHandler,
    filterLider1,
    filterLider1Handler,
    filterLider2,
    filterLider2Handler,
    filterLider3,
    filterLider3Handler,
    filterLider4,
    filterLider4Handler,
    period,
    filterPeriodHandler
  }}>
    {children}
  </GroupsContext.Provider>
}
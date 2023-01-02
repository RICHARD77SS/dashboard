import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Content from "../Content";

import { GiGreekTemple } from 'react-icons/gi';
import { FaGraduationCap } from 'react-icons/fa';
import { BiGroup } from 'react-icons/bi';
import ProgressBar from "../ProgressBar";
import { Link } from "react-router-dom";
import InputBlock from "../InputBlock";


import { Description, Divf, Studie, Image, ScrollContent } from "./styles"
import { useAxios } from "../../hooks/useAxios";
import { StudiesContext } from "../../contexts/studiesContext";
import React from 'react'


const OverviewStudies = () => {

  const { data: dataStudies } = useAxios('studies');
  const { data: dataSchools } = useAxios('schools');
  const { data: dataClaass } = useAxios('claass');
  const { data: dataOrientation } = useAxios('orientation')
  const { handleEdit } = React.useContext(StudiesContext);

  let dateNow = new Date()
  let dayNow = dateNow.getDate()
  let monthNow = dateNow.getMonth() + 1
  let yearNow = dateNow.getFullYear()

  let schools = dataSchools?.schools.length
  let claass = dataClaass?.claass.length
  let students = dataClaass?.claass.map((clas: any) => clas.participants).flat(1).length

  let allOrientation = dataOrientation?.orientation.length
  let orientationInProgress = dataOrientation?.orientation.map((orientation: any) => orientation.status === "Em andamento" ? 1 : 0).reduce((acc: number, item: number) => acc + item)
  let orientationFinish = dataOrientation?.orientation.map((orientation: any) => orientation.status === 'Concluido' ? 1 : 0).reduce((acc: number, item: number) => acc + item)
  let orientationLate = dataOrientation?.orientation.map((orientation: any) => orientation.meetings?.map((met: any) => parseInt(met.date?.split('T')[0]?.split('-')[1]) < monthNow || parseInt(met.date?.split('T')[0]?.split('-')[2]) < dayNow ? 1 : 0).indexOf(1)).filter((i: any) => i === 0).length

  let progress = orientationInProgress / allOrientation * 100
  let finish = orientationFinish / allOrientation * 100
  let later = orientationLate / allOrientation * 100

  const inProgress = `${progress.toFixed(1)}%`
  const completed = `${finish.toFixed(1)}%`
  const late = `${later.toFixed(1)}%`
  return (
    <Content>
      <Box >
        <BoxHeader>
          <h3>Estudos</h3>
          <Button><Link to='/studies'>Ver todos</Link></Button>
        </BoxHeader>
        <BoxContent width='500px'>
          <ScrollContent>

            {dataStudies?.studies.map((studies: any, index: number) => {
              return (

                <Studie key={index}>
                  <Image><Link to={`/addstudies/${index}`}><Button type='button' onClick={() => handleEdit(
                    studies._id,
                    studies.name,
                    studies.category,
                    studies.content,
                    studies.image,
                    studies.file,
                    studies.notification
                  )}>
                    <img src={studies.image} alt="" />
                  </Button>
                  </Link>
                  </Image>
                  <InputBlock>
                    <Link to={`/addstudies/${index}`}><Button type='button' onClick={() => handleEdit(
                      studies._id,
                      studies.name,
                      studies.category,
                      studies.content,
                      studies.image,
                      studies.file,
                      studies.notification
                    )}>
                      <h4>{studies.name}</h4>
                      <p>{studies.date?.split('T')[0]}</p>
                    </Button>
                    </Link>
                  </InputBlock>
                </Studie>
              )
            })}
          </ScrollContent>
        </BoxContent>
      </Box>
      <Box>
        <BoxHeader>
          <h3>Escolas</h3>
        </BoxHeader>
        <BoxContent width='500px'>
          <Description>

            <span><span><GiGreekTemple /></span>Total de escolas</span>
            <span>{schools}</span>
          </Description>
          <Description>

            <span><span><FaGraduationCap /></span>Total de turmas</span>
            <span>{claass}</span>
          </Description>
          <Description>

            <span><span><BiGroup /></span>Total de alunos</span>
            <span>{students}</span>
          </Description>
        </BoxContent>
      </Box>
      <Box>
        <BoxHeader>
          <h3>Acompanhamento</h3>
        </BoxHeader>
        <BoxContent width='500px'>
          <Divf>
            <Description>
              <p>Em andamento</p>
              <p>{inProgress}</p>
            </Description>
            <ProgressBar value={inProgress} color='blue' />
          </Divf>
          <Divf>
            <Description>
              <p>Concluído</p>
              <p>{completed}</p>
            </Description>
            <ProgressBar value={completed} color='green' />
          </Divf>
          <Divf>
            <Description>
              <p>Atrasados</p>
              <p>{late}</p>
            </Description>
            <ProgressBar value={late} color='#C60000' />
          </Divf>
        </BoxContent>
      </Box>
    </Content>
  )
}

export default OverviewStudies;
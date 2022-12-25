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


import { Description, Divf, Studie, Image } from "./styles"
import { useAxios } from "../../hooks/useAxios";
import { StudiesContext } from "../../contexts/studiesContext";
import React from 'react'


const OverviewStudies = () => {

  const { data: dataStudies } = useAxios('studies');
  const { data: dataSchools } = useAxios('schools');
  const { data: dataClaass } = useAxios('claass');
  const { data: dataOrientation } = useAxios('orientation')
  const { handleEdit } = React.useContext(StudiesContext);

  let schools = dataSchools?.schools.length
  let claass = dataClaass?.claass.length
  let students = dataClaass?.claass.map((clas: any) => clas.participants).flat(1).length

  let allOrientation = dataOrientation?.orientation.length
  let orientationInProgress = dataOrientation?.orientation.map((orientation: any) => orientation.status === "Em andamento" ? 1 : 0).reduce((acc: number, item: number) => acc + item)
  let orientationFinish = dataOrientation?.orientation.map((orientation: any) => orientation.status === 'Concluido' ? 1 : 0).reduce((acc: number, item: number) => acc + item)
  let orientationLate = dataOrientation?.orientation.map((orientation: any) => orientation.meetings)
  let progress = allOrientation / orientationInProgress * 100
  let finish = allOrientation / orientationFinish * 10

  const inProgress = progress.toString()
  const completed = finish.toString()
  const late = "17%"
  return (
    <Content>
      <Box width='350px'>
        <BoxHeader>
          <h3>Estudos</h3>
          <Button><Link to='/studies'>Ver todos</Link></Button>
        </BoxHeader>
        <BoxContent>
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

        </BoxContent>
      </Box>
      <Box width='350px'>
        <BoxHeader>
          <h3>Escolas</h3>

        </BoxHeader>
        <BoxContent>
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
      <Box width='350px'>
        <BoxHeader>
          <h3>Acompanhamento</h3>
        </BoxHeader>
        <BoxContent>
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
import { GiGreekTemple } from "react-icons/gi"
import { BiGroup } from "react-icons/bi"
import { FaGraduationCap } from "react-icons/fa"

import Button from "../Button"

import { Container, Content, Box, BoxHeader, BoxContent, Description, Divf, Output } from "./styles"

import OverviewSchedules from "../OverviewSchedules"
import OverviewSite from "../OverviewSite"
import OverviewPersons from "../OverviewPersons"
import OverviewGroups from "../OverviewGroups"

const Overview = () => {
  return (
    <Container>
      <OverviewSchedules />
      <OverviewSite />
      <OverviewPersons />
      <OverviewGroups />
      <Content>
        <Box>
          <BoxHeader>
            <h3>Estudos</h3>
            <Button>Ver todos</Button>
          </BoxHeader>
          <BoxContent>

          </BoxContent>
        </Box>
        <Box>
          <BoxHeader>
            <h3>Escolas</h3>

          </BoxHeader>
          <BoxContent>
            <Description>

              <span><span><GiGreekTemple /></span>Total de escolas</span>
              <span>0</span>
            </Description>
            <Description>

              <span><span><FaGraduationCap /></span>Total de turmas</span>
              <span>0</span>
            </Description>
            <Description>

              <span><span><BiGroup /></span>Total de alunos</span>
              <span>0</span>
            </Description>
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader>
            <h3>Acompanhamento</h3>
          </BoxHeader>
          <BoxContent>
            <Divf>
              <Description>
                <p>Em andamento</p>
                <p>0</p>
              </Description>
              <Output></Output>
            </Divf>
            <Divf>
              <Description>
                <p>Concluído</p>
                <p>0</p>
              </Description>
              <Output></Output>
            </Divf>
            <Divf>
              <Description>
                <p>Atrasados</p>
                <p>0</p>
              </Description>
              <Output></Output>
            </Divf>
          </BoxContent>
        </Box>
      </Content>
    </Container>
  )
}
export default Overview

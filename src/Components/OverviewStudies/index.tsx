import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Content from "../Content";

import { Description, Divf } from "./styles"
import { GiGreekTemple } from 'react-icons/gi';
import { FaGraduationCap } from 'react-icons/fa';
import { BiGroup } from 'react-icons/bi';
import ProgressBar from "../ProgressBar";
import { Link } from "react-router-dom";





const OverviewStudies = () => {
  const inProgress = "23%"
  const completed = "60%"
  const late = "17%"
  return (
    <Content>
      <Box>
        <BoxHeader>
          <h3>Estudos</h3>
          <Button><Link to='/studies'>Ver todos</Link></Button>
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
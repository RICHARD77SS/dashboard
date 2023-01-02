import { Link } from "react-router-dom";
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Content from "../Content";

import { Buttonb, Anotation, Mural, MuralContent, Scroll } from './styles';
import { useAxios } from "../../hooks/useAxios";

const OverviewSchedules = () => {
  const { data: dataText } = useAxios('muralstext')
  const { data: dataImage } = useAxios('muralsimage')
  const { data: dataAnotation } = useAxios('anotations')


  return (
    <Content>
      <Box>
        <BoxHeader title='Mural'>
          <Button><Link to='/schedulewarnings' >Ver mais</Link></Button>

        </BoxHeader>
        <BoxContent width="400px">
          <Button className='control left' type='button'>l</Button>
          {dataText?.muralsText.length + dataImage?.muralsImage.length !== 0 ?
            <Scroll id='scrool'>
              {dataText?.muralsText.map((text: any, index: number) => {
                return (
                  <Mural key={index}>
                    <MuralContent backColor={text.backColor} textColor={text.textColor}>
                      <h3>{text.name}</h3>
                      <h3>{text.description}</h3>
                    </MuralContent>
                  </Mural>
                )
              })}
              {dataImage?.muralsImage.map((image: any, index: number) => {
                return (
                  <Mural key={index}>
                    <MuralContent >
                      <img src={image.image} alt="" />
                    </MuralContent>
                  </Mural>
                )
              })}
            </Scroll>
            :
            <>
              <h4>Não há dados disponiveis</h4>
              <Buttonb><Link to='/schedulewarnings' >+Adicionar items</Link></Buttonb>
            </>
          }
          <Button className='control right' type='button'>p</Button>

        </BoxContent>
      </Box>
      <Box>
        <BoxHeader title='Calendário'>
          <Button><Link to='/schedulecalendar'>Ver mais</Link></Button>
        </BoxHeader>
        <BoxContent width="400px">
          <h4>Não há dados disponiveis</h4>
          <Buttonb><Link to='/schedulecalendar' >+Adicionar items</Link></Buttonb>
        </BoxContent>
      </Box>
      <Box>
        <BoxHeader title='Anotações'>
          <Button><Link to='/scheduleanotation'>Ver mais</Link></Button>
        </BoxHeader>
        <BoxContent width="400px">
          {dataAnotation?.anotations.length !== 0 ? dataAnotation?.anotations.map((anotations: any, index: number) => {
            return (
              <>
                <Anotation key={index} >
                  <h3>{anotations.name}</h3>
                </Anotation>
              </>
            )
          })
            :
            <Buttonb><Link to='/scheduleanotation' >+Adicionar items</Link></Buttonb>
          }
        </BoxContent>
      </Box>
    </Content>
  )
}

export default OverviewSchedules;
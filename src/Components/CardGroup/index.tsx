

import { Link } from 'react-router-dom';
import { useAxios } from '../../hooks/useAxios';
import { Card, CardBg, CardImg, Liders, SubLiderImg, LiderImg } from './styles'

interface Props {
  bg?: string;
  image?: string;
  name?: string;
  children?: React.ReactNode;
  lider1?: string;
  lider2?: string;
  lider3?: string;
  lider1Image?: string;
  lider2Image?: string;
  lider3Image?: string;
}
const CardGroup = (Props: Props) => {
  const { data } = useAxios('person')
  let index1 = data?.person.map((person: any, index: number) => person.name === Props.lider1 ? index : -1).filter((i: any) => i !== -1)
  let index2 = data?.person.map((person: any, index: number) => person.name === Props.lider2 ? index : -1).filter((i: any) => i !== -1)
  let index3 = data?.person.map((person: any, index: number) => person.name === Props.lider3 ? index : -1).filter((i: any) => i !== -1)
  return (
    <Card >
      <CardBg>
        <img src={Props.bg} alt="" />
      </CardBg>
      <CardImg>
        <img src={Props.image} alt="" />
      </CardImg>
      <h4>{Props.name}</h4>
      <p>Liderança:</p>
      <Liders>
        <SubLiderImg>
          <Link to={`/persons/details/${index2}`}>
            <img src={Props.lider2Image} alt="" />
            <p><pre>{Props.lider2}</pre></p>
          </Link>
        </SubLiderImg>
        <LiderImg>
          <Link to={`/persons/details/${index1}`}>
            <img src={Props.lider1Image} alt="" />
            <p><pre>{Props.lider1}</pre></p>
          </Link>
        </LiderImg>
        <SubLiderImg>
          <Link to={`/persons/details/${index3}`}>

            <img src={Props.lider3Image} alt="" />
            <p><pre>{Props.lider3}</pre></p>
          </Link>
        </SubLiderImg>
      </Liders>
      {Props.children}
    </Card>
  )
}

export default CardGroup;
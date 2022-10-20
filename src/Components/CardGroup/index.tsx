
import Button from '../Button';
import { Card, CardBg, CardImg, Liders, SubLiderImg, LiderImg } from './styles'


interface Props {
  bg?: string;
  image?: string;
  name?: string;
  children?: React.ReactNode;
}
const CardGroup = (Props:Props) => {
  return (
    <Card >
      <CardBg>
        <img src={Props.bg} alt="" />
      </CardBg>
      <CardImg>
        <img src={Props.image} alt="" />
      </CardImg>
      <h4>{Props.name}</h4>
      <p>0 pessoas</p>
      <p>Liderança:</p>
      <Liders>
        <SubLiderImg>
          <img src="https://img.freepik.com/fotos-gratis/mulher-de-negocios-executivo-em-um-escritorio_1303-16020.jpg?w=740&t=st=1663694328~exp=1663694928~hmac=510f0aaa58d630452c9bd0e7ac087d41af956778c00d5398202f1bb8b83ea1bb" alt="" />
        </SubLiderImg>
        <LiderImg>
          <img src="https://img.freepik.com/fotos-gratis/mulher-de-negocios-executivo-em-um-escritorio_1303-16020.jpg?w=740&t=st=1663694328~exp=1663694928~hmac=510f0aaa58d630452c9bd0e7ac087d41af956778c00d5398202f1bb8b83ea1bb" alt="" />
        </LiderImg>
        <SubLiderImg>
          <img src="https://img.freepik.com/fotos-gratis/mulher-de-negocios-executivo-em-um-escritorio_1303-16020.jpg?w=740&t=st=1663694328~exp=1663694928~hmac=510f0aaa58d630452c9bd0e7ac087d41af956778c00d5398202f1bb8b83ea1bb" alt="" />
        </SubLiderImg>
      </Liders>
      {Props.children}
    </Card>
  )
}

export default CardGroup;
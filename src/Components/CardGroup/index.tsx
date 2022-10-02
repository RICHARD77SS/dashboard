
import Button from '../Button';
import { Card, CardBg, CardImg, Liders, SubLiderImg, LiderImg } from './styles'

const CardGroup = () => {
  return (
    <Card>
      <CardBg>
        <img src="https://img.freepik.com/vetores-gratis/juventude-plana-pessoas-abracando-juntos_52683-13322.jpg?w=740&t=st=1663693866~exp=1663694466~hmac=e0160b834b8bc53200224a2d0c6e2318b32138fbc2add06e7b49d4837cc5227b" alt="" />
      </CardBg>
      <CardImg>
        <img src="https://img.freepik.com/vetores-gratis/ele-ressuscitou-letras-contra-um-fundo-de-nuvens-e-sol-plano-de-fundo-para-parabens-pela-ressurreicao-de-cristo-ilustracao-vetorial-eps10_87521-2831.jpg?w=740&t=st=1663708091~exp=1663708691~hmac=dd44f2ad46aa3924458538b14d54ed56498aec24b49bd0e556746328697f4207" alt="" />
      </CardImg>
      <h4>Group name</h4>
      <p>0 pessoas</p>
      <p>Liderança</p>
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
      <Button>Visualizar</Button>
    </Card>
  )
}

export default CardGroup;
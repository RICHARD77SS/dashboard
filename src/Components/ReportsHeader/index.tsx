import Button from '../Button';
import { Header, Foto, Block } from './styles'


interface Props {
  logo?: string;
  corporation?: string;
  reportsName?: string;
}
const ReportsHeader = (Props:Props) => {
  return (
    <Header>
      <Foto>
        <img src={Props.logo} alt="" />
      </Foto>
      <Block>
        <h3>{Props.corporation}</h3>
        <h4>Relatorio: {Props.reportsName}</h4>
      </Block>
      <Button>Imprimir</Button>
    </Header>
  )
}

export default ReportsHeader;
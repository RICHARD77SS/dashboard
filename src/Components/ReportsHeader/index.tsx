import Button from '../Button';
import { Header, Foto, Block } from './styles'


interface Props {
  logo?: string;
  corporation?: string;
  reportsName?: string;
}
const ReportsHeader = ({logo, corporation, reportsName}:Props) => {
  return (
    <Header>
      <Foto>
        <img src={logo} alt="" />
      </Foto>
      <Block>
        <h3>{corporation}</h3>
        <h4>Relatorio: {reportsName}</h4>
      </Block>
      <Button>Imprimir</Button>
    </Header>
  )
}

export default ReportsHeader;
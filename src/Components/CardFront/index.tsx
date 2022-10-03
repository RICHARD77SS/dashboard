import InputBlock from "../InputBlock"

import { CardFronts } from "./styles"

interface Props {
  cardBg?: string;
}
const CardFront = ({ cardBg }: Props) => {
  return (
    <CardFronts cardBg={cardBg}>
      <img src="" alt="" />
      <InputBlock>
        <img src="" alt="" />
        <p>12384</p>
      </InputBlock>
      <h3>title</h3>
      <span>Local</span>
      <h4>Cartão de membro</h4>
      <InputBlock>
        <h5>Nome completo</h5>
        <p>Nome here</p>
      </InputBlock>
      <InputBlock>
        <h5>Cargos</h5>
        <p>Diretor</p>
      </InputBlock>
      <InputBlock>
        <h5>Estado civil</h5>
        <p>Casado(a)</p>
      </InputBlock>
      <InputBlock>
        <h5>Data de nascimento</h5>
        <p>30/08/2000</p>
      </InputBlock>
    </CardFronts>
  )
}

export default CardFront;
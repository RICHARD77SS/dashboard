import React from 'react'
import InputBlock from "../InputBlock"

import { CardFronts, Options, Flex } from "./styles"
import { PersonalCardContext } from '../../contexts/personalCardContext';

interface Props {
  cardBg?: string;
  bgColor?: string;
  titleColor?: string;
  textColor?: string;
  spanColor?: string;
}
const CardFront = ({ cardBg, bgColor, titleColor, textColor, spanColor }: Props) => {
  const {
    onDragStart,
    onDragEnd,
    onDragOver,
    onDrop,
    onDragEnter,
    onDragLeave,
  } = React.useContext(PersonalCardContext)

  return (
    <Flex>
      <CardFronts
        cardBg={cardBg}
        bgColor={bgColor}
        titleColor={titleColor}
        textColor={textColor}
        spanColor={spanColor}
        id='drop-zone'
        className='drop-zone'
        onDragOver={(event) => onDragOver(event)}
        onDragEnter={(event) => onDragEnter(event)}
        onDragLeave={(event) => onDragLeave(event)}
        onDrop={(event) => onDrop(event)}
      >
      </CardFronts>
      <Options>
        <InputBlock>
          <img src="" alt="Person"
            id='draggable-1'
            draggable='true'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}
          />
          <img src="" alt="Logo"
            id='draggable-2'
            draggable='true'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}
          />
          <p
            id='draggable-3'
            draggable='true'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}
          >12384</p>
        </InputBlock>
        <h2
          id='draggable-4'
          draggable='true'
          onDragStart={(event) => onDragStart(event)}
          onDragEnd={(event) => onDragEnd(event)}
        >title</h2>
        <span
          id='draggable-5'
          draggable='true'
          onDragStart={(event) => onDragStart(event)}
          onDragEnd={(event) => onDragEnd(event)}
        >Local</span>
        <h3
          id='draggable-6'
          draggable='true'
          onDragStart={(event) => onDragStart(event)}
          onDragEnd={(event) => onDragEnd(event)}
        >Cartão de membro</h3>
        <InputBlock >
          <h5
            id='draggable-7'
            draggable='true'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}
          >Nome completo</h5>
          <p
            draggable='true'
            id='draggable-8'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}>Nome here</p>
        </InputBlock>
        <InputBlock>
          <h5
            id='draggable-9'
            draggable='true'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}
          >Cargos</h5>
          <p
            id='draggable-10'
            draggable='true'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}
          >Diretor</p>
        </InputBlock>
        <InputBlock>
          <h5
            id='draggable-11'
            draggable='true'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}
          >Estado civil</h5>
          <p
            id='draggable-12'
            draggable='true'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}
          >Casado(a)</p>
        </InputBlock>
        <InputBlock>
          <h5
            id='draggable-13'
            draggable='true'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}
          >Data de nascimento</h5>
          <p
            id='draggable-14'
            draggable='true'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}
          >30/08/2000</p>
        </InputBlock>
      </Options>
    </Flex>
  )
}

export default CardFront;
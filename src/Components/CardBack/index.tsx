import React from 'react'
import InputBlock from "../InputBlock"

import { CardBacks, Options, Flex } from "./styles"
import { PersonalCardContext } from './../../contexts/personalCardContext';

interface Props {
  cardBg?: string;
  bgColor?: string;
  titleColor?: string;
  textColor?: string;
  spanColor?: string;
}

const CardBack = ({ cardBg, bgColor, titleColor, textColor, spanColor }: Props) => {
  const {
    backOnDragStart,
    backOnDragEnd,
    backOnDragOver,
    backOnDrop,
    backOnDragEnter,
    backOnDragLeave,
  } = React.useContext(PersonalCardContext)

  return (
    <Flex>
      <CardBacks cardBg={cardBg}
        bgColor={bgColor}
        titleColor={titleColor}
        textColor={textColor}
        spanColor={spanColor}
        id='drop-zone'
        className='drop-zone'
        onDragOver={(event) => backOnDragOver(event)}
        onDragEnter={(event) => backOnDragEnter(event)}
        onDragLeave={(event) => backOnDragLeave(event)}
        onDrop={(event) => backOnDrop(event)}
      >
      </CardBacks>
      <Options>
        <img src="" alt=""
          id='dragabble-1'
          draggable='true'
          onDragStart={(event) => backOnDragStart(event)}
          onDragEnd={(event) => backOnDragEnd(event)}
        />
        <InputBlock>
          <img src="" alt=""
            id='dragabble-2'
            draggable='true'
            onDragStart={(event) => backOnDragStart(event)}
            onDragEnd={(event) => backOnDragEnd(event)}
          />
          <p
            id='dragabble-3'
            draggable='true'
            onDragStart={(event) => backOnDragStart(event)}
            onDragEnd={(event) => backOnDragEnd(event)}
          >12384</p>
        </InputBlock>
        <h3
          id='dragabble-4'
          draggable='true'
          onDragStart={(event) => backOnDragStart(event)}
          onDragEnd={(event) => backOnDragEnd(event)}
        >title</h3>
        <span
          id='dragabble-5'
          draggable='true'
          onDragStart={(event) => backOnDragStart(event)}
          onDragEnd={(event) => backOnDragEnd(event)}
        >Local</span>
        <h4
          id='dragabble-6'
          draggable='true'
          onDragStart={(event) => backOnDragStart(event)}
          onDragEnd={(event) => backOnDragEnd(event)}
        >Cartão de membro</h4>
        <InputBlock>
          <h5
            id='dragabble-7'
            draggable='true'
            onDragStart={(event) => backOnDragStart(event)}
            onDragEnd={(event) => backOnDragEnd(event)}
          >Nome completo</h5>
          <p draggable>Nome here</p>
        </InputBlock>
        <InputBlock>
          <h5
            id='dragabble-8'
            draggable='true'
            onDragStart={(event) => backOnDragStart(event)}
            onDragEnd={(event) => backOnDragEnd(event)}
          >Cargos</h5>
          <p
            id='dragabble-9'
            draggable='true'
            onDragStart={(event) => backOnDragStart(event)}
            onDragEnd={(event) => backOnDragEnd(event)}
          >Diretor</p>
        </InputBlock>
        <InputBlock>
          <h5
            id='dragabble-10'
            draggable='true'
            onDragStart={(event) => backOnDragStart(event)}
            onDragEnd={(event) => backOnDragEnd(event)}
          >Estado civil</h5>
          <p
            id='dragabble-11'
            draggable='true'
            onDragStart={(event) => backOnDragStart(event)}
            onDragEnd={(event) => backOnDragEnd(event)}
          >Casado(a)</p>
        </InputBlock>
        <InputBlock>
          <h5
            id='dragabble-12'
            draggable='true'
            onDragStart={(event) => backOnDragStart(event)}
            onDragEnd={(event) => backOnDragEnd(event)}
          >Data de nascimento</h5>
          <p
            id='dragabble-13'
            draggable='true'
            onDragStart={(event) => backOnDragStart(event)}
            onDragEnd={(event) => backOnDragEnd(event)}
          >30/08/2000</p>
        </InputBlock>
      </Options>
    </Flex>
  )
}

export default CardBack;
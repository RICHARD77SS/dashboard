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
        <div className='draggable' id='dragabble-1'
          draggable='true'
          onDragStart={(event) => backOnDragStart(event)}
          onDragEnd={(event) => backOnDragEnd(event)}>
          <p
          >Endereço</p>
          <h4
          >Rua : rest</h4>
        </div>
        <InputBlock>
          <div className='draggable' id='dragabble-2'
            draggable='true'
            onDragStart={(event) => backOnDragStart(event)}
            onDragEnd={(event) => backOnDragEnd(event)}>
            <p>Telefone 1</p>
            <h4>(11)090910901</h4>
          </div>
          <div className='draggable' id='dragabble-3'
            draggable='true'
            onDragStart={(event) => backOnDragStart(event)}
            onDragEnd={(event) => backOnDragEnd(event)}>
            <p>Telefone 2</p>
            <h4>(11)090910901</h4>
          </div>
        </InputBlock>
        <div className='draggable' id='dragabble-4'
          draggable='true'
          onDragStart={(event) => backOnDragStart(event)}
          onDragEnd={(event) => backOnDragEnd(event)}>
          <p>Email</p>
          <h4
          >@email.com</h4>
        </div>
        <div
          className='draggable'
          id='dragabble-5'
          draggable='true'
          onDragStart={(event) => backOnDragStart(event)}
          onDragEnd={(event) => backOnDragEnd(event)}
        >
          <p>Data de converção</p>
          <h4>21/02/2000</h4>
        </div>
        <div className='draggable'
          id='dragabble-6'
          draggable='true'
          onDragStart={(event) => backOnDragStart(event)}
          onDragEnd={(event) => backOnDragEnd(event)}
        >
          <p>Data de batismo</p>
          <h4>20/03/2003</h4>
        </div>
        <div className='draggable'
          id='dragabble-7'
          draggable='true'
          onDragStart={(event) => backOnDragStart(event)}
          onDragEnd={(event) => backOnDragEnd(event)}
        >
          <p>Faixa etária</p>
          <h4>Adulto</h4>
        </div>


        <div className='draggable'
          id='dragabble-8'
          draggable='true'
          onDragStart={(event) => backOnDragStart(event)}
          onDragEnd={(event) => backOnDragEnd(event)}
        >
          <p>Documento 1</p>
          <h4>123321123</h4>
        </div>
        <div className='draggable'
          id='dragabble-9'
          draggable='true'
          onDragStart={(event) => backOnDragStart(event)}
          onDragEnd={(event) => backOnDragEnd(event)}
        >
          <p>Documento 2</p>
          <h4>433214234</h4>
        </div>

        <div className='draggable'
          id='dragabble-10'
          draggable='true'
          onDragStart={(event) => backOnDragStart(event)}
          onDragEnd={(event) => backOnDragEnd(event)}
        >
          <p>Escolaridade</p>
          <h4>Ensino médio</h4>
        </div>
        <div className='draggable'
          id='dragabble-11'
          draggable='true'
          onDragStart={(event) => backOnDragStart(event)}
          onDragEnd={(event) => backOnDragEnd(event)}
        >
          <p>Data de emissão</p>
          <h4>14/08/2023</h4>
        </div>

        <div className='draggable'
          id='dragabble-12'
          draggable='true'
          onDragStart={(event) => backOnDragStart(event)}
          onDragEnd={(event) => backOnDragEnd(event)}
        >
          <p>Grupos</p>
          <h4>res</h4>
        </div>
        <div className='draggable'
          id='dragabble-13'
          draggable='true'
          onDragStart={(event) => backOnDragStart(event)}
          onDragEnd={(event) => backOnDragEnd(event)}
        >
          <p>Validade</p>
          <h4>1 ano</h4>
        </div>
      </Options>
    </Flex>
  )
}

export default CardBack;
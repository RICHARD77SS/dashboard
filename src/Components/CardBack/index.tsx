
import InputBlock from "../InputBlock"

import { CardBacks, Options, Flex } from "./styles"

interface Props {
  cardBg?: string;
}

function onDragStart(event: any) {
  event.dataTransfer.setData('text/plain', event.target.id)
  event.dataTransfer.setData('left', event.clientX)
  event.dataTransfer.setData('top', event.clientY)
  event.currentTarget.style.background = 'yellow'
}
function onDragEnd(event: any) {
  event.currentTarget.style.background = 'transparent'
}
function onDragOver(event: any) {
  event.preventDefault();
}

function onDrop(event: any) {
  event.preventDefault()
  var width = window.innerWidth;
  const id = event.dataTransfer.getData('text');
  const draggableElement = document.getElementById(id)
  const rect = document.getElementById(id)?.getBoundingClientRect()

  let left = event.dataTransfer.getData('left') - rect!.left
  let top = event.dataTransfer.getData('top') - rect!.top

  draggableElement!.style.left = `${(event.clientX - left) / width * 100}%`
  draggableElement!.style.top = `${event.clientY - top}px`

  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  event.dataTransfer.clearData();
}
const CardBack = ({ cardBg }: Props) => {
  return (
    <Flex>
      <CardBacks cardBg={cardBg} className='drop-zone' onDragOver={(event) => onDragOver(event)} onDrop={(event) => onDrop(event)}>

      </CardBacks>
      <Options>
        <img src="" alt=""
          id='dragabble-1'
          draggable='true'
          onDragStart={(event) => onDragStart(event)}
          onDragEnd={(event) => onDragEnd(event)}
        />
        <InputBlock>
          <img src="" alt=""
            id='dragabble-2'
            draggable='true'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}
          />
          <p
            id='dragabble-3'
            draggable='true'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}
          >12384</p>
        </InputBlock>
        <h3
          id='dragabble-4'
          draggable='true'
          onDragStart={(event) => onDragStart(event)}
          onDragEnd={(event) => onDragEnd(event)}
        >title</h3>
        <span
          id='dragabble-5'
          draggable='true'
          onDragStart={(event) => onDragStart(event)}
          onDragEnd={(event) => onDragEnd(event)}
        >Local</span>
        <h4
          id='dragabble-6'
          draggable='true'
          onDragStart={(event) => onDragStart(event)}
          onDragEnd={(event) => onDragEnd(event)}
        >Cartão de membro</h4>
        <InputBlock>
          <h5
            id='dragabble-7'
            draggable='true'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}
          >Nome completo</h5>
          <p draggable>Nome here</p>
        </InputBlock>
        <InputBlock>
          <h5
            id='dragabble-8'
            draggable='true'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}
          >Cargos</h5>
          <p
            id='dragabble-9'
            draggable='true'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}
          >Diretor</p>
        </InputBlock>
        <InputBlock>
          <h5
            id='dragabble-10'
            draggable='true'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}
          >Estado civil</h5>
          <p
            id='dragabble-11'
            draggable='true'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}
          >Casado(a)</p>
        </InputBlock>
        <InputBlock>
          <h5
            id='dragabble-12'
            draggable='true'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}
          >Data de nascimento</h5>
          <p
            id='dragabble-13'
            draggable='true'
            onDragStart={(event) => onDragStart(event)}
            onDragEnd={(event) => onDragEnd(event)}
          >30/08/2000</p>
        </InputBlock>
      </Options>
    </Flex>
  )
}

export default CardBack;
import React from 'react'
import InputBlock from "../InputBlock"

import { CardFronts, Options, Flex } from "./styles"

interface Props {
  cardBg?: string;
  bgColor?: string;
  titleColor?: string;
  textColor?: string;
  spanColor?: string;
}

const CardFront = ({ cardBg, bgColor, titleColor, textColor, spanColor }: Props) => {

  const [elementos, setElementos] = React.useState<any[]>([
    {
      id: 'draggable-1',
      x: '25.893462059620596%',
      y: '473.3828125px'
    },
    {
      id: 'draggable-2',
      x: '25.38039182475158%',
      y: '278.4140625px'
    },
    {
      id: 'draggable-3',
      x: '26.799627371273715%',
      y: '574.453125px'
    },
    {
      id: 'draggable-4',
      x: '46.85382791327913%',
      y: '272.453125px'
    },
    {
      id: 'draggable-5',
      x: '47.16576332429991%',
      y: '311.4375px'
    },
    {
      id: 'draggable-6',
      x: '44.50513775971093%',
      y: '344.453125px'
    },
    {
      id: 'draggable-7',
      x: '37.72724706413731%',
      y: '430.453125px'
    },
    {
      id: 'draggable-8',
      x: '37.72724706413731%',
      y: '470.9375px'
    },
    {
      id: 'draggable-9',
      x: '37.72724706413731%',
      y: '500.9453125px'
    },
    {
      id: 'draggable-10',
      x: '37.72724706413731%',
      y: '530.9453125px'
    },
    {
      id: 'draggable-11',
      x: '37.72724706413731%',
      y: '560.9453125px'
    },
    {
      id: 'draggable-12',
      x: '37.72724706413731%',
      y: '600.9453125px'
    },
    {
      id: 'draggable-13',
      x: '56.17589769647696%',
      y: '564.9296875px'
    },
    {
      id: 'draggable-14',
      x: '56.60992547425474%',
      y: '592.9453125px'
    },
  ])

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
    let data = [...elementos]
    data[id.split('-')[1] - 1].x = `${(event.clientX - left) / width * 100}%`
    data[id.split('-')[1] - 1].y = `${event.clientY - top}px`
    setElementos(data)
  }

  function set(id: any, x: any, y: any) {
    const draggableElement = document.getElementById(id)
    draggableElement!.style.left = x
    draggableElement!.style.top = y

    const dropzone = document.getElementById('drop-zone')
    dropzone?.appendChild(draggableElement!)
  }

  React.useEffect(() => {
    if (elementos) {
      elementos?.forEach((element: any) => set(element.id, element.x, element.y))
    }
  }, [elementos])

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
        onDrop={(event) => onDrop(event)} >
      </CardFronts>
      <Options>
        <img src="" alt="Person"
          id='draggable-1'
          draggable='true'
          onDragStart={(event) => onDragStart(event)}
          onDragEnd={(event) => onDragEnd(event)}
        />
        <InputBlock>
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
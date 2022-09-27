import React from 'react'
import { Li, Button } from './styles';

interface Props {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void
}

const TabTitle = (Props: Props) => {
  return (
    <Li>
      <Button className={Props.title} onClick={() => Props.setSelectedTab(Props.index)}><pre>{Props.title}</pre></Button>
    </Li>
  )
}

export default TabTitle
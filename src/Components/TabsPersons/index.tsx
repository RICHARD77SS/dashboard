import TabTitle from '../TabTitle';
import { useState, ReactElement } from 'react';
import { TabsButtons, TabContainer } from './styles'
interface Props {
  children: ReactElement[]
}

const TabsPerson = (Props: Props) => {
  const [selectedTab, setSelectedTab] = useState(0)

  if (selectedTab === 0) {
    document.querySelector('.Informações')?.classList.add('active')
  } else {
    document.querySelector('.Informações')?.classList.remove('active')
  }
  if (selectedTab === 1) {
    document.querySelector('.Campos')?.classList.add('active')
  } else {
    document.querySelector('.Campos')?.classList.remove('active')
  }
  if (selectedTab === 2) {
    document.querySelector('.Financeiro')?.classList.add('active')
  } else {
    document.querySelector('.Financeiro')?.classList.remove('active')
  }
  if (selectedTab === 3) {
    document.querySelector('.Editar')?.classList.add('active')
  } else {
    document.querySelector('.Editar')?.classList.remove('active')
  }
  if (selectedTab === 4) {
    document.querySelector('.Permissões')?.classList.add('active')
  } else {
    document.querySelector('.Permissões')?.classList.remove('active')
  }
  if (selectedTab === 5) {
    document.querySelector('.Remover')?.classList.add('active')
  } else {
    document.querySelector('.Remover')?.classList.remove('active')
  }
  return (
    <TabContainer>
      <TabsButtons>
        {Props.children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </TabsButtons>
      {Props.children[selectedTab]}
    </TabContainer>
  )
}

export default TabsPerson;
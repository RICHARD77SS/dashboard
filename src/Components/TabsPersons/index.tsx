import TabTitle from '../TabTitle';
import { useState, ReactElement } from 'react';
import { TabsButtons, TabContainer } from './styles'
interface Props {
  children: ReactElement[]
}

const TabsPerson = (Props: Props) => {
  const [selectedTab, setSelectedTab] = useState(0)

  if (selectedTab === 0) {
    document.querySelector('.Todos')?.classList.add('active')
  } else {
    document.querySelector('.Todos')?.classList.remove('active')
  }
  if (selectedTab === 1) {
    document.querySelector('.Clientes')?.classList.add('active')
  } else {
    document.querySelector('.Clientes')?.classList.remove('active')
  }
  if (selectedTab === 2) {
    document.querySelector('.Amigos')?.classList.add('active')
  } else {
    document.querySelector('.Amigos')?.classList.remove('active')
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
import TabTitle from '../TabTitle';
import { useState, ReactElement } from 'react';
import { TabsButtons, TabContainer } from './styles'
interface Props {
  children: ReactElement[]
}

const Tabs = (Props: Props) => {
  const [selectedTab, setSelectedTab] = useState(0)

  if (selectedTab === 0) {
    document.querySelector('.Todos')?.classList.add('active')
  } else {
    document.querySelector('.Todos')?.classList.remove('active')
  }
  if (selectedTab === 1) {
    document.querySelector('.Criar')?.classList.add('active')
  } else {
    document.querySelector('.Criar')?.classList.remove('active')
  }

  console.log(Props.children)
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

export default Tabs;
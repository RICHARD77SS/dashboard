import React from 'react'
import TabTitle from '../TabTitle';
import { TabsButtons, TabContainer } from './styles'
interface Props {
  children: React.ReactElement[]
}

const TabsBirthday = (Props: Props) => {
  const [selectedTab, setSelectedTab] = React.useState(0)

  if (selectedTab === 0) {
    document.querySelector('.Jan')?.classList.add('active')
  } else {
    document.querySelector('.Jan')?.classList.remove('active')
  }
  if (selectedTab === 1) {
    document.querySelector('.Fev')?.classList.add('active')
  } else {
    document.querySelector('.Fev')?.classList.remove('active')
  }
  if (selectedTab === 2) {
    document.querySelector('.Mar')?.classList.add('active')
  } else {
    document.querySelector('.Mar')?.classList.remove('active')
  }
  if (selectedTab === 3) {
    document.querySelector('.Abr')?.classList.add('active')
  } else {
    document.querySelector('.Abr')?.classList.remove('active')
  }
  if (selectedTab === 4) {
    document.querySelector('.Mai')?.classList.add('active')
  } else {
    document.querySelector('.Mai')?.classList.remove('active')
  }
  if (selectedTab === 5) {
    document.querySelector('.Jun')?.classList.add('active')
  } else {
    document.querySelector('.Jun')?.classList.remove('active')
  }
  if (selectedTab === 6) {
    document.querySelector('.Jul')?.classList.add('active')
  } else {
    document.querySelector('.Jul')?.classList.remove('active')
  }
  if (selectedTab === 7) {
    document.querySelector('.Ago')?.classList.add('active')
  } else {
    document.querySelector('.Ago')?.classList.remove('active')
  }
  if (selectedTab === 8) {
    document.querySelector('.Set')?.classList.add('active')
  } else {
    document.querySelector('.Set')?.classList.remove('active')
  }
  if (selectedTab === 9) {
    document.querySelector('.Out')?.classList.add('active')
  } else {
    document.querySelector('.Out')?.classList.remove('active')
  }
  if (selectedTab === 10) {
    document.querySelector('.Nov')?.classList.add('active')
  } else {
    document.querySelector('.Nov')?.classList.remove('active')
  }
  if (selectedTab === 11) {
    document.querySelector('.Dez')?.classList.add('active')
  } else {
    document.querySelector('.Dez')?.classList.remove('active')
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

export default TabsBirthday;
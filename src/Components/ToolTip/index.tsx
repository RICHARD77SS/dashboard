import { Content } from './styles'


interface Props {
  children?: React.ReactNode;
}
const ToolTip = ({children}:Props) => {
  return (
    <Content>
      {children}
    </Content>
  )
}

export default ToolTip
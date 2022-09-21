

import ReportsHeader from '../ReportsHeader';


import { Container, Content, Map} from './styles';



const GroupReportsGroupMap = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Locais dos grupos' />
      <Content>
        <Map />
      </Content>
    </Container>
  )
}

export default GroupReportsGroupMap;
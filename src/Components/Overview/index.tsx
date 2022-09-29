import OverviewSchedules from "../OverviewSchedules"
import OverviewSite from "../OverviewSite"
import OverviewPersons from "../OverviewPersons"
import OverviewGroups from "../OverviewGroups"
import Container from "../Container"
import OverviewStudies from "../OverviewStudies"

const Overview = () => {
  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <OverviewSchedules />
      <OverviewSite />
      <OverviewPersons />
      <OverviewGroups />
      <OverviewStudies />
      <br />
      <br />
      <br />
      <br />
    </Container>
  )
}
export default Overview

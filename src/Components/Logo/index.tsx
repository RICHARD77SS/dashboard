import {NavLink} from 'react-router-dom'
import { Image } from "./styles";
import { MdOutlineDashboardCustomize } from 'react-icons/md';

const Logo = () => {
  return (
    <NavLink to='/'>
      <Image>
        <MdOutlineDashboardCustomize />
      </Image>
    </NavLink>
  )
}

export default Logo
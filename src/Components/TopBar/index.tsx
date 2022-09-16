import { Top } from "./styled";
import { Outlet } from 'react-router-dom';
import Wrapper from "../Wrapper";
import Header from "../Header";
import Navbar from "../Navbar";

const TopBar = () => {
  return (
    <Wrapper>
      <Top>
        <Header />
        <Navbar />
      </Top>
      <Outlet />
    </Wrapper>
  )
}

export default TopBar;
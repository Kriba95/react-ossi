import styled from "styled-components";
import { NavLink as Linkitys } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #333;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;
export const NavLink = styled(Linkitys)`
    color: #fff
    display: flex;
    align-items: center; 
    text-decoration: none;
    padding: 0 1rem

`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
`;

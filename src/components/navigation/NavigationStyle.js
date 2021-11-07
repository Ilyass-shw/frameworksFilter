import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
  background-color: #2f1793;
  height: 127px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 4px 0 rgb(0 0 0 / 16%);
`;
export const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  max-width: 50px;
`;
export const MenuButton = styled.li`
  a {
    color: white;
    background-color: #26dac5;
    border-radius: 20px;
    padding: 5px 8px;
    margin: 5px;     
    font-size: 1.2rem;

    @media (min-width: 460px) {
    font-size: 1.4rem;
    margin: 17px;
    }   
  }
`;
export const MenuLink = styled(NavLink)`
  background-color: #26dac5;
  border-radius: 1px;
`;

import React from 'react';
import { MenuLink, NavBar, MenuList, MenuButton } from './NavigationStyle';

const Navigation = () => {
  return (
    <NavBar>
      <MenuList>
        <MenuButton>
          <MenuLink to="/">Home</MenuLink>
        </MenuButton>
        <MenuButton>
          <MenuLink to="/modeler">Modeler</MenuLink>
        </MenuButton>
        <MenuButton>
          <MenuLink to="/frameworks">Frameworks</MenuLink>
        </MenuButton>
      </MenuList>
    </NavBar>
  );
};

export default Navigation;

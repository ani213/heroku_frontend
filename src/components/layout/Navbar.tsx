import * as React from "react";
import NavItem from "./NavItem";
import NavList from "./NavList";
import HomeIcon from '@material-ui/icons/Home';
export interface NavbarProps {
  
}

const Navbar: React.FC<NavbarProps> = (props) => {
   
    return(
        <>
          <NavList>
            <NavItem title="Home" icon={<HomeIcon />}/>
          </NavList>
        </>
    )
}
export default Navbar;
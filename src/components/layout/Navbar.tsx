import * as React from "react";
import NavItem from "./NavItem";
import NavList from "./NavList";
import ListAltIcon from '@material-ui/icons/ListAlt';
import AddIcon from '@material-ui/icons/Add';
import RouteService from "../../services/route.services";
export interface NavbarProps {
  
}

const Navbar: React.FC<NavbarProps> = (props) => {

    return(
        <>
          <NavList>
            <NavItem title="Problems" icon={<ListAltIcon />} to={RouteService.dashboard.getPath()}/>
            <NavItem title="Add Problem" icon={<AddIcon />} to={RouteService.addProblem.getPath()}/>
          </NavList>
        </>
    )
}
export default Navbar;
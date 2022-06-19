import * as React from "react";
import NavItem from "./NavItem";
import NavList from "./NavList";
import RouteService from "../../services/route.services";
import GroupIcon from '@material-ui/icons/Group';
export interface SuperAdminNavbarProps {
  
}

const SuperAdminNavbar: React.FC<SuperAdminNavbarProps> = (props) => {
    return(
        <>
          <NavList>
            <NavItem title="Users" icon={<GroupIcon />} to={RouteService.superAdmin.users.getPath()}/>
           
          </NavList>
        </>
    )
}
export default SuperAdminNavbar;
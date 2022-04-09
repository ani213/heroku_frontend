import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface NavItemProps {
  readonly title:string;
  readonly icon:React.ReactNode;
  readonly to?:string;
}

const NavItem: React.FC<NavItemProps> = (props) => {
   const {title,icon,to}=props;
   const {pathname}=useLocation();
   const navigate=useNavigate();
   const handleClick=()=>{
      if(to){
        navigate(to)
      }
   }
    return(
        <>
          <ListItem button selected={pathname===to} onClick={handleClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
          </ListItem>
        </>
    )
}
export default NavItem;
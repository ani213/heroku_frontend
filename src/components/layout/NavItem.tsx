import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import * as React from "react";

export interface NavItemProps {
  readonly title:string;
  readonly icon:React.ReactNode
}

const NavItem: React.FC<NavItemProps> = (props) => {
   const {title,icon}=props;
    return(
        <>
          <ListItem button >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
        </>
    )
}
export default NavItem;
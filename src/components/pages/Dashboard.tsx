import { Button } from "@material-ui/core";
import * as React from "react";
import { useLogout } from "../../store/user/hooks";
import MainTemplate from "../template/MainTemplate";


export interface DashboardProps {
    
}

const Dashboard: React.FC<DashboardProps> = (props) => {
 const [logout]=useLogout()
  return(
    <>
      <MainTemplate>
        <h1>Dashboard</h1>
        <Button variant="contained" color="primary" onClick={()=>{logout()}}>Logout </Button>
      </MainTemplate>
    </>
  )
}

export default Dashboard;



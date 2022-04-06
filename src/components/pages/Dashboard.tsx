import * as React from "react";
import MainTemplate from "../template/MainTemplate";


export interface DashboardProps {
    
}

const Dashboard: React.FC<DashboardProps> = (props) => {
 
  return(
    <>
      <MainTemplate>
        <h1>Dashboard</h1>
      </MainTemplate>
    </>
  )
}

export default Dashboard;



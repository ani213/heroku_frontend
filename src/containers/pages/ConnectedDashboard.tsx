import * as React from 'react'
import Dashboard from "../../components/pages/Dashboard";
import { useProblem } from "../../store/problem/hooks";

const ConnectedDashboard = () => {
  const [problems,getProblems]=useProblem();
  React.useEffect(()=>{
    getProblems()
  },[]);
  return (
    <>
      <Dashboard prolems={problems}/>
    </>
  );
};
export default ConnectedDashboard;

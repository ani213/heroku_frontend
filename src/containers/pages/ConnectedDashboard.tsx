import * as React from 'react'
import Dashboard from "../../components/pages/Dashboard";
import { useProblem, useProblemTypes } from "../../store/problem/hooks";

const ConnectedDashboard = () => {
  const [problems,getProblems]=useProblem();
 const [,getProblemTypes]=useProblemTypes();

  React.useEffect(()=>{
    getProblems();
    getProblemTypes();
  },[]);
  return (
    <>
      <Dashboard problems={problems} title='All Problems' getProblems={getProblems}/>
    </>
  );
};
export default ConnectedDashboard;

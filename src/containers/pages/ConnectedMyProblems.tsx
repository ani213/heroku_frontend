import * as React from 'react'
import Dashboard from "../../components/pages/Dashboard";
import { useMyProblem } from "../../store/problem/hooks";

const ConnectedMyProblems = () => {
  const [problems,getProblems]=useMyProblem();
  React.useEffect(()=>{
    getProblems()
  },[]);
  return (
    <>
      <Dashboard problems={problems} title='My Problems'/>
    </>
  );
};
export default ConnectedMyProblems;

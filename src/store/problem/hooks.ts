import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProblem, getProblem, getProblemById } from "./action";
import { getProblemByIdSelector, getProblemSelector } from "./selector";

export function useProblem(): [ReadonlyArray<Problem>, () => void,(data:Problem)=>void] {
  const dispatch = useDispatch();
  const problems = useSelector(getProblemSelector);
  const getProblems = React.useCallback(
    () => dispatch(getProblem()),
    [dispatch]
  );
  const createProblems = React.useCallback(
    (data:Problem) => dispatch(addProblem(data)),
    [dispatch]
  );
  return [problems, getProblems,createProblems];
}

export function useProblemById(): [Problem|undefined, (data:string) => void] {
  const dispatch = useDispatch();
  const problem = useSelector(getProblemByIdSelector);
  const getProblems = React.useCallback(
    (data:string) => dispatch(getProblemById(data)),
    [dispatch]
  );
  
  return [problem, getProblems];
}

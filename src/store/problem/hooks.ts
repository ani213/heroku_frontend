import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProblem } from "./action";
import { getProblemSelector } from "./selector";

export function useProblem(): [ReadonlyArray<Problem>, () => void] {
  const dispatch = useDispatch();
  const problems = useSelector(getProblemSelector);
  const getProblems = React.useCallback(
    () => dispatch(getProblem()),
    [dispatch]
  );
  return [problems, getProblems];
}

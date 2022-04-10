import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProblem,
  getProblem,
  getProblemById,
  updateProblemRun,
} from "./action";
import { getProblemByIdSelector, getProblemSelector } from "./selector";

export function useProblem(): [
  ReadonlyArray<Problem>,
  () => void,
  (data: Problem) => void,
  (data: Problem, onComplete?: () => void) => void
] {
  const dispatch = useDispatch();
  const problems = useSelector(getProblemSelector);
  const getProblems = React.useCallback(
    () => dispatch(getProblem()),
    [dispatch]
  );
  const createProblems = React.useCallback(
    (data: Problem) => dispatch(addProblem(data)),
    [dispatch]
  );
  const updateProblem = React.useCallback(
    (data: Problem, onComplete?: () => void) =>
      dispatch(updateProblemRun(data, onComplete)),
    [dispatch]
  );
  return [problems, getProblems, createProblems, updateProblem];
}

export function useProblemById(): [
  Problem | undefined,
  (data: string) => void
] {
  const dispatch = useDispatch();
  const problem = useSelector(getProblemByIdSelector);
  const getProblems = React.useCallback(
    (data: string) => dispatch(getProblemById(data)),
    [dispatch]
  );

  return [problem, getProblems];
}

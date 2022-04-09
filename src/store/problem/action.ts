import { Action } from "redux";

export const ADD_PROBLEM='prolem/ADD_PROBLEM';
export const addProblem=(data:Problem)=>({
    type:ADD_PROBLEM,
    payload:data
})

export const SET_PROBLEMS='problem/SET_PROBLEMS';
export const setProblems=(data:ReadonlyArray<Problem>)=>({
    type:SET_PROBLEMS,
    payload:data
})
export const GET_PROBLEM='problem/GET_PROBLEM';
export const getProblem=()=>({
    type:GET_PROBLEM
})
export interface SetProbblemAction extends Action<typeof SET_PROBLEMS>{
    readonly payload:ReadonlyArray<Problem>
}


export type ProblemActions=
| SetProbblemAction
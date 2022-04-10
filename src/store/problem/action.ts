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

export const GET_PROBLEM_ID='problem/GET_PROBLEM_ID';
export const getProblemById=(data:string)=>({
    type:GET_PROBLEM_ID,
    payload:data
})
export const GET_PROBLEM_ID_COMPLETE='problem/GET_PROBLEM_ID_COMPLETE';
export const getProblemByIdComplete=(data:Problem)=>({
    type:GET_PROBLEM_ID_COMPLETE,
    payload:data
})

export interface SetProbleBYIdmAction extends Action<typeof GET_PROBLEM_ID_COMPLETE>{
    readonly payload:Problem
}

export interface SetProbblemAction extends Action<typeof SET_PROBLEMS>{
    readonly payload:ReadonlyArray<Problem>
}


export type ProblemActions=
| SetProbblemAction
| SetProbleBYIdmAction
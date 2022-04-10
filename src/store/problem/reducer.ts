import { Reducer } from "redux";
import { LOGOUT, LogoutAction } from "../user/action";
import { GET_PROBLEM_ID_COMPLETE, ProblemActions, SET_PROBLEMS } from "./action";

export interface ProblemState {
  readonly problems: ReadonlyArray<Problem>;
  readonly problem?:Problem
}
export const defaultState: ProblemState = {
  problems:[],
  problem:undefined
};

const reducer: Reducer<ProblemState, ProblemActions | LogoutAction> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case SET_PROBLEMS:
      return {
        ...state,
        problems: action.payload,
      };
    case GET_PROBLEM_ID_COMPLETE:
      return{
        ...state,
        problem:action.payload
      }  
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
};

export default reducer;

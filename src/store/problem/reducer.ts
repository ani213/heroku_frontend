import { Reducer } from "redux";
import { LOGOUT, LogoutAction } from "../user/action";
import { GET_PROBLEM_ID_COMPLETE, ProblemActions, SET_MY_PROBLEMS, SET_PROBLEMS,GET_PROBLEM_TYPE_COMPLETE } from "./action";

export interface ProblemState {
  readonly problems: ReadonlyArray<Problem>;
  readonly problem?:Problem,
  readonly myProblems: ReadonlyArray<Problem>;
  readonly problemTypes:ReadonlyArray<ProblemType>

}
export const defaultState: ProblemState = {
  problems:[],
  problem:undefined,
  myProblems:[],
  problemTypes:[]
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
    case SET_MY_PROBLEMS:
      return{
        ...state,
        myProblems:action.payload
      }  
    case GET_PROBLEM_TYPE_COMPLETE:  
     return{
       ...state,
       problemTypes:action.payload
     }
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
};

export default reducer;

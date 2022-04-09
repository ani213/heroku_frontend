import { Reducer } from "redux";
import { LOGOUT, LogoutAction } from "../user/action";
import { ProblemActions, SET_PROBLEMS } from "./action";

export interface ProblemState {
  readonly problems: ReadonlyArray<Problem>;
}
export const defaultState: ProblemState = {
  problems:[]
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
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
};

export default reducer;

import { Reducer } from "redux";
import { LOGOUT, LogoutAction } from "../user/action";
import {
  HIDE_ERROR,
  HIDE_LOADER,
  LayoutActions,
  SET_ERROR,
  SET_THEME,
  SHOW_LOADER,
} from "./action";
export interface LayoutState {
  readonly error: ERROR | undefined;
  readonly errorModalYN: boolean;
  readonly isLoading: boolean;
  readonly theme:MyTheme
}
export const defaultState: LayoutState = {
  error: undefined,
  errorModalYN: false,
  isLoading: false,
  theme:'light'
};

const reducer: Reducer<LayoutState, LayoutActions | LogoutAction> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        errorModalYN: true,
      };
    case HIDE_ERROR:
      return {
        ...state,
        error: undefined,
        errorModalYN: false,
      };
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    case SET_THEME:
      return{
        ...state,
        theme:action.payload
      }
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
};

export default reducer;

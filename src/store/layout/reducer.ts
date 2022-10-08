import { Reducer } from "redux";
import { LOGOUT, LogoutAction } from "../user/action";
import {
  ADD_NOTIFICATION,
  HIDE_ERROR,
  HIDE_LOADER,
  LayoutActions,
  NAVBAR_TOGGLE,
  SEARCH_INPUT,
  SET_ERROR,
  SHOW_LOADER,
  SORT_BY,
} from "./action";
export interface LayoutState {
  readonly error: ERROR | undefined;
  readonly errorModalYN: boolean;
  readonly isLoading: boolean;
  readonly notification?:string|undefined;
  readonly isNavbarOpen:boolean;
  readonly sortBy:SortBY;
  readonly search?:string;
}
export const defaultState: LayoutState = {
  error: undefined,
  errorModalYN: false,
  isLoading: false,
  notification:undefined,
  isNavbarOpen:false,
  sortBy:{sort:"createdAt",by:'desc'},
  search:""
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
    case ADD_NOTIFICATION:
        return{
          ...state,
          notification:action.payload
        };
    case NAVBAR_TOGGLE:
       return{
        ...state,
        isNavbarOpen:!state.isNavbarOpen
       }  
    case SORT_BY:
      return{
        ...state,
        sortBy:action.payload
      } 
    case SEARCH_INPUT:
      return{
        ...state,
        search:action.payload
      }      
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
};

export default reducer;

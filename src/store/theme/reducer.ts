import { Reducer } from "redux";
import { REMEMBER_ME, SET_THEME, SET_THEME_COLOR, ThemeActions } from "./action";

export interface ThemeState {
  readonly theme: MyTheme;
  readonly themeColor: ThemeColor;
  readonly rememberMe: RememberMe;

}
export const defaultState: ThemeState = {
  theme: 'light',
  themeColor: 'green',
  rememberMe: { username: '', password: '', rememberMe: false },
};

const reducer: Reducer<ThemeState, ThemeActions> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload
      }
    case SET_THEME_COLOR:
      return {
        ...state,
        themeColor: action.payload
      }
    case REMEMBER_ME:
      return {
        ...state,
        rememberMe: action.payload
      }
    default:
      return state;
  }
};

export default reducer;

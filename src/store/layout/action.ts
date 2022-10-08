import { Action } from "redux";

export const SET_ERROR = "layout/SET_ERROR";
export const showError = (data: ERROR) => ({
  type: SET_ERROR,
  payload: data,
});
export const HIDE_ERROR = "layout/HIDE_ERROR";
export const hideError = () => ({
  type: HIDE_ERROR,
});
export interface ErrorAction extends Action<typeof SET_ERROR> {
  payload: ERROR;
}
export interface HideErrorAction extends Action<typeof HIDE_ERROR> {}

export const SHOW_LOADER = "layout/IS_LOADER";
export const showLoading = () => ({
  type: SHOW_LOADER,
});
export const HIDE_LOADER = "layout/HIDE_LOADER";
export const hideLoading = () => ({
  type: HIDE_LOADER,
});

export const ADD_NOTIFICATION = "layout/ADD_NOTIFICATION";
export const addNotification = (data: string | undefined) => ({
  type: ADD_NOTIFICATION,
  payload: data,
});
export const NAVBAR_TOGGLE='layout/NAVBAR_TOGGLE';
export const navbarTogle=()=>({
  type:NAVBAR_TOGGLE
})
export interface AddNotificationAction extends Action<typeof ADD_NOTIFICATION> {
  readonly payload: string | undefined;
}

export interface ShowLoaderAction extends Action<typeof SHOW_LOADER> {}
export interface HideLoaderAction extends Action<typeof HIDE_LOADER> {}
export interface NavbarAction extends Action<typeof NAVBAR_TOGGLE> {}


export type LayoutActions =
  | ErrorAction
  | HideErrorAction
  | ShowLoaderAction
  | HideLoaderAction
  | AddNotificationAction
  | NavbarAction;
  
  

import { Action } from 'redux';

export const SET_THEME = 'layout/SET_THEME';
export const setTheme = (data: MyTheme) => ({
    type: SET_THEME,
    payload: data
})

export interface ThemeAction extends Action<typeof SET_THEME> {
    readonly payload: MyTheme
}

export const SET_THEME_COLOR = 'layout/SET_THEME_COLOR';
export const setThemeColor = (data: ThemeColor) => ({
    type: SET_THEME_COLOR,
    payload: data
})

export interface ThemeColorAction extends Action<typeof SET_THEME_COLOR> {
    readonly payload: ThemeColor
}

export const REMEMBER_ME = 'layout/REMEMBER_ME';
export const setRememberMe = (data: RememberMe) => ({
    type: REMEMBER_ME,
    payload: data
})
export interface RememberMeAction extends Action<typeof REMEMBER_ME> {
    readonly payload: RememberMe
}




export type ThemeActions =
    | ThemeAction
    | ThemeColorAction
    | RememberMeAction
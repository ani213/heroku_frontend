import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRememberMe, setTheme, setThemeColor } from "./action";
import { rememberMeSelector, themeColorSelector, themeSelector } from "./selector";

export function useTheme(): [MyTheme, (data: MyTheme) => void] {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();
  const getTheme = React.useCallback(
    (data: MyTheme) => dispatch(setTheme(data)),
    [dispatch]
  );
  return [theme, getTheme];
}

export function useThemeColor(): [ThemeColor, (data: ThemeColor) => void] {
  const theme = useSelector(themeColorSelector);
  const dispatch = useDispatch();
  const setTheme = React.useCallback(
    (data: ThemeColor) => dispatch(setThemeColor(data)),
    [dispatch]
  );
  return [theme, setTheme];
}
export function useRememberMe(): [RememberMe, (data: RememberMe) => void] {
  const rememberMe = useSelector(rememberMeSelector);
  const dispatch = useDispatch();
  const setRemember = React.useCallback(
    (data: RememberMe) => dispatch(setRememberMe(data)),
    [dispatch]
  );
  return [rememberMe, setRemember];
}
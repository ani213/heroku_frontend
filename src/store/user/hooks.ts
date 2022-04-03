import * as React from "react";
import {
  changePasswordRun,
  forgetPasswordRun,
  login,
  logoutRun,
  register,
  varificationRun,
} from "./action";
import { useDispatch, useSelector } from "react-redux";
import { emailSelector, getIsAuth } from "./selector";

export function useLogin(): [(data: LoginFormValues) => void, () => void] {
  const dispatch = useDispatch();
  const loginUser = React.useCallback(
    (data: LoginFormValues) => dispatch(login(data)),
    [dispatch]
  );
  const logOut = React.useCallback(() => dispatch(logoutRun()), [dispatch]);
  return [loginUser, logOut];
}
export function useRegister(): [(data: RegisterFormValues) => void] {
  const dispatch = useDispatch();
  const registerUser = React.useCallback(
    (data: RegisterFormValues) => dispatch(register(data)),
    [dispatch]
  );
  return [registerUser];
}

export function useAuth(): [isAuth: boolean] {
  const isAuth = useSelector(getIsAuth);
  return [isAuth];
}
export function useVarification(): [
  string | undefined,
  (data: VarificationFormValues, onComplete?: () => void) => void
] {
  const email = useSelector(emailSelector);
  const dispatch = useDispatch();
  const runVarification = React.useCallback(
    (data: VarificationFormValues, onComplete?: () => void) =>
      dispatch(varificationRun(data, onComplete)),
    [dispatch]
  );
  return [email, runVarification];
}

export function useForgetPassword(): [
  (data: ForgetPasswordFormValue, onComplete?: () => void) => void
] {
  const dispatch = useDispatch();
  const runForgetPassword = React.useCallback(
    (data: ForgetPasswordFormValue, onComplete?: () => void) =>
      dispatch(forgetPasswordRun(data, onComplete)),
    [dispatch]
  );
  return [runForgetPassword];
}

export function useChangePassword():[
  (data: ChangePasswordFormValues, onComplete?: () => void) => void
]{
  const dispatch = useDispatch();
  const changePassword = React.useCallback(
    (data: ChangePasswordFormValues, onComplete?: () => void) =>
      dispatch(changePasswordRun(data, onComplete)),
    [dispatch]
  );
  return [changePassword];
}




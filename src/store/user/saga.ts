import { call, takeLatest, put, takeEvery } from "redux-saga/effects";
import {
  LOGIN,
  REGISTER,
  registerationComplete,
  VARIFICATION_RUN,
  VarificationAction,
  LOGOUT_RUN,
  logout,
  FORGET_PASSWORD_RUN,
  ForgetPasswordAction,
  ForgetPasswordComplete,
  CHANAGE_PASSWORD_RUN,
} from "./action";
import qs from "qs";
import { Method, request, ApiResponse, callApi } from "../../services/api/Api";
import { hideLoading, showError, showLoading } from "../layout/action";
import { history } from "../../services/history";
import RouteService from "../../services/route.services";

export function* callLogin(action: {
  readonly type: string;
  readonly payload: LoginFormValues;
}) {
  try {
    const reqdata = qs.stringify(action.payload);
    const { data } = yield call(request, {
      data: reqdata,
      url: "/login",
      method: "POST",
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
export function* watchCallLogin() {
  yield takeLatest(LOGIN, callLogin);
}
export function* callLogout() {
  try {
    yield put(logout());
    history.push(RouteService.login.getPath());
  } catch (err) {
    yield put(showError({ title: "Logot Error", error: err }));
  }
}
export function* watchLogout() {
  yield takeEvery(LOGOUT_RUN, callLogout);
}

export function* callRegister(action: {
  readonly type: string;
  readonly payload: RegisterFormValues;
}) {
  try {
    yield put(showLoading());
    const response: ApiResponse<RegisterResponse> = yield call(request, {
      data: action.payload,
      method: Method.POST,
      url: "/register",
    });
    const { data } = response;
    yield put(registerationComplete(data));
    yield put(hideLoading());
    history.push(RouteService.varification.getPath());
  } catch (err) {
    yield put(hideLoading());
    yield put(showError({ title: "Register Error", error: err }));
  }
}
export function* watchCallRegister() {
  yield takeLatest(REGISTER, callRegister);
}
export function* callVarificationRun(action: VarificationAction) {
  try {
    yield put(showLoading());
    const response: ApiResponse<VarificationResponse> = yield call(callApi, {
      data: action.payload.data,
      method: Method.POST,
      url: "/verifyemail",
    });
    const { data } = response;
    yield put(hideLoading());
    if (!!data.message) {
      if (action.meta.onComplete) {
        action.meta.onComplete();
      }
    }
    if(data.forget){
        history.push(RouteService.changePassword.getPath())
    }
  } catch (err) {
    yield put(hideLoading());
    yield put(showError({ title: "Varification Error", error: err }));
  }
}
export function* watchCallVarificationRun() {
  yield takeLatest(VARIFICATION_RUN, callVarificationRun);
}

export function* callForgetPasswordRun(action: ForgetPasswordAction) {
  try {
    yield put(showLoading());
    const response: ApiResponse<ForgetPasswordResponse> = yield call(callApi, {
      data: action.payload.data,
      method: Method.POST,
      url: "/forgetpassword",
    });
    const { data } = response;
    yield put(hideLoading());
    if (!!data.email) {
      if (action.meta.onComplete) {
        action.meta.onComplete();
      }
    }
    yield put(ForgetPasswordComplete(data));
    history.push(RouteService.varification.getPath());
  } catch (err) {
    yield put(hideLoading());
    yield put(showError({ title: "Forget Password Error", error: err }));
  }
}
export function* watchCallForgetPasswordRun() {
  yield takeLatest(FORGET_PASSWORD_RUN, callForgetPasswordRun);
}

export function* callChangePasswordRun(action: VarificationAction) {
  try {
    yield put(showLoading());
    const response: ApiResponse<{ readonly message: string }> = yield call(
      callApi,
      {
        data: action.payload.data,
        method: Method.POST,
        url: "/changepassword",
      }
    );
    const { data } = response;
    yield put(hideLoading());
    if (!!data.message) {
      if (action.meta.onComplete) {
        action.meta.onComplete();
      }
    }
  } catch (err) {
    yield put(hideLoading());
    yield put(showError({ title: "Change Password Error", error: err }));
  }
}
export function* watchCallCangePasswordRun() {
  yield takeLatest(CHANAGE_PASSWORD_RUN, callChangePasswordRun);
}

export default [
  watchCallLogin,
  watchCallRegister,
  watchCallVarificationRun,
  watchCallForgetPasswordRun,
  watchCallCangePasswordRun,
  watchLogout,
];

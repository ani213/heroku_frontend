import { call, takeLatest, put } from "redux-saga/effects";

import { Method,  ApiResponse, callApi } from "../../services/api/Api";
import { hideLoading, showError, showLoading } from "../layout/action";
import { GET_PROBLEM, setProblems } from "./action";

export function* callGetProblem(action: {
    readonly type: string;
    readonly payload: LoginFormValues;
  }) {
    try {
      yield put(showLoading());
      const response:ApiResponse<ReadonlyArray<Problem>> =yield call(callApi, {
        method: Method.GET,
        url: "/problem",
      });
      const {data}=response;
      yield put(setProblems(data));
      yield put(hideLoading());
    } catch (err) {
      yield put(hideLoading());
      yield put(showError({ title: "Error", error: err }));
    }
  }
  export function* watchGetProblem() {
    yield takeLatest(GET_PROBLEM, callGetProblem);
  }
  export default [watchGetProblem]
import { call, takeLatest, put } from "redux-saga/effects";

import { Method,  ApiResponse, callApi } from "../../services/api/Api";
import { history } from "../../services/history";
import RouteService from "../../services/route.services";
import { hideLoading, showError, showLoading } from "../layout/action";
import { ADD_PROBLEM, getProblem, getProblemByIdComplete, GET_PROBLEM, GET_PROBLEM_ID, setProblems } from "./action";

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

  export function* callGetProblemById(action: {
    readonly type: string;
    readonly payload: string;
  }) {
    try {
      yield put(showLoading());
      const response:ApiResponse<Problem> =yield call(callApi, {
        method: Method.GET,
        url: `/problem/${action.payload}`,
      });
      const {data}=response;
      yield put(getProblemByIdComplete(data));
      yield put(hideLoading());
    } catch (err) {
      yield put(hideLoading());
      yield put(showError({ title: "Error", error: err }));
    }
  }
  export function* watchGetProblemById() {
    yield takeLatest(GET_PROBLEM_ID, callGetProblemById);
  }

  export function* callCreateProblem(action: {
    readonly type: string;
    readonly payload: Problem;
  }) {
    try {
      yield put(showLoading());
      const response:ApiResponse<{readonly message:string}> =yield call(callApi, {
        data:action.payload,
        method: Method.POST,
        url: "/problem",
      });
      const {data}=response;
      yield put(getProblem())
      console.log(data);
      yield put(hideLoading());
      history.push(RouteService.dashboard.getPath())
    } catch (err) {
      yield put(hideLoading());
      yield put(showError({ title: "Error", error: err }));
    }
  }
  export function* watchCreateProblem() {
    yield takeLatest(ADD_PROBLEM, callCreateProblem);
  }


  export default [watchGetProblem,watchCreateProblem,watchGetProblemById]
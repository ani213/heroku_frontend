import { call, takeLatest, put } from "redux-saga/effects";

import { Method,  ApiResponse, callApi } from "../../services/api/Api";
import { history } from "../../services/history";
import RouteService from "../../services/route.services";
import { addNotification, hideLoading, showError, showLoading } from "../layout/action";
import { ADD_PROBLEM, getProblem, getProblemById, getProblemByIdComplete, getProblemTypeComplete, GET_MY_PROBLEM, GET_PROBLEM, GET_PROBLEM_ID, GET_PROBLEM_TYPE, setMyProblems, setProblems, UpdateProblemAction, UPDATE_PROBLEM_RUN } from "./action";

export function* callGetProblem(action: {
    readonly type: string;
    readonly payload: LoginFormValues;
  }) {
    try {
      yield put(showLoading());
      const response:ApiResponse<ReadonlyArray<Problem>> =yield call(callApi, {
        method: Method.GET,
        url: "/problems/all",
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
      const response:ApiResponse<{readonly title:string}> =yield call(callApi, {
        data:action.payload,
        method: Method.POST,
        url: "/problem",
      });
      const {data}=response;
      yield put(addNotification(`${data.title} successfully created.`))
      yield put(getProblem())
      yield put(hideLoading());
      history.push(RouteService.myProblem.getPath())
    } catch (err) {
      yield put(hideLoading());
      yield put(showError({ title: "Error", error: err }));
    }
  }
  export function* watchCreateProblem() {
    yield takeLatest(ADD_PROBLEM, callCreateProblem);
  }

  export function* callUpdateProblem(action:UpdateProblemAction) {
    try {
      yield put(showLoading());
      const response:ApiResponse<{readonly message:string}> =yield call(callApi, {
        data:action.payload.data,
        method: Method.PUT,
        url: "/problem",
      });
      const {data}=response;
      yield put(addNotification(data.message))
      yield put(getProblemById(action.payload.data._id||""))
       if(action.meta.onComplete){
        action.meta.onComplete()
       }
      yield put(hideLoading());
    } catch (err) {
      yield put(hideLoading());
      yield put(showError({ title: "Error", error: err }));
    }
  }
  export function* watchUpdateProblem() {
    yield takeLatest(UPDATE_PROBLEM_RUN, callUpdateProblem);
  }


  export function* callGetMyProblem(action: {
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
      yield put(setMyProblems(data));
      yield put(hideLoading());
    } catch (err) {
      yield put(hideLoading());
      yield put(showError({ title: "Error", error: err }));
    }
  }
  export function* watchGetMyProblem() {
    yield takeLatest(GET_MY_PROBLEM, callGetMyProblem);
  }

  export function* callGetProblemTypes() {
    try {
      yield put(showLoading());
      const response:ApiResponse<ReadonlyArray<ProblemType>> =yield call(callApi, {
        method: Method.GET,
        url: "/problem-types",
      });
      const {data}=response;
      yield put(getProblemTypeComplete(data));
      yield put(hideLoading());
    } catch (err) {
      yield put(hideLoading());
      yield put(showError({ title: "Error", error: err }));
    }
  }
  export function* watchGetProblemTypes() {
    yield takeLatest(GET_PROBLEM_TYPE, callGetProblemTypes);
  }



  export default [watchGetProblem,watchCreateProblem,watchGetProblemById,watchUpdateProblem,watchGetMyProblem,watchGetProblemTypes]
import { all } from "@redux-saga/core/effects";
import UserSagas from './user/saga'
export default function* rootSaga(){
    yield all([
      ...UserSagas.map((saga)=>saga())
    ]);
}
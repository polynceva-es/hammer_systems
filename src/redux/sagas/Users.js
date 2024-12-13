import { all, takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/Users';
import * as api from '../api/users';
import { GET_USERS_REQUEST } from 'redux/constants/Users';

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    yield put(actions.getUsersSuccess(result.data));
  } catch (error) {
    console.error(error);
  }
}
function* watchGetUsersRequest() {
  yield takeEvery(GET_USERS_REQUEST, getUsers);
}


export default function* userSagas() {
  yield all([fork(watchGetUsersRequest)])
};
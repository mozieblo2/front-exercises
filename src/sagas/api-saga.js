import { takeEvery, call, put } from 'redux-saga/effects';
import { DATA_REQUESTED, DATA_LOADED, API_ERRORED } from '../constants/action-types';

export default function* watcherSaga() {
    yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* workerSaga(action) {
    try {
        // pass the action payload to getData2
        const payload = yield call(getData2, action.payload.url);
        yield put({ type: DATA_LOADED, payload });
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}

function getData2(url) {
    return fetch(url).then(response => response.json());
}

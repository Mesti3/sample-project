import { put } from 'redux-saga/effects';
import PayService from '../../services/PayService';


export function* createPaySaga(action) {
  try {
    let pay = yield new PayService();
    yield pay.makePay();
  } catch (err) {
    yield put(err);
  }
}
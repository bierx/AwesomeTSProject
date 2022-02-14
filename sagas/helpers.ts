import {select} from 'redux-saga/effects';

import {RootState} from '../store/configureStore';

export function* _select<T>(fn: (state: RootState) => T) {
  const res: T = yield select(fn);
  return res;
}

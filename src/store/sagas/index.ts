import { all } from 'redux-saga/effects'
import { userWatcher } from './userSagas'

export function* rootSaga() {
   yield all([
      userWatcher()
   ])
}
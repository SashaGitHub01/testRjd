import { AnyAction } from "redux";
import { put, call, takeLatest } from "redux-saga/effects";
import { PassengersApi } from "../../API/PassengersApi";
import { PassengerI } from "../../types/Passenger.types";
import { fetchCreate, setErr, updateSeat } from "../actions/userA";
import { ActionsUser } from "../types/user.types";

function* createPsgrSaga(action: AnyAction) {
   try {
      yield put(fetchCreate())

      const res: PassengerI = yield call(PassengersApi.createPassenger, action.payload.data)
      yield put(updateSeat({ data: res, routeId: action.payload.routeId, seatId: action.payload.seatId }))

      yield call(action.payload.nav)
   } catch (err: any) {
      yield put(setErr(err.message))
   }
}

export function* userWatcher() {
   yield takeLatest(ActionsUser.CREATE_PSGR_SAGA, createPsgrSaga)
}
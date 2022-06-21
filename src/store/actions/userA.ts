import { TypedThunk } from ".."
import { PassengersApi } from "../../API/PassengersApi"
import { PassengerI, PassengerInput } from "../../types/Passenger.types"
import { ActionsUser, DeleteSeat, AddSeat, UpdateSeat, FetchCreate, SetError, CreatePsgrSaga } from "../types/user.types"

interface SeatInput {
   routeId: number,
   seatId: number,
   price: number
}

export const addSeat = ({ routeId, seatId, price }: SeatInput): AddSeat => (
   {
      type: ActionsUser.ADD_SEAT,
      payload: { routeId, seatId, price }
   }
)

export const updateSeat = ({
   routeId,
   seatId,
   data
}: Omit<SeatInput, 'price'> & { data: PassengerInput }): UpdateSeat => (
   {
      type: ActionsUser.UPDATE_SEAT,
      payload: { routeId, seatId, data }
   }
)

export const deleteSeat = ({ routeId, seatId }: Omit<SeatInput, 'price'>): DeleteSeat => (
   {
      type: ActionsUser.DELETE_SEAT,
      payload: { routeId, seatId }
   }
)

export const fetchCreate = (): FetchCreate => (
   {
      type: ActionsUser.FETCH_CREATE,
   }
)

export const setErr = (err: string): SetError => (
   {
      type: ActionsUser.SET_ERROR,
      payload: err
   }
)

export const createPsgrSaga = (data: Omit<SeatInput, 'price'> & { data: PassengerInput, nav: () => void }): CreatePsgrSaga => (
   {
      type: ActionsUser.CREATE_PSGR_SAGA,
      payload: data
   }
)

export const fetchCreatePsgrThunk = (
   input: PassengerInput,
   seatId: number,
   routeId: number,
   nav: () => void
): TypedThunk => {
   return async (dispatch) => {
      try {
         dispatch(fetchCreate())
         const res = await PassengersApi.createPassenger(input);
         dispatch(updateSeat({ data: res, seatId, routeId }));
         nav()
      } catch (err: any) {
         dispatch(setErr(err.message))
         return err.message
      }
   }
}
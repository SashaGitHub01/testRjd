import { PassengerI, PassengerInput } from "../../types/Passenger.types"
import { ActionsUser, RouteWithSeats, DeleteSeat, AddSeat, UpdateSeat } from "../types/user.types"

export const addSeat = ({ routeId, seatId }: { routeId: number, seatId: number }): AddSeat => (
   {
      type: ActionsUser.ADD_SEAT,
      payload: { routeId, seatId }
   }
)

export const updateSeat = ({ routeId, seatId, data }: { routeId: number, seatId: number, data: PassengerInput }): UpdateSeat => (
   {
      type: ActionsUser.UPDATE_SEAT,
      payload: { routeId, seatId, data }
   }
)

export const deleteSeat = ({ routeId, seatId }: { routeId: number, seatId: number }): DeleteSeat => (
   {
      type: ActionsUser.DELETE_SEAT,
      payload: { routeId, seatId }
   }
)

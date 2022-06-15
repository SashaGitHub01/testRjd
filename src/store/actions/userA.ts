import { RouteI } from "../../types/Routes.interface"
import { ActionsUser, RouteWithSeats, DeleteSeat, AddSeat } from "../types/user.types"

export const addSeat = ({ routeId, seatId }: { routeId: number, seatId: number }): AddSeat => (
   {
      type: ActionsUser.ADD_SEAT,
      payload: { routeId, seatId }
   }
)

export const deleteSeat = ({ routeId, seatId }: { routeId: number, seatId: number }): DeleteSeat => (
   {
      type: ActionsUser.DELETE_SEAT,
      payload: { routeId, seatId }
   }
)

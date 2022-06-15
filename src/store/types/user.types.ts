import { PassengerI } from "../../types/Passenger.types";
import { RouteI } from "../../types/Routes.interface";

export interface RouteWithSeats {
   [routeId: string]: PassengerI[]
}

export enum ActionsUser {
   ADD_SEAT = 'ADD_SEAT/user',
   DELETE_SEAT = 'DELETE_SEAT/user',
}

export interface IState {
   routes: RouteWithSeats
}

export interface AddSeat {
   type: ActionsUser.ADD_SEAT,
   payload: {
      routeId: number,
      seatId: number
   }
}

export interface DeleteSeat {
   type: ActionsUser.DELETE_SEAT,
   payload: {
      routeId: number,
      seatId: number
   }
}

export type ActionTypesUser = AddSeat |
   DeleteSeat;
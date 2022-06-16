import { PassengerI, PassengerInput } from "../../types/Passenger.types";
import { RouteI } from "../../types/Routes.interface";

export interface RouteWithSeats {
   [routeId: string]: PassengerI[]
}

export enum ActionsUser {
   ADD_SEAT = 'ADD_SEAT/user',
   DELETE_SEAT = 'DELETE_SEAT/user',
   FETCH_CREATE = 'FETCH_CREATE/user',
   SET_ERROR = 'SET_ERROR/user',
   UPDATE_SEAT = 'UPDATE_SEAT/user',
}

export interface IState {
   routes: RouteWithSeats,
   isFetching: boolean,
   error: null | string
}

export interface AddSeat {
   type: ActionsUser.ADD_SEAT,
   payload: {
      routeId: number,
      price: number,
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

export interface UpdateSeat {
   type: ActionsUser.UPDATE_SEAT,
   payload: {
      routeId: number,
      seatId: number,
      data: PassengerInput
   }
}

export interface FetchCreate {
   type: ActionsUser.FETCH_CREATE,
}

export interface SetError {
   type: ActionsUser.SET_ERROR,
   payload: string
}

export type ActionTypesUser = AddSeat
   | DeleteSeat
   | UpdateSeat
   | FetchCreate
   | SetError;

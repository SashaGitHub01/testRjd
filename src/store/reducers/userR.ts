import { nanoid } from "nanoid";
import { PassengerI } from "../../types/Passenger.types";
import { ActionsUser, ActionTypesUser, IState } from "../types/user.types";


const initialState: IState = {
   routes: {},
   isFetching: false,
   error: null
}

export const userR = (state = initialState, action: ActionTypesUser): IState => {
   switch (action.type) {
      case ActionsUser.ADD_SEAT:
         return {
            ...state,
            routes: {
               ...state.routes,
               [action.payload.routeId]: [
                  ...(state.routes?.[action.payload.routeId] || []),
                  {
                     id: action.payload.seatId,
                     seat: action.payload.seatId,
                     ticketPrice: action.payload.price
                  }
               ]
            }
         }

      case ActionsUser.UPDATE_SEAT:
         return {
            ...state,
            error: null,
            routes: {
               ...state.routes,
               [action.payload.routeId]: [
                  ...state.routes[action.payload.routeId].map(ps => {
                     if (ps.seat === action.payload.seatId) {
                        return {
                           ...ps,
                           ...action.payload.data
                        }
                     } else {
                        return ps
                     }
                  })
               ]
            }
         }

      case ActionsUser.DELETE_SEAT:
         return {
            ...state,
            routes: {
               ...state.routes,
               [action.payload.routeId]: [
                  ...state.routes?.[action.payload.routeId]?.filter(((passenger) => {
                     return passenger.seat !== action.payload.seatId
                  }))
               ]
            }
         }

      case ActionsUser.FETCH_CREATE:
         return {
            ...state,
            isFetching: true,
            error: null
         }

      case ActionsUser.SET_ERROR:
         return {
            ...state,
            error: action.payload,
            isFetching: false
         }

      default:
         return state;
   }
}
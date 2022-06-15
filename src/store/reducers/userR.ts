import { nanoid } from "nanoid";
import { PassengerI } from "../../types/Passenger.types";
import { ActionsUser, ActionTypesUser, IState } from "../types/user.types";


const initialState: IState = {
   routes: {}
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
                     seat: action.payload.seatId
                  }
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

      default:
         return state;
   }
}
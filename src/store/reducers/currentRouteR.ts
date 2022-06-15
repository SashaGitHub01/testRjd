import { ActionsRoutes, ActionTypesRoute, IState } from "../types/currentRoute.types";

const initialState: IState = {
   route: null,
   isFetching: false,
   error: null,
}

export const currentRouteR = (state = initialState, action: ActionTypesRoute): IState => {
   switch (action.type) {
      case ActionsRoutes.FETCH_ROUTE:
         return {
            ...state,
            isFetching: true,
         }

      case ActionsRoutes.SET_ROUTE:
         return {
            ...state,
            route: action.payload,
            isFetching: false,
         }

      case ActionsRoutes.SET_ERROR:
         return {
            ...state,
            error: action.payload,
            isFetching: false,
         }

      default:
         return state;
   }
}
import { ActionsRoutes, ActionTypesRoutes, IState } from "../types/routes.types";

const initialState: IState = {
   routes: [],
   isFetching: false,
   error: null,
}

export const routesR = (state = initialState, action: ActionTypesRoutes): IState => {
   switch (action.type) {
      case ActionsRoutes.FETCH_ROUTES:
         return {
            ...state,
            isFetching: true,
         }

      case ActionsRoutes.SET_ROUTES:
         return {
            ...state,
            routes: action.payload,
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
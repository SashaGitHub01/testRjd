import { RootState, TypedThunk } from ".."
import { RoutesApi } from "../../API/RoutesApi"
import { RouteI } from "../../types/Routes.interface"
import { ActionsRoutes } from "../types/routes.types"

export const fetchRoutes = () => (
   { type: ActionsRoutes.FETCH_ROUTES }
)

export const setRoutes = (items: RouteI[]) => (
   { type: ActionsRoutes.SET_ROUTES, payload: items }
)

export const setRoutesErr = (err: string) => (
   { type: ActionsRoutes.SET_ERROR, payload: err }
)

export const fetchRoutesThunk = (): TypedThunk => {
   return async (dispatch) => {
      try {
         dispatch(fetchRoutes())

         const res = await RoutesApi.getRoutes();

         dispatch(setRoutes(res));
      } catch (e) {
         dispatch(setRoutesErr("Something went wrong..."))
      }
   }
}
import { RootState, TypedThunk } from ".."
import { RoutesApi } from "../../API/RoutesApi"
import { RouteI } from "../../types/Routes.interface"
import { ActionsRoutes } from "../types/currentRoute.types"

export const fetchRoute = () => (
   { type: ActionsRoutes.FETCH_ROUTE }
)

export const setRoute = (items: RouteI) => (
   { type: ActionsRoutes.SET_ROUTE, payload: items }
)

export const setRouteErr = (err: string) => (
   { type: ActionsRoutes.SET_ERROR, payload: err }
)

export const fetchRouteThunk = (id: string): TypedThunk => {
   return async (dispatch) => {
      try {
         dispatch(fetchRoute())

         const res = await RoutesApi.getRoute(id);
         if (!res) throw Error('Маршрут не найден')

         dispatch(setRoute(res));
      } catch (e: any) {
         dispatch(setRouteErr(e.message))
      }
   }
}
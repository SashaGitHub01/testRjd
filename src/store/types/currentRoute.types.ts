import { RouteI } from "../../types/Routes.interface";

export enum ActionsRoutes {
   FETCH_ROUTE = 'FETCH_ROUTE/seats',
   SET_ROUTE = 'SET_ROUTES/seats',
   SET_ERROR = 'SET_ERROR/seats',
}

export interface IState {
   route: RouteI | null,
   isFetching: boolean,
   error: string | null
}

interface FetchRouteI {
   type: ActionsRoutes.FETCH_ROUTE,
}

interface SetRouteI {
   type: ActionsRoutes.SET_ROUTE,
   payload: RouteI
}

interface SetRouteErrorI {
   type: ActionsRoutes.SET_ERROR,
   payload: string
}

export type ActionTypesRoute = FetchRouteI
   | SetRouteI
   | SetRouteErrorI;
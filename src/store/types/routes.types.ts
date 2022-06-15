import { RouteI } from "../../types/Routes.interface";

export enum ActionsRoutes {
   FETCH_ROUTES = 'FETCH_ROUTES/routes',
   SET_ROUTES = 'SET_ROUTES/routes',
   SET_ERROR = 'SET_ERROR/routes',
}

export interface IState {
   routes: RouteI[],
   isFetching: boolean,
   error: string | null
}

interface FetchRoutesI {
   type: ActionsRoutes.FETCH_ROUTES,
}

interface SetRoutesI {
   type: ActionsRoutes.SET_ROUTES,
   payload: RouteI[]
}

interface SetRoutesErrorI {
   type: ActionsRoutes.SET_ERROR,
   payload: string
}

export type ActionTypesRoutes = FetchRoutesI
   | SetRoutesI
   | SetRoutesErrorI;
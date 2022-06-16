import { createSelector } from "reselect";
import { RootState } from '../index'

export const selectUserState = (state: RootState) => state.user
export const selectAllUserRoutes = (state: RootState) => state.user.routes

export const selectTicketsLength = createSelector(
   selectAllUserRoutes,
   routes => Object.values(routes).reduce((pr, curr) => {
      return pr + curr.length
   }, 0)
);

export const selectSpecifiedPsgr = createSelector(
   [
      selectAllUserRoutes,
      (_, user, id) => ({ user, id }),
   ],
   (routes, { id, user }) => routes[id as string]?.find((p) => p.id == user)
)

export const selectUserPsgrs = createSelector(
   [
      selectAllUserRoutes,
      (_, routeId: string) => routeId,
   ],
   (routes, routeId) => routes[routeId]
);



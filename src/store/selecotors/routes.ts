import { createSelector } from "reselect";
import { RootState } from '../index'

export const selectAllRoutes = (state: RootState) => state.routes

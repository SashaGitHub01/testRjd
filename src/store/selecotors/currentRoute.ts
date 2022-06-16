import { createSelector } from "reselect";
import { RootState } from "..";

export const selectCurrentRoute = (state: RootState) => state.currentRoute
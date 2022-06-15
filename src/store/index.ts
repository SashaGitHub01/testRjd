import { AnyAction, applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { currentRouteR } from "./reducers/currentRouteR";
import { routesR } from "./reducers/routesR";
import { userR } from "./reducers/userR";

const rootReducer = combineReducers({
   routes: routesR,
   currentRoute: currentRouteR,
   user: userR
})

const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk))
);


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type TypedThunk = ThunkAction<
   void,
   RootState,
   unknown,
   AnyAction
>;

export default store;
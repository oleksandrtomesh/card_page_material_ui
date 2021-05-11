import { combineReducers, createStore } from "redux";
import { cartReducer } from "./reducers/cartReducer";

let rootReducer = combineReducers({
  cartPage: cartReducer
});

type RootReducerType = typeof rootReducer;
export type RootStateType = ReturnType<RootReducerType>;

const store = createStore(rootReducer);

export default store;

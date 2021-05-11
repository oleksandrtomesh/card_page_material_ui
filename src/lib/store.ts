import { combineReducers, createStore } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import { headerReducer } from "./reducers/headerReducer";

let rootReducer = combineReducers({
  cartPage: cartReducer,
  header: headerReducer
});

type RootReducerType = typeof rootReducer;
export type RootStateType = ReturnType<RootReducerType>;

const store = createStore(rootReducer);

export default store;

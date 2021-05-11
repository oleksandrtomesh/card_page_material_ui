import { RootStateType } from "../store";

export const getCartProducts = (state: RootStateType) =>
  state.cartPage.cartProducts;

export const getPathName = (state: RootStateType) => state.header.pathName;

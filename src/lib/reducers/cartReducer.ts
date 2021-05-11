import { ConstantsType } from "../../constants";

const initialState = {
  cartProducts: [] as ConstantsType[]
};

type initialStateType = typeof initialState;

export const cartReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case "app/cart-reducer/PRODUCT-ADDED":
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.product]
      };
    default:
      return state;
  }
};

const actions = {
  productAdded: (product: ConstantsType) =>
    ({
      type: "app/cart-reducer/PRODUCT-ADDED",
      product
    } as const)
};

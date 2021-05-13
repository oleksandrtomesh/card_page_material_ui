import { ConstantsType } from "../../constants";

const initialState = {
  cartProducts: [] as CartProductType[],
  totalPrice: 0
};

type initialStateType = typeof initialState;

const changeTotalPrice = (
  prevTotalPrice: number,
  itemPrice: string,
  action: "increase" | "decrease"
): number => {
  if (action === "increase") {
    return (
      Math.floor((prevTotalPrice + Number(itemPrice.slice(1))) * 100) / 100
    );
  } else {
    return (
      Math.floor((prevTotalPrice - Number(itemPrice.slice(1))) * 100) / 100
    );
  }
};

export const cartReducer = (
  state = initialState,
  action: CartActionsType
): initialStateType => {
  switch (action.type) {
    case "app/cart-reducer/PRODUCT-ADDED":
      const cartProduct = {
        ...action.product,
        quantity: 1
      };
      return {
        ...state,
        //increase quantity to one if is product in array
        cartProducts: state.cartProducts.some(
          (p) => p.title === cartProduct.title
        )
          ? state.cartProducts.map((p) => {
              if (p.title === cartProduct.title) {
                return { ...p, quantity: p.quantity + 1 };
              }
              return p;
            })
          : //if added new product, push it at start of array
            [cartProduct, ...state.cartProducts],
        totalPrice: changeTotalPrice(
          state.totalPrice,
          action.product.price,
          "increase"
        )
      };
    case "app/cart-reducer/CHANGE-QUANTITY":
      return {
        ...state,
        cartProducts: state.cartProducts
          .map((p) => {
            if (
              p.title === action.productTytle &&
              action.action === "increase"
            ) {
              return { ...p, quantity: p.quantity + 1 };
            } else if (
              p.title === action.productTytle &&
              action.action === "decrease"
            ) {
              return { ...p, quantity: p.quantity - 1 };
            }
            return p;
          })
          //if quantity < 0 delete item from cartProducts
          .filter((p) => p.quantity > 0),
        totalPrice:
          action.action === "increase"
            ? changeTotalPrice(state.totalPrice, action.price, "increase")
            : changeTotalPrice(state.totalPrice, action.price, "decrease") < 1
            ? state.totalPrice * 0
            : changeTotalPrice(state.totalPrice, action.price, "decrease")
      };

    default:
      return state;
  }
};

export const cartActions = {
  productAdded: (product: ConstantsType) =>
    ({
      type: "app/cart-reducer/PRODUCT-ADDED",
      product
    } as const),
  changeQuantity: (
    productTytle: string,
    price: string,
    action: "increase" | "decrease"
  ) =>
    ({
      type: "app/cart-reducer/CHANGE-QUANTITY",
      productTytle,
      price,
      action
    } as const)
};

//types

export type CartProductType = {
  title: string;
  price: string;
  quantity: number;
  description: string;
  avatarUrl: string;
  imageUrl: string;
};

export type InferActionsType<T> = T extends {
  [key: string]: (...args: any) => infer U;
}
  ? U
  : never; //return action type

export type CartActionsType = InferActionsType<typeof cartActions>;

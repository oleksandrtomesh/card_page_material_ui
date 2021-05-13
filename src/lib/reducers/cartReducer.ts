import { ConstantsType } from "../../constants";

const initialState = {
  cartProducts: [
    {
      title: "Keurig K-Duo",
      price: "$149.99",
      quantity: 1,
      description:
        "Use both ground coffee and k-cup pods. Multiple brew sizes: brew an 8, 10, or 12-cup carafe and an 237, 296, or 355ml (8, 10, or 12 oz. ) cup ",
      avatarUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/e0/Keurig_Logo.png",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61-KUPluVYL._AC_SL1500_.jpg"
    },
    {
      title: "KRUPS Electric Spice",
      price: "$19.99",
      quantity: 1,
      description:
        "Large grinding capacity yields ground coffee for up to 12 cups of coffee",
      avatarUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81CbxNLCHCL._AC_SL1500_.jpg",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg"
    }
  ] as CartProductType[],
  totalPrice: 0
};

type initialStateType = typeof initialState;

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
        totalPrice: state.totalPrice + Number(action.product.price)
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
          .filter((p) => p.quantity > 0)
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

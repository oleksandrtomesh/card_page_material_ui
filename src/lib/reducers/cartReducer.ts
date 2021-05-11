import { ConstantsType } from "../../constants";

const initialState = {
  cartProducts: [
    {
      title: "Keurig K-Duo",
      price: "$149.99",
      quantity: 0,
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
      quantity: 0,
      description:
        "Large grinding capacity yields ground coffee for up to 12 cups of coffee",
      avatarUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81CbxNLCHCL._AC_SL1500_.jpg",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg"
    }
  ] as CartProductType[]
};

type initialStateType = typeof initialState;

export const cartReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case "app/cart-reducer/PRODUCT-ADDED":
      const cartProduct = {
        ...action.product,
        quantity: 0
      };
      return {
        ...state,
        cartProducts: [...state.cartProducts, cartProduct]
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

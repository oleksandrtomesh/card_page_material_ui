import { ConstantsType } from "../../constants";

const initialState = {
  pathName: null as string | null
};

type initialStateType = typeof initialState;

export const headerReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case "app/header-reducer/PATH-CHANGED":
      return {
        ...state,
        pathName: action.pathName
      };
    default:
      return state;
  }
};

export const headerActions = {
  pathChanged: (pathName: string) =>
    ({
      type: "app/header-reducer/PATH-CHANGED",
      pathName
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

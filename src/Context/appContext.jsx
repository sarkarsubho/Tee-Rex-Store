import React, { createContext, useReducer } from "react";
import * as types from "./context.types";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  cart: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case types.GetDataSuccess:
      return {
        ...state,
        data: payload,
      };
    case types.GetDataRequest:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.GetDataError:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.AddToCart:
      let newCartData = [...state.cart, payload];
      return { ...state, cart: newCartData };
      case types.SelectQnt:
        let selectCart = state.cart.map((e) =>
          e.id === payload.id ? { ...e, qty:  payload.val } : e
        );
        return {
          ...state,
          cart: selectCart,
        };

    case types.IncQnt:
      let incCart = state.cart.map((e) =>
        e.id === payload.id ? { ...e, qty: e.qty + payload.val } : e
      );
      return {
        ...state,
        cart: incCart,
      };
    case types.DecQnt:
      let decCart = state.cart.map((e) =>
        e.id === payload ? { ...e, qty: e.qty - 1 } : e
      );
      return {
        ...state,
        cart: decCart,
      };
    case types.DeleteCartItem:
      let deletedCartData = state.cart.filter((e) => e.id !== payload);
      return {
        ...state,
        cart: deletedCartData,
      };
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

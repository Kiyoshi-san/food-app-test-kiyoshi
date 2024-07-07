import { createSlice } from "@reduxjs/toolkit";
import { TCart } from "model/cart";

type TCartSlice = {
  cart: TCart;
};

export type RootCart = {
  cartReducer: TCartSlice;
};

const initialState: TCartSlice = {
  cart: {
    products: [],
    total: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state = initialState, action) => {
      const hasProductInCart = state.cart.products.some(
        (product) => product.id === action.payload.id
      );

      if (hasProductInCart) {
        state.cart.products = state.cart.products.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                ...{
                  quantity: product.quantity + action.payload.quantity,
                  total:
                    product.total +
                    action.payload.quantity * action.payload.price +
                    action.payload.quantity *
                      action.payload.additionalOptionPrice,
                },
              }
            : product
        );

        return;
      }

      state.cart.products = [...state.cart.products, { ...action.payload }];
    },
    removeProduct: (state, action) => {
      state.cart.products = state.cart.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
    increaseProductQuantity: (state, action) => {
      state.cart.products = state.cart.products.map((product) =>
        product.id === action.payload.id
          ? {
              ...product,
              quantity: product.quantity + action.payload.quantity,
              total:
                product.total +
                action.payload.price +
                action.payload.additionalOptionPrice,
            }
          : product
      );
    },
    decreaseProductQuantity: (state, action) => {
      state.cart.products = state.cart.products
        .map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                quantity: product.quantity - 1,
                total:
                  product.total -
                  (action.payload.price + action.payload.additionalOptionPrice),
              }
            : product
        )
        .filter((product) => product.quantity > 0);
    },
    setTotalPrice: (state = initialState) => {
      state.cart.total = state.cart.products.reduce((acc, curr) => {
        return acc + curr.total;
      }, 0);
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
  setTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;

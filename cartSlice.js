import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  searchTerm: ""
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        item => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        item => item.id === action.payload
      );

      if (item) item.quantity++;
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        item => item.id === action.payload
      );

      if (item && item.quantity > 1)
        item.quantity--;
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearCart: (state) => {
  state.cartItems = [];
},

  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  setSearchTerm,
  clearCart
} = cartSlice.actions;


export default cartSlice.reducer;

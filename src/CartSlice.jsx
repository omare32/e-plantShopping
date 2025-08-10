import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // Reducer for adding an item to the cart
    addItem: (state, action) => {
        const itemInCart = state.items.find(item => item.name === action.payload.name);
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            state.items.push({ ...action.payload, quantity: 1 });
        }
    },
    // Reducer for removing an item from the cart
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    // Reducer for updating the quantity of an item
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemInCart = state.items.find(item => item.name === name);
        if (itemInCart) {
            itemInCart.quantity = quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
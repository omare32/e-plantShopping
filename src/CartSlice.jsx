import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    [cite_start]// Reducer for adding an item to the cart [cite: 1]
    addItem: (state, action) => {
        const itemInCart = state.items.find(item => item.name === action.payload.name);
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            state.items.push({ ...action.payload, quantity: 1 });
        }
    },
    [cite_start]// Reducer for removing an item from the cart [cite: 1]
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    [cite_start]// Reducer for updating the quantity of an item [cite: 1]
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
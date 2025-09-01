import { createSlice } from '@reduxjs/toolkit';

const LOCAL_KEY = 'pn_cart_v2';

const load = () => {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
};

const save = (state) => {
  try { localStorage.setItem(LOCAL_KEY, JSON.stringify(state)); } catch {}
};

const initialState = load(); // { [productId]: { product, qty } }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      if (!state[product.id]) state[product.id] = { product, qty: 1 };
      else state[product.id].qty += 1;
      save(state);
    },
    setQty: (state, action) => {
      const { id, qty } = action.payload;
      if (qty <= 0) {
        delete state[id];
      } else {
        if (state[id]) state[id].qty = qty;
      }
      save(state);
    },
    increment: (state, action) => {
      const id = action.payload;
      if (state[id]) state[id].qty += 1;
      save(state);
    },
    decrement: (state, action) => {
      const id = action.payload;
      if (state[id]) {
        state[id].qty -= 1;
        if (state[id].qty <= 0) delete state[id];
      }
      save(state);
    },
    removeItem: (state, action) => {
      const id = action.payload;
      delete state[id];
      save(state);
    },
    clearCart: (state) => {
      Object.keys(state).forEach(k => delete state[k]);
      save(state);
    }
  }
});

export const { addToCart, setQty, increment, decrement, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ItemType} from '../../types/ItemType';

// Define the initial state using that type
interface ItemsSliceType {
  items: ItemType[];
}
const initialState: ItemsSliceType = {
  items: [],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ItemType>) => {
      state.items = [...state.items, action.payload];
    },
    removeItem: state => {
      //   state.value -= 1;
    },
  },
});

export const {addItem, removeItem} = itemsSlice.actions;

export default itemsSlice.reducer;

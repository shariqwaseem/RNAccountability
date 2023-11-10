import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {EntryType} from '../../types/EntryType';

// Define a type for the slice state
interface EntriesState {
  entries: EntryType[];
}

// Define the initial state using that type
const initialState: EntriesState = {
  entries: [],
};

export const counterSlice = createSlice({
  name: 'entries',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<EntryType>) => {
      state.entries = [...state.entries, action.payload];
    },
    removeEntry: state => {
      //   state.value -= 1;
    },
  },
});

export const {addEntry, removeEntry} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.entries;

export default counterSlice.reducer;

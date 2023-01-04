import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

/* note this has to be an object else you get an error */
export interface TrueFalseState {
    value: boolean;
  }

export const trueFalseSlice = createSlice({
        name: 'trueFalse',
        initialState: {value: false},
        reducers: {
            toggle: (state) => {
                state.value = !state.value;
            },
            setState: (state, action: PayloadAction<boolean>) => {
                state.value = action.payload
            }
        }
})

export const { toggle, setState } = trueFalseSlice.actions;

export const trueFalseValue = (state: RootState) => state.trueFalse.value;

export default trueFalseSlice.reducer;


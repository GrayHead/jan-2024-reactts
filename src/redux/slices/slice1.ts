import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type CounterStateType = {
    xxx: number
}

const initialState: CounterStateType = {
    xxx: 100500
};
export const counter1Slice = createSlice({
    name: "counter1",
    initialState: initialState,
    reducers: {
        increment: (state,
                    action: PayloadAction<number>) => {
            state.xxx = state.xxx + action.payload;
        },
        decrement: (state) => {
            state.xxx = state.xxx - 1;
        }
    }

});

export const {
    increment,
    decrement
} = counter1Slice.actions

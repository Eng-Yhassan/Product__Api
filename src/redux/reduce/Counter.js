import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: "newCounter",

    initialState: { // useSelector
        item: 0
    },
    reducers: { //usedispatch
        incriment: (state) => {
            state.item += 1
        },
    }
})

export const { incriment } = CounterSlice.actions


export default CounterSlice.reducer

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reduce/Counter"

const configStore= configureStore({
    reducer:{
        newCounter: counterSlice
    }
})
export default configStore
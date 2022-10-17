// 1. import reducer
import { createSlice } from "@reduxjs/toolkit";


// membuat const createSlice
const productSlice = createSlice({
    name : 'product',
    initialState : {
        title: "coba 1",
        value : "123"
    },
    // reducers > menerima object state, dan object action yang bertugas untuk menentukan bagaimana suatu state di ubah
    reducers : {
        update: (state, action) => {
            state.title = action.payload.title;
            state.value = action.payload.value;
        }
    }
});

export const {update} = productSlice.actions;
export default productSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const ProdactsSlice = createSlice({
    initialState: [],
    name: 'ProdactsSlice',
    reducers: {
        addProduct: (product, action) => {
            product.push(action.payload)
        }
    }
});
export default ProdactsSlice.reducer
export const { addProduct } = ProdactsSlice.actions
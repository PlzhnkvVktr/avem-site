import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IProduct } from "../../models/IProduct"

interface ProductState {
    products: IProduct[]
    isLoading: boolean
    error: string
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: ""
}

export const productBySubcategorySlice = createSlice({
    name: 'productsBySubCategory',
    initialState,
    reducers: {
        productBySubcategoryFetching(state) {
            state.isLoading = true
        },
        productBySubcategoryFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
            state.isLoading = false
            state.error = ''
            state.products = action.payload
        },
        productBySubcategoryFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default productBySubcategorySlice.reducer
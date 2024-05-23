import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";

interface ProductState {
    products: IProduct[]
    isLoadingProduct: boolean
    errorProduct: string
}

const initialState: ProductState = {
    products: [],
    isLoadingProduct: false,
    errorProduct: ""
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productFetching(state) {
            state.isLoadingProduct = true
        },
        productFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
            state.isLoadingProduct = false
            state.errorProduct = ''
            state.products = action.payload
        },
        productByNameFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
            state.isLoadingProduct = false
            state.errorProduct = ''
            state.products = action.payload
        },
        productByCategoryFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
            state.isLoadingProduct = false
            state.errorProduct = ''
            state.products = action.payload
        },
        productBySubcategoryFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
            state.isLoadingProduct = false
            state.errorProduct = ''
            state.products = action.payload
        },
        productFetchingError(state, action: PayloadAction<string>) {
            state.isLoadingProduct = false
            state.errorProduct = action.payload
        }
    }
})

export default productSlice.reducer
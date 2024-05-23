import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {ICategory} from "../../models/ICategory";

interface CategoryItemState {
    category: ICategory
    isLoading: boolean
    error: string
}

const initialState: CategoryItemState = {
    category: {
        id: "",
        name: "",
        path: "",
        subcategories: []
    },
    isLoading: false,
    error: ""
}

export const categoryItemSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        categoryItemSliceFetching(state) {
            state.isLoading = true
        },
        categoryItemSliceFetchingSuccess(state, action: PayloadAction<ICategory>) {
            state.isLoading = false
            state.error = ''
            state.category = action.payload
        },
        categoryItemSliceFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default categoryItemSlice.reducer
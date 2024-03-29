import axios from "axios";
import { AppDispatch } from "../store";
import { INews } from "../../models/INews";
import { newsSlice } from "./NewsReducer";
import { productSlice } from "./ProductReducer";
import { GetThunkAPI, createAsyncThunk } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { IProduct } from "../../models/IProduct";



export const fetchNews = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(newsSlice.actions.newsFetching())
        const response = await axios.get<INews[]>("http://127.0.0.1:8080/news")
        dispatch(newsSlice.actions.newsFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(newsSlice.actions.newsFetchingError(e.message))
    }
}

export const fetchProducts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productFetching())
        const response = await axios.get<IProduct[]>("http://127.0.0.1:8080/products")
        dispatch(productSlice.actions.productFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(productSlice.actions.productFetchingError(e.message))
    }
}

export const fetchProductsByCategory = (category: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productFetching())
        const response = await axios.get<IProduct[]>("http://127.0.0.1:8080/products/category/" + category)
        dispatch(productSlice.actions.productFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(productSlice.actions.productFetchingError(e.message))
    }
}

// export const fetchNews = createAsyncThunk(
//     'news/fetchAll',
//     async(_: void, thunkAPI: GetThunkAPI<{}>) => {
//         const response = await axios.get<INews[]>("http://127.0.0.1:8080/news")
//         return response.data
//     }
// )
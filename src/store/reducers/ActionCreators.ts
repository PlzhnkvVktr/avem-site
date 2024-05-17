import axios from "axios";
import { AppDispatch } from "../store";
import { INews } from "../../models/INews";
import { newsSlice } from "./NewsReducer";
import { productSlice } from "./ProductReducer";
import { GetThunkAPI, createAsyncThunk } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { IProduct } from "../../models/IProduct";
import { productByCategorySlice } from "./ProductByCategoryReducer";
import { productItemSlice } from "./ProductItemReducer";
import { newsItemSlice } from "./NewsItemReducer";
import { API_URL } from "../../const/const";
import { pageSlice } from "./PagesReducer";
import { IPage } from "../../models/IPage";
import { productBySubcategorySlice } from "./ProductBySubcategoryReducer";



export const fetchNews = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(newsSlice.actions.newsFetching())
        const response = await axios.get<INews[]>(API_URL + "news")
        dispatch(newsSlice.actions.newsFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(newsSlice.actions.newsFetchingError(e.message))
    }
}

export const fetchNewsItem = (id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(newsItemSlice.actions.newsItemFetching())
        const response = await axios.get<INews>(API_URL + "news/" + id)
        dispatch(newsItemSlice.actions.newsItemFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(newsItemSlice.actions.newsItemFetchingError(e.message))
    }
}


export const fetchProductItem = (id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productItemSlice.actions.productItemFetching())
        const response = await axios.get<IProduct>(API_URL + "products/" + id)
        dispatch(productItemSlice.actions.productItemFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(productItemSlice.actions.productItemFetchingError(e.message))
    }
}

export const fetchProductsByCategory = (category: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productByCategorySlice.actions.productByCategoryFetching())
        const response = await axios.get<IProduct[]>(API_URL + "products/category/" + category)
        dispatch(productByCategorySlice.actions.productByCategoryFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(productByCategorySlice.actions.productByCategoryFetchingError(e.message))
    }
}

export const fetchProductsBySubcategory = (subcategory: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productBySubcategorySlice.actions.productBySubcategoryFetching())
        const response = await axios.get<IProduct[]>(API_URL + "products/subcategory/" + subcategory)
        dispatch(productBySubcategorySlice.actions.productBySubcategoryFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(productBySubcategorySlice.actions.productBySubcategoryFetchingError(e.message))
    }
}

export const fetchPages = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(pageSlice.actions.pageFetching())
        const response = await axios.get<IPage[]>(API_URL + "/pages")
        dispatch(pageSlice.actions.pageFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(pageSlice.actions.pageFetchingError(e.message))
    }
}

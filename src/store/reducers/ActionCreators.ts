import axios from "axios";
import { AppDispatch } from "../store";
import { INews } from "../../models/INews";
import { newsSlice } from "./NewsReducer";
import { productSlice } from "./ProductReducer";
import { IProduct } from "../../models/IProduct";
import { productItemSlice } from "./ProductItemReducer";
import { newsItemSlice } from "./NewsItemReducer";
import { API_URL } from "../../const/const";
import { pageSlice } from "./PagesReducer";
import { IPage } from "../../models/IPage";
import { ICategory } from "../../models/ICategory";
import { categorySlice } from "./CategoryReducer";
import {categoryItemSlice} from "./CategoryItemReducer";


export const fetchCategories = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.categoryFetching())
        const response = await axios.get<ICategory[]>(API_URL + "categories")
        dispatch(categorySlice.actions.categoryFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(categorySlice.actions.categoryFetchingError(e.message))
    }
}

export const fetchCategoryById = (id: String) => async (dispatch: AppDispatch) => {
    try {
        dispatch(categoryItemSlice.actions.categoryItemSliceFetching())
        const response = await axios.get<ICategory>(API_URL + "categories/" + id)
        dispatch(categoryItemSlice.actions.categoryItemSliceFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(categoryItemSlice.actions.categoryItemSliceFetchingError(e.message))
    }
}

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

export const fetchProducts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productFetching())
        const response = await axios.get<IProduct[]>(API_URL + "products")
        dispatch(productSlice.actions.productFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(productSlice.actions.productFetchingError(e.message))
    }
}

export const fetchProductsByCategory = (category: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productFetching())
        const response = await axios.get<IProduct[]>(API_URL + "products/category/" + category)
        dispatch(productSlice.actions.productByCategoryFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(productSlice.actions.productFetchingError(e.message))
    }
}

export const fetchProductsBySubcategory = (subcategory: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productFetching())
        const response = await axios.get<IProduct[]>(API_URL + "products/subcategory/" + subcategory)
        dispatch(productSlice.actions.productBySubcategoryFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(productSlice.actions.productFetchingError(e.message))
    }
}

export const fetchProductsByName = (name: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productFetching())
        const response = await axios.get<IProduct[]>(API_URL + "products_search/" + name)
        dispatch(productSlice.actions.productByNameFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(productSlice.actions.productFetchingError(e.message))
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

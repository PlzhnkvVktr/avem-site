import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newsReducer from "./reducers/NewsReducer";
import productReducer from "./reducers/ProductReducer";
import productReducerByCategory from "./reducers/ProductByCategoryReducer";
import productReducerBySubcategory from "./reducers/ProductBySubcategoryReducer";
import productItemReducer from "./reducers/ProductItemReducer";
import newsItemReducer from "./reducers/NewsItemReducer";
import pageReducer from "./reducers/PagesReducer";

const rootReducer = combineReducers({
    newsReducer,
    productReducer,
    productReducerByCategory,
    productReducerBySubcategory,
    productItemReducer,
    newsItemReducer,
    pageReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type ppStore = ReturnType<typeof setupStore>
export type AppDispatch = ppStore['dispatch']
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newsReducer from "./reducers/NewsReducer";
import productReducer from "./reducers/ProductReducer";
import productReducerByCategory from "./reducers/ProductByCategoryReducer";
import productItemReducer from "./reducers/ProductItemReducer";

const rootReducer = combineReducers({
    newsReducer,
    productReducer,
    productReducerByCategory,
    productItemReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type ppStore = ReturnType<typeof setupStore>
export type AppDispatch = ppStore['dispatch']
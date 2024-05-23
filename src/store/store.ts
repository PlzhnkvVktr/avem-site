import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newsReducer from "./reducers/NewsReducer";
import productReducer from "./reducers/ProductReducer";
import productItemReducer from "./reducers/ProductItemReducer";
import newsItemReducer from "./reducers/NewsItemReducer";
import pageReducer from "./reducers/PagesReducer";
import categoryReducer from "./reducers/CategoryReducer";
import categoryItemReducer from "./reducers/CategoryItemReducer";

const rootReducer = combineReducers({
    newsReducer,
    productReducer,
    productItemReducer,
    newsItemReducer,
    pageReducer,
    categoryReducer,
    categoryItemReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type ppStore = ReturnType<typeof setupStore>
export type AppDispatch = ppStore['dispatch']
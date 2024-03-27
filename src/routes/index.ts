import { createBrowserRouter } from "react-router-dom";
import {NewsPage} from "../pages/News/NewsPage";
import { Root } from "react-dom/client";

interface RoutesType {
    path: string,
    element: JSX.Element
}

export const routes: Array<RoutesType> = [
    // {path: '/news', element: <NewsPage />},
    // {path: '/products', element: <Main />},
]

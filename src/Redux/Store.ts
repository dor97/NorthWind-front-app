import { configureStore } from "@reduxjs/toolkit"
import { AppState } from "./AppState"
import { productReducers } from "./ProductsSlice";
import { authReducers } from "./AuthSlice";

//Create the app store which manage redux operations:
export const appStore = configureStore<AppState>({
    reducer: {
        products: productReducers,
        user: authReducers
    }
});
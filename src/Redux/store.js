import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './products/productSlice'
import authReducer from './auth/authSlice'
import cartReducer from './cartSlice'

export const store = configureStore({

    reducer:{

        products:productsReducer,

        auth:authReducer,

        cart:cartReducer

    }

})
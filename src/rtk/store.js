import { configureStore } from '@reduxjs/toolkit';
import ProductsReducer from './slices/product-slice';
import CardReduce from './slices/card-slice';

export const store = configureStore({
    reducer: {
        products: ProductsReducer,
        cart:CardReduce
    },
});
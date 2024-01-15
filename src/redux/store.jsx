import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../redux/feature/counter/CounterSlice';
// import logger from "redux-logger";
import logger from './middlewares/Logger'

const store = configureStore({
    reducer: {
        counter:CounterReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
})


export default store;
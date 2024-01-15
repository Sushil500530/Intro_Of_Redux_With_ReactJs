import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../redux/feature/counter/CounterSlice';


const store = configureStore({
    reducer: {
        counter:CounterReducer
    }
})


export default store;
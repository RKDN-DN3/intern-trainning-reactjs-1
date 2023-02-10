
import { configureStore } from "@reduxjs/toolkit";
import myListReducer from "./Reducer/MyReducer";

//store
const store = configureStore({
    reducer: {
        myListReducer: myListReducer,
    }
})


//export store
export default store
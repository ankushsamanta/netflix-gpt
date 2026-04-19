import { configureStore } from "@reduxjs/toolkit";
import {userSlice} from "../utils/userSlice";
import userReducer from "../utils/userSlice";



const appStore = configureStore(
    {
        reducer:{
            user: userReducer,
        }
    }
)

export default appStore;
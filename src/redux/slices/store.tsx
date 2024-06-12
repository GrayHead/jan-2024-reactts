import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./userSlice";
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer
    }
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

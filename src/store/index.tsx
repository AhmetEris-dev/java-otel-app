import { configureStore } from "@reduxjs/toolkit";
import { adminSlice, authSlice, reservationSlice } from "./feature";
import { roomSlice} from './feature'
import { useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    reservation: reservationSlice,
    room: roomSlice,
    auth: authSlice,
    admin: adminSlice
  }
})


export type JavaOtelDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const OtelUseSelector = useSelector.withTypes<RootState>(); 

export default store;
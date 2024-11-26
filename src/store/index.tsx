import { configureStore } from "@reduxjs/toolkit";
import { reservationSlice } from "./feature";
import { roomSlice} from './feature'
import { useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    reservation: reservationSlice,
    room: roomSlice
  }
})


export type JavaOtelDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const OtelUseSelector = useSelector.withTypes<RootState>(); 

export default store;
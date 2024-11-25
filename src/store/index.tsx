import { configureStore } from "@reduxjs/toolkit";
import { reservationSlice } from "./feature";

const store = configureStore({
  reducer: {
    reservation: reservationSlice
  }
})


export type JavaOtelDispatch = typeof store.dispatch;


export default store;
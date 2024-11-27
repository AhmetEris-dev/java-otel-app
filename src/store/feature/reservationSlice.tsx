import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IReservationRequest } from "../../models/IReservationRequest"
import { IBaseResponse } from "../../models/IBaseResponse"
import apis from "../../constant/RestApis"
import swal from 'sweetalert'
import { IReservationResponse } from "../../models/IReservationResponse"

interface IReservationState {
    reservationList: IReservationResponse[],
    isLoadingReservationList: boolean
}

const initialReservationState: IReservationState = {
    reservationList: [],
    isLoadingReservationList: false

}

//rezervasyon ekleme
export const fetchAddReservation = createAsyncThunk(
    'reservation/fetchAddReservation',
    async(payload: IReservationRequest) => {
        return await fetch(apis.reservationService + '/add-Reservation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(data => data.json())
    }
)

//rezervasyon listeleme
export const fetchGetAllReservation = createAsyncThunk(
    'reservation/fetchGetAllReservation',
    async() => {
        return await fetch(apis.reservationService + '/reservation-list').then(data => data.json())
    }
)



const reservationSlice = createSlice({
    name: 'reservation',
    initialState: initialReservationState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(fetchGetAllReservation.pending, (state) => {
            state.isLoadingReservationList = true
        })
        build.addCase(fetchGetAllReservation.fulfilled, (state, action: PayloadAction<IBaseResponse>) => {
            state.isLoadingReservationList = false;
            if(action.payload.code === 200)
                state.reservationList = action.payload.data
        })
    }
})

export default reservationSlice.reducer;
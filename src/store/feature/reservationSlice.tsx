import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IRoomRequest } from "../../models/IRoomRequest"
import { IBaseResponse } from "../../models/IBaseResponse"
import apis from "../../constant/RestApis"
import swal from 'sweetalert'

const initialReservationState = {
    isNewReservationLoading: false
}

export const fetchAddReservation = createAsyncThunk(
    'post/fetchAddReservation',
    async(payload: IRoomRequest) => {
        return await fetch(apis.reservationService + '/add-Reservation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(data => data.json())
    }
)

const reservationSlice = createSlice({
    name: 'post',
    initialState: initialReservationState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(fetchAddReservation.pending, (state) => {
            state.isNewReservationLoading = true
        })
        build.addCase(fetchAddReservation.fulfilled, (state, action: PayloadAction<IBaseResponse>) => {
            state.isNewReservationLoading = false;

            if(action.payload.code === 200) {
                swal('Başarılı','Rezervasyon işleminiz başarıyla gerçekleşmiştir.', 'success');
            }
            else{
                swal('Hata! ', action.payload.message, 'error'); 
            }
        })
    }
})

export default reservationSlice.reducer;
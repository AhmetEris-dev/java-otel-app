import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IReservationRequest } from "../../models/IReservationRequest"
import { IBaseResponse } from "../../models/IBaseResponse"
import apis from "../../constant/RestApis"
import swal from 'sweetalert'
import { IReservationResponse } from "../../models/IReservationResponse"
import { IReservationUpdateRequest } from "../../models/IReservationUpdateRequest"
import { data } from "jquery"

interface IReservationState {
    reservationList: IReservationResponse[],
    isLoadingReservationList: boolean,
    isLoadingUpdateReservation: boolean
}

const initialReservationState: IReservationState = {
    reservationList: [],
    isLoadingReservationList: false,
    isLoadingUpdateReservation: false

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

//rezervasyon güncelleme
export const fetchUpdateReservation = createAsyncThunk(
    'reservation/fetchUpdateReservation',
    async(payload: IReservationUpdateRequest) => {
        return await fetch(apis.reservationService + '/reservation-update', {
            method: 'PUT',
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


//rezervasyon silme
export const fetchDeleteReservation = createAsyncThunk(
    'reservation/fetchDeleteReservation',
    async(id: number) => {
        
        return await fetch(apis.reservationService + '/reservation-delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'id': id})
        }).then(data => data.json())
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
        build.addCase(fetchUpdateReservation.pending, (state) => {
            state.isLoadingUpdateReservation = true;
        })
        build.addCase(fetchUpdateReservation.fulfilled, (state, action: PayloadAction<IBaseResponse>) => {
            state.isLoadingUpdateReservation = false;
            if(action.payload.code === 200)
                swal('Başarılı', 'Rezervasyon güncelleme işlemi başarılı...', 'success');
            else
                swal('Hata!', action.payload.message, 'warning');
        })
    }
})

export default reservationSlice.reducer;
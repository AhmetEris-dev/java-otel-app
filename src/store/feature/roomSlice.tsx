import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IRoomRequest } from "../../models/IRoomRequest"
import apis from "../../constant/RestApis"
import { IBaseResponse } from "../../models/IBaseResponse"
import { data } from "jquery"
import state from "sweetalert/typings/modules/state"
import { IRoomResponse } from "../../models/IRoomResponse"
import { IRoomUpdateRequest } from "../../models/IRoomUpdateRequest"
import { IRoomDeleteRequest } from "../../models/IRoomDeleteRequest"



interface IRoomState {
    roomList: IRoomResponse[]
    isLoadingRoomList: boolean,
    isNewRoomLoading: boolean,
    isLoadingUpdateRoomList: boolean,
    isRoomDeleteLoading: boolean
}

const initialRoomState: IRoomState = {
    roomList: [],
    isLoadingRoomList: false,
    isNewRoomLoading: false,
    isLoadingUpdateRoomList: false,
    isRoomDeleteLoading: false
}


//fetch

//yeni oda ekleme
export const fetchNewRooms = createAsyncThunk(
    'room/fetchNewRooms',
    async(payload: IRoomRequest) => {
        return await fetch(apis.roomService + '/add-room', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(data => data.json())
    }
)

//Tüm odaları listeler
export const fetchGetAllRooms = createAsyncThunk(
    'room/fetchGetAllRooms',
    async() => {
        return await fetch(apis.roomService + '/room-list').then(data => data.json())
    }
)

//Oda güncelleme
export const fetchUpdateRooms = createAsyncThunk(
    'room/fetchUpdateRooms',
    async(payload: IRoomUpdateRequest) => {
        return await fetch(apis.roomService + '/room-update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(data => data.json())
    }
)


//Oda silme
export const fetchDeleteRooms = createAsyncThunk(
    'room/fetchDeleteRooms',
    async(id: number) => {
        console.log(id);
        
        return await fetch(apis.roomService + '/room-delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'id': id})
        }).then(data => data.json())
    }
)


const roomSlice = createSlice({
    name: 'room',
    initialState: initialRoomState,
    reducers: {

    },
    extraReducers: (build) => {
        build.addCase(fetchNewRooms.pending, (state) => {
            state.isNewRoomLoading = true
        })
        build.addCase(fetchNewRooms.fulfilled, (state, action: PayloadAction<IBaseResponse>) => {
            state.isNewRoomLoading = false
        })
        build.addCase(fetchGetAllRooms.pending, (state) => {
            state.isLoadingRoomList = true
        })
        build.addCase(fetchGetAllRooms.fulfilled, (state, action: PayloadAction<IBaseResponse>) => {
            state.isLoadingRoomList = false
            if(action.payload.code === 200){
                state.roomList = action.payload.data;
            }
        })
        build.addCase(fetchUpdateRooms.pending, (state) => {
            state.isLoadingUpdateRoomList = true
        })
        build.addCase(fetchUpdateRooms.fulfilled, (state) => {
            state.isLoadingUpdateRoomList = false
        })
        build.addCase(fetchDeleteRooms.pending, (state) => {
            state.isRoomDeleteLoading = true
        })
        build.addCase(fetchDeleteRooms.fulfilled, (state, action) => {
            state.isRoomDeleteLoading = false
        })
    }
})

export default roomSlice.reducer;
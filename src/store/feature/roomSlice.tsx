import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IRoomRequest } from "../../models/IRoomRequest"
import apis from "../../constant/RestApis"
import { IBaseResponse } from "../../models/IBaseResponse"

const initialRoomState = {
    roomList: [],
    isLoadingRoomList: false
}


//fech
export const fetchNewRooms = createAsyncThunk(
    'post/fetchNewRooms',
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


const roomSlice = createSlice({
    name: 'room',
    initialState: initialRoomState,
    reducers: {

    },
    extraReducers: (build) => {
        build.addCase(fetchNewRooms.pending, (state) => {
            state.isLoadingRoomList = true
        })
        build.addCase(fetchNewRooms.fulfilled, (state, action: PayloadAction<IBaseResponse>) => {
            state.isLoadingRoomList = false;
            if(action.payload.code === 200){
                state.isLoadingRoomList = action.payload.data;
            }
        })
    }
})

export default roomSlice.reducer;
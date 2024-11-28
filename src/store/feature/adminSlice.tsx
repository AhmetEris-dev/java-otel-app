import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apis from "../../constant/RestApis";

import { IBaseResponse } from "../../models/IBaseResponse";
import { IProfile } from "../../models/IProfile";

interface IUserState{
    profile: IProfile | null,
    isProfileLoading: boolean,
  
}

const initialUserState: IUserState = {
    profile: null,
    isProfileLoading: false
}

//fetch
export const fetchGetProfileByToken = createAsyncThunk(
    'admin/fetchGetProfileByToken',
    async() => {
     const token = localStorage.getItem('token');
      return await fetch(apis.adminService + '/get-profile?token='+token)
      .then(data=>data.json());
    }
)


const userSlice = createSlice({
    name: 'admin',
    initialState: initialUserState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(fetchGetProfileByToken.pending, (state) =>{
            state.isProfileLoading = true;
        });
        build.addCase(fetchGetProfileByToken.fulfilled, (state, action: PayloadAction<IBaseResponse>) => {
            state.isProfileLoading = false;
            if(action.payload.code === 200){
                state.profile = action.payload.data; //gelen kullanıcı bilgilerine profil state ine setle.
        
                
            }
        })
    }
}) 

export default userSlice.reducer;
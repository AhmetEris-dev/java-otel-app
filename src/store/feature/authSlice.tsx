import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import apis from "../../constant/RestApis";

import state from "sweetalert/typings/modules/state";
import { IBaseResponse } from "../../models/IBaseResponse";
import swal from "sweetalert";
import { ILoginRequest } from "../../models/ILoginRequest";

const initialAuthState ={
    isAuth: false, //login oldu mu?
    isLoginLoading: false,
    isRegisterLoading: false,
    user: {} // user ile ilgili temelm bilgiler burada yer alabilir.
}

//fetch işlemleri

export const fetchLogin = createAsyncThunk(
    'auth/fetchLogin',
    async (payload: ILoginRequest) => {
        const response = await fetch(
            apis.authService + '/admin-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)

            }).then(data => data.json())
      return response;
    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        userLogout(state){
            state.isAuth = false;   
        },
        userLogin(state){
            state.isAuth = true;
        }
    },
    extraReducers: (build) => {
        build.addCase(fetchLogin.pending, (state) => {
            state.isLoginLoading = true;
        })
        build.addCase(fetchLogin.fulfilled, (state, action: PayloadAction<IBaseResponse>) => {
            state.isLoginLoading = false;

            if(action.payload.code === 200) {
                localStorage.setItem('token', action.payload.data); //token değerini data ya veriyoruz.
                state.isAuth = true; // kullanıcı login oldu  
            } else {
                swal('Hata! ', action.payload.message, 'error'); //bir hata olduysa swal ile uyarı vereceğiz.
            }
        })
      
    }
})
export const{
    userLogout, userLogin
} = authSlice.actions;
export default authSlice.reducer;
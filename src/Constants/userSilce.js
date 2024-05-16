import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        displayName:"user",
    },
    reducers:{

       adduser:(state,action)=>
       {
        return action.payload;
       },
       removeuser:(state,action)=>
       {
        return null;
       }

    }

    
})
export const {adduser,removeuser}=userSlice.actions
export default userSlice.reducer
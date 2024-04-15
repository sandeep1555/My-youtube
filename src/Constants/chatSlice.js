import { createSlice } from "@reduxjs/toolkit";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        Livechat:[],
    },
    reducers:{
        addLivechat:(state,action)=>
        {
            state.Livechat.splice(10,1);
            state.Livechat.unshift(action.payload);
        }
    }
})


export const {addLivechat}= chatSlice.actions;
export default  chatSlice.reducer
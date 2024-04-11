import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        changeSideBar:true,
    },
    reducers:
    {
        getSideBar:(state)=>
        {
            state.changeSideBar= !state.changeSideBar;
        },
        closeSideBar:(state)=>
        {
            state.changeSideBar= false;
        }
    }
})
export const {getSideBar,closeSideBar}=configSlice.actions
export  default configSlice.reducer
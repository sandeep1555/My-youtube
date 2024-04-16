import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        changeSideBar:true,
        toggleButton:true,
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
        },
        AddtoggleButton:(state)=>
        {
            state.toggleButton=!state.toggleButton
        }
    }
})
export const {getSideBar,closeSideBar,AddtoggleButton}=configSlice.actions
export  default configSlice.reducer
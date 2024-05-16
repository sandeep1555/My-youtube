import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        changeSideBar:true,
        toggleButton:true,
        activeButton:'All',
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
            state.toggleButton= !state.toggleButton
        },
        setactiveButton:(state,action)=>
        {
            state.activeButton=action.payload;
        }
       
    }
})
export const {getSideBar,closeSideBar,AddtoggleButton,setactiveButton}=configSlice.actions
export  default configSlice.reducer
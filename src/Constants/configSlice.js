import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        changeSideBar:true,
        toggleButton:true,
        allButton:true,
        musicButton:false,
        newsButton:false,
        sportsButon:false,
        liveButton:false,
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
        addAllButton:(state,action)=>
        {
            state.allButton=!state.allButton;
        },
        addMusicButton:(state,action)=>
        {
            state.musicButton=!state.musicButton
        },
        addNewsButton:(state,action)=>
        {
            state.newsButton=!state.newsButton
        },
        addSportsButton:(state)=>
        {
            state.sportsButon=!state.sportsButon;
        },
        addLiveButton:(state)=>
        {
            state.liveButton=!state.liveButton;
        },
    }
})
export const {getSideBar,closeSideBar,AddtoggleButton,addAllButton,addMusicButton,addNewsButton,addSportsButton,addLiveButton}=configSlice.actions
export  default configSlice.reducer
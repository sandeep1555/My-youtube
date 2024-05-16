import { createSlice } from "@reduxjs/toolkit";

const videosSlice=createSlice({
    name:"videos",
    initialState:{
        popularvideo:null,
        musicvideo:null,
        newsvideo:null,
        livevideo:null,
        sportsvideo:null,
        searchvideo:null,
        channelInfo:null,
    },
    reducers:{
        getPopularvideo:(state,action)=>
        {
             state.popularvideo=action.payload;
        },
        getMusicvideo:(state,action)=>
        {
             state.musicvideo=action.payload;
        },
        getNewsvideo:(state,action)=>
        {
             state.newsvideo=action.payload;
        },
        getLivevideo:(state,action)=>
        {
             state.livevideo=action.payload;
        },
        getSportsvideo:(state,action)=>
        {
             state.livevideo=action.payload;
        },
        getSearchvideo:(state,action)=>
        {
             state.searchvideo=action.payload;
        },
        getChannelInfo:(state,action)=>
        {
          state.channelInfo=action.payload;
        }
    }
})

export const {getPopularvideo,getMusicvideo,getNewsvideo,getLivevideo,getSportsvideo,getSearchvideo,getChannelInfo}=videosSlice.actions;
export default videosSlice.reducer

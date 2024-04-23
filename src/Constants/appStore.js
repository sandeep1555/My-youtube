import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice";
import searchcacheReducer from "./suggestionSlice.js"
import chatSlice from "./chatSlice.js";
import VideosSlice from "./VideosSlice.js";
import userSilce from "./userSilce.js";

const appStore=configureStore({
    reducer:
    {
      config:configReducer,
      searchcache:searchcacheReducer,
      livechat:chatSlice,
      videos:VideosSlice,
      user:userSilce,
    }
})

export default appStore
import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice";
import searchcacheReducer from "./suggestionSlice.js"
import chatSlice from "./chatSlice.js";

const appStore=configureStore({
    reducer:
    {
      config:configReducer,
      searchcache:searchcacheReducer,
      livechat:chatSlice,
    }
})

export default appStore
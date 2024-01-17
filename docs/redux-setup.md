- make a new folder in src `store`
- make a `store.js` file in it
- after configuring store.js , make a nw file `authSlice.js` in store folder

**in store.js**

- import { configureStore } from "@reduxjs/toolkit";
- then make store as :: const store = configureStore({}) :: and then expot default store
- store recives on parameter that is reducer

**authSlice.js**

- function of authSlice is to keep track of authentication
- import { createSlice } from "@reduxjs/toolkit";
- create a authSlice as :: const authSlice = createSlice({}); :+1:
- this authSlice need : name, initialState, and reducer / (functions , methods)
- define initialState : `const initialState = {
  status: false, // by-default user is not authenticated
  userData: null }`
- - exporting 2 things
    - 1: reducer from authSlice :: `export default authSlice.reducer`
    - 2: individual functions of the reducer : these are actually actions > login, logout, etc
    - `export const { login, logout } = authSlice.actions;`

- now defining reducers
- login reducer

import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState : {
    token : "",
  },
  reducers: {
    setAuth: (state, action) => {
        state.token = action.payload.response.body.token;
    }
  },
})

export const {setAuth} = authSlice.actions;
export default authSlice.reducer;
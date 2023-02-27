import { createSlice } from '@reduxjs/toolkit';
import { appData } from '../States';

const Reducer = createSlice({
  name: 'AppReducer',
  initialState: appData,
  reducers: {
    updateUsername(state, action) {
      state.userData = {
        ...state.userData,
        username: action.payload,
      };
    },
    updateCompany(state, action) {
      state.userData = {
        ...state.userData,
        CompanyName: action.payload,
      };
    },
    updatePassword(state, action) {
      state.userData = {
        ...state.userData,
        password: action.payload,
      };
    },
    isUserLogin(state, action) {
      state.isLogin = action.payload;
    },
  },
});

export const { updateUsername, updateCompany, updatePassword, isUserLogin } =
  Reducer.actions;
export default Reducer.reducer;

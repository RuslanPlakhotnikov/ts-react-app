import { createSlice } from '@reduxjs/toolkit'

interface IUserState {
  balance: number,
  info: {
    logoLink: string | null,
    email: string
  } | null
}

const defaultState: IUserState = {
  balance: 0,
  info: null
};

export const userSlice = createSlice({
  name: "user",
  initialState: defaultState,
  reducers: {
    setDeposit: (state, action) => {
      state.balance = action.payload;
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    }
  },
});

export const { setDeposit, setInfo } = userSlice.actions;

export default userSlice.reducer;

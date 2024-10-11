import { createSlice } from '@reduxjs/toolkit'

interface IUIState {
  clientWidth: number
}

const defaultState: IUIState = {
  clientWidth: document.documentElement.clientWidth
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: defaultState,
  reducers: {
    setClientWidth: (state, action) => {
      state.clientWidth = action.payload;
    }
  },
});

export const { setClientWidth } = uiSlice.actions;

export default uiSlice.reducer;

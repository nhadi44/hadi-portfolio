import { createSlice } from '@reduxjs/toolkit';

interface OffcanvasState {
  open: boolean;
}

const initialState: OffcanvasState = {
  open: false,
};

export const offcanvasSlice = createSlice({
  name: 'offcanvas',
  initialState,
  reducers: {
    openOffcanvas: (state) => {
      state.open = true;
    },
    closeOffcanvas: (state) => {
      state.open = false;
    },
  },
});

export const { openOffcanvas, closeOffcanvas } = offcanvasSlice.actions;
export default offcanvasSlice.reducer;
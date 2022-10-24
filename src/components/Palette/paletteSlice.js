import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const paletteSlice = createSlice({
  name: 'palette',
  initialState,

  reducers: {
    addColor: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (color) => ({
        payload: {
          id: nanoid(),
          color,
        },
      }),
    },
    changeColor: {
      reducer: (state, action) => {
        const index = state.findIndex((elem) => elem.id === action.payload);
        state.splice(index, 1, action.payload);
      },
      prepare: (color) => ({
        payload: {
          // id,
          color,
        },
      }),
    },

    removeColor(state, action) {
      const index = state.findIndex((elem) => elem.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { changeColor, addColor, removeColor } = paletteSlice.actions;
export default paletteSlice.reducer;

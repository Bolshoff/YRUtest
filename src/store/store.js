import { configureStore } from '@reduxjs/toolkit';
import paletteReducer from '../components/Palette/paletteSlice';

export default configureStore({
  reducer: {
    palette: paletteReducer,
  },
});

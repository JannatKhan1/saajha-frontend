import { configureStore } from '@reduxjs/toolkit';
import ngoReducer from '../features/ngos/ngoSlice'
import requirementReducer from '../features/requirements/requirementSlice'


export const store = configureStore({
  reducer: {
    ngos: ngoReducer,
    requirements: requirementReducer,
  },
});

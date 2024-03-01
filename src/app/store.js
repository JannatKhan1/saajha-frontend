import { configureStore } from '@reduxjs/toolkit';
import ngoReducer from '../features/ngos/ngoSlice'
import requirementReducer from '../features/requirements/requirementSlice'
import volunteerReducer from '../features/volunteers/volunteerSlice'
import adminReducer from '../features/admins/adminSlice'


export const store = configureStore({
  reducer: {
    ngos: ngoReducer,
    requirements: requirementReducer,
    volunteers: volunteerReducer,
    admins: adminReducer,
  },
});

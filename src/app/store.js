import { configureStore } from '@reduxjs/toolkit';
import ngoReducer from '../features/ngos/ngoSlice'
import requirementReducer from '../features/requirements/requirementSlice'
import volunteerReducer from '../features/volunteers/volunteerSlice'
import adminReducer from '../features/admins/adminSlice'
import applicationReducer from '../features/applications/applicationSlice'
import requestReducer from '../features/requests/requestSlice'
import caseReducer from '../features/casee/caseSlice'
import counsellorReducer from '../features/counsellors/counsellorSlice'

export const store = configureStore({
  reducer: {
    ngos: ngoReducer,
    requirements: requirementReducer,
    volunteers: volunteerReducer,
    admins: adminReducer,
    applications: applicationReducer,
    requests: requestReducer,
    casee: caseReducer,
    counsellors: counsellorReducer,
  },
});

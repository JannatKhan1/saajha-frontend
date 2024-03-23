import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import applicationService from './applicationService'

const initialState = {
  applications: [],
  application: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new application
export const createApplication = createAsyncThunk(
  'applications/create',
  async ({applicationData,ngoId}, thunkAPI) => {
    try {
      const token = thunkAPI.getState().volunteers.volunteer.token
      return await applicationService.createApplication(applicationData,ngoId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)
// Get volunteer Applications
export const getApplications = createAsyncThunk(
  'applications/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().volunteers.volunteer.token
      return await applicationService.getApplications(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createApplication.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createApplication.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createApplication.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getApplications.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getApplications.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.applications = action.payload
      })
      .addCase(getApplications.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = applicationSlice.actions
export default applicationSlice.reducer
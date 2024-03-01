import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import volunteerService from './volunteerService'
import { extractErrorMessage } from '../../utils'

// Get volunteer from localstorage
const volunteer = JSON.parse(localStorage.getItem('volunteer'))

const initialState = {
  volunteer: volunteer ? volunteer : null,
  isLoading: false,
}

// Register new volunteer
export const registerVolunteer = createAsyncThunk(
  'volunteer/register',
  async (volunteer, thunkAPI) => {
    try {
      return await volunteerService.registerVolunteer(volunteer)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// Login volunteer
export const loginVolunteer = createAsyncThunk('volunteer/login', async (volunteer, thunkAPI) => {
  try {
    return await volunteerService.loginVolunteer(volunteer)
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error))
  }
})

// Logout volunteer
export const logoutVolunteer = createAction('volunteer/logout', () => {
  volunteerService.logoutVolunteer()
  return {}
})


export const volunteerSlice = createSlice({
  name: 'volunteer',
  initialState,
  reducers: {
    logoutVolunteer: (state) => {
      state.volunteer = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerVolunteer.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerVolunteer.fulfilled, (state, action) => {
        state.volunteer = action.payload
        state.isLoading = false
      })
      .addCase(registerVolunteer.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(loginVolunteer.pending, (state) => {
        state.isLoading = false
      })
      .addCase(loginVolunteer.fulfilled, (state, action) => {
        state.volunteer = action.payload
        state.isLoading = false
      })
      .addCase(loginVolunteer.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export default volunteerSlice.reducer
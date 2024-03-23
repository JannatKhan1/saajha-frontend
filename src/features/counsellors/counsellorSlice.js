import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import counsellorService from './counsellorService'
import { extractErrorMessage } from '../../utils'

// Get counsellor from localstorage
const counsellor = JSON.parse(localStorage.getItem('counsellor'))

const initialState = {
  counsellor: counsellor ? counsellor : null,
  isLoading: false,
}

// Register new counsellor
export const registerCounsellor = createAsyncThunk(
  'counsellor/register',
  async (counsellor, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admins.admin.token
      return await counsellorService.registerCounsellor(counsellor,token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// Login counsellor
export const loginCounsellor = createAsyncThunk('counsellor/login', async (counsellor, thunkAPI) => {
  try {
    return await counsellorService.loginCounsellor(counsellor)
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error))
  }
})

// Logout counsellor
export const logoutCounsellor = createAction('counsellor/logout', () => {
  counsellorService.logoutCounsellor()
  return {}
})


export const counsellorSlice = createSlice({
  name: 'counsellor',
  initialState,
  reducers: {
    logoutCounsellor: (state) => {
      state.counsellor = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerCounsellor.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerCounsellor.fulfilled, (state, action) => {
        state.counsellor = action.payload
        state.isLoading = false
      })
      .addCase(registerCounsellor.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(loginCounsellor.pending, (state) => {
        state.isLoading = false
      })
      .addCase(loginCounsellor.fulfilled, (state, action) => {
        state.counsellor = action.payload
        state.isLoading = false
      })
      .addCase(loginCounsellor.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export default counsellorSlice.reducer
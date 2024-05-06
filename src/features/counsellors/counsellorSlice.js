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

// Get Counsellor details
export const getCounsellor = createAsyncThunk(
  'counsellor/get',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().counsellors.counsellor.token
      return await counsellorService.getCounsellor(token)
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


// Update Counsellor
export const updateCounsellor = createAsyncThunk(
  'counsellor/update',
  async ({counsellorId, counsellorData}, thunkAPI) => {
    try {
      const token = thunkAPI.getState().counsellors.counsellor.token
      return await counsellorService.updateCounsellor(counsellorId, counsellorData, token)
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
      .addCase(getCounsellor.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCounsellor.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.counsellor = action.payload
      })
      .addCase(getCounsellor.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateCounsellor.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateCounsellor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.counsellor = action.payload;
      })
      
      .addCase(updateCounsellor.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export default counsellorSlice.reducer
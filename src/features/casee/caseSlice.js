import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import caseService from './caseService'
import { extractErrorMessage } from '../../utils'

// Get case from localstorage
const casee = JSON.parse(localStorage.getItem('case'))

const initialState = {
  casee: casee ? casee : null,
  isLoading: false,
}

// Register new case
export const registerCase = createAsyncThunk(
  'casee/register',
  async (casee, thunkAPI) => {
    try {
      const token = thunkAPI.getState().counsellors.counsellor.token
      return await caseService.registerCase(casee,token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// Login case
export const loginCase = createAsyncThunk('casee/login', async (casee, thunkAPI) => {
  try {
    return await caseService.loginCase(casee)
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error))
  }
})

// Logout case
export const logoutCase = createAction('casee/logout', () => {
  caseService.logoutCase()
  return {}
})


export const caseSlice = createSlice({
  name: 'casee',
  initialState,
  reducers: {
    logoutCase: (state) => {
      state.casee = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerCase.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerCase.fulfilled, (state, action) => {
        state.casee = action.payload
        state.isLoading = false
      })
      .addCase(registerCase.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(loginCase.pending, (state) => {
        state.isLoading = false
      })
      .addCase(loginCase.fulfilled, (state, action) => {
        state.casee = action.payload
        state.isLoading = false
      })
      .addCase(loginCase.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export default caseSlice.reducer
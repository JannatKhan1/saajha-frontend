import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import adminService from './adminService'

import { extractErrorMessage } from '../../utils'

// Get admin from localstorage
const admin = JSON.parse(localStorage.getItem('admin'))

const initialState = {
  admin: admin ? admin : null,
  isLoading: false,
}

// Register new admin
export const registerAdmin = createAsyncThunk(
  'admin/register',
  async (admin, thunkAPI) => {
    try {
      return await adminService.registerAdmin(admin)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// Login admin
export const loginAdmin = createAsyncThunk('admin/login', async (admin, thunkAPI) => {
  try {
    return await adminService.loginAdmin(admin)
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error))
  }
})

// Logout user
export const logoutAdmin = createAction('admin/logout', () => {
  adminService.logoutAdmin()
  return {}
})

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    logout: (state) => {
      state.admin = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAdmin.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerAdmin.fulfilled, (state, action) => {
        state.admin = action.payload
        state.isLoading = false
      })
      .addCase(registerAdmin.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(loginAdmin.pending, (state) => {
        state.isLoading = false
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.admin = action.payload
        state.isLoading = false
      })
      .addCase(loginAdmin.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export default adminSlice.reducer
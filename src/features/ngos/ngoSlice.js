import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ngoService from './ngoService'

const initialState = {
  ngos: [],
  ngo: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all NGOs
export const getNGOs = createAsyncThunk(
  'ngos/getAll',
  async (_, thunkAPI) => {
    try {
      return await ngoService.getNGOs()
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

//Version 3
// Get NGO by ID
export const getNGO = createAsyncThunk(
  'ngos/get',
  async (ngoId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admins.admin.token
      console.log('Token: ', token)
      return await ngoService.getNGO(ngoId, token)
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

export const ngoSlice = createSlice({
  name: 'ngo',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNGOs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getNGOs.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.ngos = action.payload
      })
      .addCase(getNGOs.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      //Version 3
      .addCase(getNGO.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getNGO.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.ngo = action.payload
      })
      .addCase(getNGO.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = ngoSlice.actions
export default ngoSlice.reducer
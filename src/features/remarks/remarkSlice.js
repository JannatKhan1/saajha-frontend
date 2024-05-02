//VERSION 4
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import remarkService from './remarkService'


const initialState = {
  remarks: [],
  remark: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}



// Add Remarks
export const addRemarks = createAsyncThunk(
  'remarks/addRemarks',
  async ({remarkData,caseId}, thunkAPI) => {
    try {
      const token = thunkAPI.getState().counsellors.counsellor.token
      return await remarkService.addRemarks(remarkData,caseId, token)
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

// Get case remarks
export const getRemarks = createAsyncThunk(
  'remarks/getRemarks',
  async (caseId, thunkAPI) => {
    try {
      return await remarkService.getRemarks(caseId)
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

export const remarkSlice = createSlice({
  name: 'remark',
  initialState,
  reducers: {
    initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addRemarks.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addRemarks.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(addRemarks.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getRemarks.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getRemarks.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.requests = action.payload
      })
      .addCase(getRemarks.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export default remarkSlice.reducer
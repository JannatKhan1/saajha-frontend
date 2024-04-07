//VERSION 4
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import actionService from './actionService'


const initialState = {
  actions: [],
  action: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all cases by counsellor
export const getAll = createAsyncThunk(
    'casee/getAll',
    async (counsellorId, thunkAPI) => {
      try {
          const token = thunkAPI.getState().counsellors.counsellor.token
          return await actionService.getAll(counsellorId,token)
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


export const actionSlice = createSlice({
  name: 'action',
  initialState,
  reducers: {
    initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.actions = action.payload
      })
      .addCase(getAll.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      
  },
})

export default actionSlice.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import requestService from './requestService'
import { extractErrorMessage } from '../../utils'

const initialState = {
  requests: [],
  request: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}


// Get all volunteer requests by admin
export const getRequests = createAsyncThunk(
  'requests/getAll',
  async (ngoId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().admins.admin.token
        return await requestService.getRequests(ngoId,token)
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

//Get volunteer request by Id by Admin
export const getRequest = createAsyncThunk(
    'requests/get',
    async (requestId, thunkAPI) => {
      try {
        const token = thunkAPI.getState().admins.admin.token
        return await requestService.getRequest(requestId,token)
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

// Accept status
export const acceptStatus = createAsyncThunk(
  'requests/accept',
  async (requestId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admins.admin.token
      return await requestService.acceptStatus(requestId,token);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
)

// Reject status
export const rejectStatus = createAsyncThunk(
  'requests/rejectStatus',
  async (requestId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admins.admin.token
      return await requestService.rejectStatus(requestId,token);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
)

export const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRequests.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getRequests.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.requests = action.payload
      })
      .addCase(getRequests.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getRequest.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getRequest.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.request = action.payload
      })
      .addCase(getRequest.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(acceptStatus.fulfilled, (state, action) => {
        const requestIndex = state.requests.findIndex(
          (request) => request._id === action.payload._id
        );

        if (requestIndex !== -1) {
          // Update the status of the request in the array
          state.requests[requestIndex].status = 'Approved';
        }

        // Set the current request to the updated one
        state.request = action.payload;
      })
      .addCase(rejectStatus.fulfilled, (state, action) => {
        const requestIndex = state.requests.findIndex(
          (request) => request._id === action.payload._id
        );

        if (requestIndex !== -1) {
          // Update the status of the request in the array
          state.requests[requestIndex].status = 'Rejected';
        }

        // Set the current request to the updated one
        state.request = action.payload;
      })
  },
})

export default requestSlice.reducer
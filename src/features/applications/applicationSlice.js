import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import applicationService from './ticketService'
import { extractErrorMessage } from '../../utils'

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
  async (ticketData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await ticketService.createTicket(ticketData, token)
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
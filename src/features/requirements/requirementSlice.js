import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import requirementService from './requirementService'

const initialState = {
    requirements: [],
    requirement: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }

// Get requirement for a particular NGO
export const getRequirement = createAsyncThunk(
    'requirements/get',
    async (adminId, thunkAPI) => {
      try {
        return await requirementService.getRequirement(adminId)
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

// Get all Requirements
export const getRequirements = createAsyncThunk(
    'requirements/getAll',
    async (_, thunkAPI) => {
      try {
        return await requirementService.getRequirements()
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

// Add requirements
export const addRequirements = createAsyncThunk(
  'requirements/create',
  async (requirementData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admins.admin.token
      return await requirementService.addRequirements(requirementData, token)
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

// Delete requirements
export const deleteRequirement = createAsyncThunk(
  'requirements/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admins.admin.token
      return await requirementService.deleteRequirement(id, token)
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

export const requirementSlice = createSlice({
name: 'requirement',
initialState,
reducers: {
reset: (state) => initialState,
},
extraReducers: (builder) => {
builder
    .addCase(getRequirement.pending, (state) => {
    state.isLoading = true
    })
    .addCase(getRequirement.fulfilled, (state, action) => {
    state.isLoading = false
    state.isSuccess = true
    state.requirement = action.payload
    })
    .addCase(getRequirement.rejected, (state, action) => {
    state.isLoading = false
    state.isError = true
    state.message = action.payload
    })
    .addCase(getRequirements.pending, (state) => {
        state.isLoading = true
      })
    .addCase(getRequirements.fulfilled, (state, action) => {
    state.isLoading = false
    state.isSuccess = true
    state.requirements = action.payload
    })
    .addCase(getRequirements.rejected, (state, action) => {
    state.isLoading = false
    state.isError = true
    state.message = action.payload
    })
    .addCase(addRequirements.pending, (state) => {
      state.isLoading = true
    })
    .addCase(addRequirements.fulfilled, (state) => {
      state.isLoading = false
      state.isSuccess = true
    })
    .addCase(addRequirements.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
    .addCase(deleteRequirement.pending, (state) => {
      state.isLoading = true
    })
    .addCase(deleteRequirement.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.requirements = state.requirements.filter(
        (requirement) => requirement._id !== action.payload.id
      )
    })
    .addCase(deleteRequirement.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
},
})

export const { reset } = requirementSlice.actions
export default requirementSlice.reducer
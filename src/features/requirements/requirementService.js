import axios from 'axios'

const API_URL = 'https://saajha-backend-2.onrender.com/api/requirement/'

// Get requirement for a particular NGO
const getRequirement = async (adminId) => {
  
  const response = await axios.get(API_URL + adminId)

  return response.data
}
// Get requirements 
const getRequirements = async () => {

  const response = await axios.get(API_URL)

  return response.data
}

// Add requirements
const addRequirements = async (requirementData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, requirementData, config)

  return response.data
}

// Delete Requirements
const deleteRequirement = async (requirementId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + requirementId, config)

  return response.data
}

const requirementService = {
  getRequirement,
  getRequirements,
  addRequirements,
  deleteRequirement,
}

export default requirementService
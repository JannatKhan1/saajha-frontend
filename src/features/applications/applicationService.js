import axios from 'axios'

const API_URL = 'https://saajha-backend-1.onrender.com/api/application/'

// Create new application
const createApplication = async (applicationData, ngoId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL + ngoId, applicationData, config)

  return response.data
}

//Version 2
// Get volunteer application
const getApplication = async (ngoId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + ngoId, config)

  return response.data
}

const applicationService = {
    createApplication,
    getApplication,
  }
  
  export default applicationService
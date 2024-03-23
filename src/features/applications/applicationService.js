import axios from 'axios'

const API_URL = 'https://saajha-backend-2.onrender.com/api/application/'

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


// Get volunteer applications
const getApplications = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

const applicationService = {
    createApplication,
    getApplications,
  }
  
  export default applicationService
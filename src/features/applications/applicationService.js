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

const applicationService = {
    createApplication,
  }
  
  export default applicationService
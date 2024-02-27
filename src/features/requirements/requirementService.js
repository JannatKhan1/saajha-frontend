import axios from 'axios'

const API_URL = 'https://saajha-backend-1.onrender.com/api/requirement/'

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



const requirementService = {
  getRequirement,
  getRequirements
}

export default requirementService
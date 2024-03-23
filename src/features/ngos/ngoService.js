import axios from 'axios'

const API_URL = 'https://saajha-backend-2.onrender.com/api/ngos/'

// Get NGOs by regular user and volunteers
const getNGOs = async () => {

  const response = await axios.get(API_URL)

  return response.data
}

// Get NGO by ID
const getNGO = async (ngoId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + ngoId, config)

  return response.data
}

const ngoService = {
  getNGOs,
  getNGO,
}

export default ngoService
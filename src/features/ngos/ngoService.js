import axios from 'axios'

const API_URL = 'https://saajha-backend-1.onrender.com/api/ngos/'

// Get NGOs by regular user and volunteers
const getNGOs = async () => {

  const response = await axios.get(API_URL)

  return response.data
}

const ngoService = {
  getNGOs,
}

export default ngoService

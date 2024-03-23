import axios from 'axios'

//Version 3.1
const API_URL = 'https://saajha-backend-2.onrender.com/api/ngos/'

//Version 3.1
// Add NGO
const addNGO = async (ngoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, ngoData, config)

  return response.data
}

// Get NGOs by regular user and volunteers
const getNGOs = async () => {

  const response = await axios.get(API_URL)

  return response.data
}

//Version 3
// Get NGO by ID for admin
const getNGO = async (ngoId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + ngoId, config)

  return response.data
}

//Version 3.1
// Delete NGO
const deleteNGO = async (ngoId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + ngoId, config)

  return response.data
}

//Version 3.1
// Update NGO
const updateNGO = async (ngoId, ngoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL +'updateNGO/'+ ngoId, ngoData, config)

  return response.data
}


const ngoService = {
  getNGOs,
  //Version 3
  getNGO,
  //Version 3.1
  addNGO,
  deleteNGO,
  updateNGO,
}

export default ngoService
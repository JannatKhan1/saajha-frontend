//Version 3
import axios from 'axios'

const API_URL = 'https://saajha-backend-1.onrender.com/api/requests/'

// Get all volunteer requests by admin
const getRequests = async (ngoId, token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(API_URL + ngoId, config)

    return response.data
}

//Get volunteer request by Id by Admin
const getRequest = async (requestId) => {
  
    const response = await axios.get(API_URL + requestId)
  
    return response.data
  }
  


// Accept status
const acceptStatus = async (requestId) => {
    
  const response = await axios.put(API_URL + requestId)

  return response.data
}

// Reject status
const rejectStatus = async (requestId) => {
    
  const response = await axios.put(API_URL + 'reject/'+ requestId)

  return response.data
}

const requestService = {
  getRequests,
  acceptStatus,
  rejectStatus,
  getRequest,
}

export default requestService
// VERSION 4

import axios from 'axios'

const API_URL = 'https://saajha-backend-2.onrender.com/api/remark/'


  // Add Remarks
const addRemarks = async (remarkData, caseId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL + caseId,remarkData, config)

  return response.data
}

// Get all cases remark
const getRemarks = async (caseId,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + caseId, config)

  return response.data
}

  const remarkService = {
    addRemarks,
    getRemarks,
  }
  
  export default remarkService
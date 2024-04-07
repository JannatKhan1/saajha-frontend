// VERSION 4

import axios from 'axios'

const API_URL = 'https://saajha-backend-2.onrender.com/api/case/'

// Get cases by Counsellor
const getAll = async (counsellorId, token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(API_URL + 'getAll/'+ counsellorId, config)
  
    return response.data
  }


  const actionService = {
    getAll,
  }
  
  export default actionService
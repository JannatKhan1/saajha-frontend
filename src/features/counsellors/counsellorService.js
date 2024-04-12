import axios from 'axios'

const API_URL = 'https://saajha-backend-2.onrender.com/api/counsellor/'

// Register counsellor
const registerCounsellor = async (counsellorData,token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await axios.post(API_URL, counsellorData,config)
  
    if (response.data) {
      localStorage.setItem('counsellor', JSON.stringify(response.data))
    }
    return response.data
  }

// Login counsellor
const loginCounsellor = async (counsellorData) => {
  const response = await axios.post(API_URL + 'login', counsellorData)

  if (response.data) {
    localStorage.setItem('counsellor', JSON.stringify(response.data))
  }
  return response.data
}

// Logout counsellor
const logoutCounsellor = () => localStorage.removeItem('counsellor')

//VERSION 4

//View Counsellor Details

const getCounsellor = async (counsellorId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + counsellorId, config)
  return response.data
}

const counsellorService = {
  registerCounsellor,
  logoutCounsellor,
  loginCounsellor,
  getCounsellor,
}

export default counsellorService

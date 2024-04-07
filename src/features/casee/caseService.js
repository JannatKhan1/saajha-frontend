import axios from 'axios'

const API_URL = 'https://saajha-backend-2.onrender.com/api/case/'

// Register case
const registerCase = async (caseData,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL, caseData, config)

  if (response.data) {
    localStorage.setItem('casee', JSON.stringify(response.data))
  }
  return response.data
}

// Login case
const loginCase = async (caseData) => {
  const response = await axios.post(API_URL + 'login', caseData)

  if (response.data) {
    localStorage.setItem('casee', JSON.stringify(response.data))
  }
  return response.data
}

// Logout case
const logoutCase = () => localStorage.removeItem('casee')



const caseService = {
  registerCase,
  loginCase,
  logoutCase,
}

export default caseService
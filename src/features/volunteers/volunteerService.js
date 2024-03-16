import axios from 'axios'

const API_URL = 'https://saajha-backend-2.onrender.com/api/volunteer/'

// Register volunteer
const registerVolunteer = async (volunteerData) => {
  const response = await axios.post(API_URL, volunteerData)

  if (response.data) {
    localStorage.setItem('volunteer', JSON.stringify(response.data))
  }
  return response.data
}

// Login volunteer
const loginVolunteer = async (volunteerData) => {
  const response = await axios.post(API_URL + 'login', volunteerData)

  if (response.data) {
    localStorage.setItem('volunteer', JSON.stringify(response.data))
  }
  return response.data
}

// Logout volunteer
const logoutVolunteer = () => localStorage.removeItem('volunteer')

const volunteerService = {
  registerVolunteer,
  logoutVolunteer,
  loginVolunteer,
}

export default volunteerService

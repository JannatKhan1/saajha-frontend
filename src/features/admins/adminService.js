import axios from 'axios'

const API_URL = 'https://saajha-backend-2.onrender.com/api/admin/'

// Register admin
const registerAdmin = async (adminData) => {
  const response = await axios.post(API_URL, adminData)

  if (response.data) {
    localStorage.setItem('admin', JSON.stringify(response.data))
  }
  return response.data
}

// Login admin
const loginAdmin = async (adminData) => {
  const response = await axios.post(API_URL + 'login', adminData)

  if (response.data) {
    localStorage.setItem('admin', JSON.stringify(response.data))
  }
  return response.data
}

// Logout admin
const logoutAdmin = () => localStorage.removeItem('admin')

const adminService = {
  registerAdmin,
  logoutAdmin,
  loginAdmin,
}

export default adminService

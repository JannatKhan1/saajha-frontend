import { FaSignOutAlt} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutVolunteer } from '../../features/volunteers/volunteerSlice'
import '../../index.css'
import '../../indexs.css'


function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logoutVolunteer())
    navigate('/')
  }
 
  return (
    <nav>
        <Link to='/' className='nav-title'>
            Saajha
        </Link>
            <button className='logout' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
    </nav>
  )
}
export default Header
import {Navigate, Outlet} from "react-router-dom"
import {useAuthStatus, useAdminStatus} from '../hooks/useAuthStatus'
import Spinner from './Spinner'


export const VolunteerRoute = () => {
    const {loggedIn,checkingStatus} = useAuthStatus()

    if(checkingStatus) {
        return <Spinner/>
    }

    return loggedIn ? <Outlet />:<Navigate to='/VolunteerLogin' />
}

export const AdminRoute = () => {
    const {loggedIn,checkingStatus} = useAdminStatus()

    if(checkingStatus) {
        return <Spinner/>
    }

    return loggedIn ? <Outlet />:<Navigate to='/AdminLogin' />
}


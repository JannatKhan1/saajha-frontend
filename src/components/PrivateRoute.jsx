import {Navigate, Outlet} from "react-router-dom"
import {useAuthStatus, useAdminStatus,useCounsellorStatus, useCaseStatus} from '../hooks/useAuthStatus'
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

export const CounsellorRoute = () => {
    const {loggedIn,checkingStatus} = useCounsellorStatus()

    if(checkingStatus) {
        return <Spinner/>
    }

    return loggedIn ? <Outlet />:<Navigate to='/CounsellorLogin' />
}

export const CaseRoute = () => {
    const {loggedIn,checkingStatus} = useCaseStatus()

    if(checkingStatus) {
        return <Spinner/>
    }

    return loggedIn ? <Outlet />:<Navigate to='/CaseLogin' />
}
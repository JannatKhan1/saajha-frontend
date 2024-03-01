import { useState,useEffect } from "react";
import {useSelector} from 'react-redux'

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    const {volunteer} = useSelector((state)=> state.volunteers)
    useEffect(()=>{
        if(volunteer){
            setLoggedIn(true)
        }else {
            setLoggedIn(false)
        }
        setCheckingStatus(false)
    },[volunteer]) 
    return{loggedIn, checkingStatus}
}

export const useAdminStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    const {admin} = useSelector((state)=> state.admins)
    useEffect(()=>{
        if(admin){
            setLoggedIn(true)
        }else {
            setLoggedIn(false)
        }
        setCheckingStatus(false)
    },[admin]) 
    return{loggedIn, checkingStatus}
}


import { useState,useEffect } from "react";
import {useSelector} from 'react-redux'

//Volunteer
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

//Admin
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

//Counsellor

export const useCounsellorStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    const {counsellor} = useSelector((state)=> state.counsellors)
    useEffect(()=>{
        if(counsellor){
            setLoggedIn(true)
        }else {
            setLoggedIn(false)
        }
        setCheckingStatus(false)
    },[counsellor]) 
    return{loggedIn, checkingStatus}
}

//Case
export const useCaseStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    const {casee } = useSelector((state)=> state.casee)
    useEffect(()=>{
        if(casee){
            setLoggedIn(true)
        }else {
            setLoggedIn(false)
        }
        setCheckingStatus(false)
    },[casee]) 
    return{loggedIn, checkingStatus}
}
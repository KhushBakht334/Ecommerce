import React, {useEffect} from 'react'
import { useAuth } from '../store/context';
import { Navigate } from 'react-router-dom';

const Logout = () => {
    const {logoutUser}=useAuth();

    useEffect(() => {
        logoutUser();
    }, [])
    
  return ( 
    <Navigate to="/loginsignup"/>
  )
}

export default Logout
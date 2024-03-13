import React, {useEffect} from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/ShopContext';

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
import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';
import ProfilePicPlaceholder from '../assets/BooksPoster/ProfilePic.png'; // Placeholder image

const LogOut = () => {
    const { user } = useContext(AuthContext);
    const {logOut} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    const handleLogOut = () => {
        logOut().then(() => {
            alert("Log Out Successfull...!");
            navigate(from, {replace: true})
        }).catch((error) => {
            alert("Log Out Unsuccessful...!");
        })
    }
  return (
   <div>
     <div className='h-screen flex bg-teal-100 items-center justify-center gap-2'>
    <img
      src={user?.photoURL || ProfilePicPlaceholder}
      alt="Profile"
      className="w-16 h-16 rounded-full border-2 border-gray-300"
    />
    <div className="ml-4">
      <h2 className="text-xl font-bold text-gray-800">{user?.displayName || "Demo User"}</h2>
      <p className="text-gray-600">{user?.email || "demo@example.com"}</p>
      
    </div>
    <button className='bg-red-600 px-8 py-2 text-white rounded hover:bg-red-700' onClick={handleLogOut}>Log Out</button></div>
  </div>

    
    
  
    
  )
}

export default LogOut

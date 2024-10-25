import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider';
import ProfilePicPlaceholder from '../assets/BooksPoster/ProfilePic.png'; // Placeholder image


const User = () => { 
    const { user } = useContext(AuthContext);

  return (
    <div className="w-full flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
    <img
      src={user?.photoURL || ProfilePicPlaceholder}
      alt="Profile"
      className="w-36 h-36 rounded-full border-2 border-gray-300"
    />
    <div className="ml-4">
      <h2 className="text-xl font-bold text-gray-800">{user?.displayName || "Demo User"}</h2>
      <p className="text-gray-600">{user?.email || "demo@example.com"}</p>
    </div>
  </div>
  )
}

export default User

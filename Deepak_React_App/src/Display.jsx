import React, { useEffect, useState } from 'react'
import axios from "axios";

const Display = () => {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("https://zrxh5x9qy5.execute-api.ap-south-1.amazonaws.com/allUsers")
      .then(response => {
        setUserData(response.data);
        
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
  <div className="min-h-screen  p-6 text-white">
    <h1 className="text-3xl font-bold mb-6 text-center">All Users</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {userData.map((user) => (
        <div
          key={user.id}
          className="bg-[#1E293B] shadow-lg rounded-2xl p-6 hover:shadow-cyan-500 transition duration-300 border-slate-700"
        >
           <div className='flex gap-5 items-center'>
            <div className='bg-blue-200 h-14 w-14 rounded-full font-bold border-2 border-cyan-500 text-4xl  text-blue-500 flex items-center justify-center '>{user.name?.charAt(0)}</div>
          <div><h2 className="text-xl font-bold text-white">
            {user.name}
          </h2>
          </div>
           </div>

          <p className="text-gray-600 mt-2">
            {user.email}
          </p>

          <p className="text-gray-500 text-sm mt-1">
            {user.dob}
          </p>
        </div>
      ))}
    </div>
  </div>
);

}

export default Display;

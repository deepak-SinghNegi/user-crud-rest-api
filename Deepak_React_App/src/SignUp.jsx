import { useEffect, useState } from "react";
import axios from "axios";

function Signup() {
    
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: ""
  });
  
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    axios.post("https://zrxh5x9qy5.execute-api.ap-south-1.amazonaws.com/newUser" ,
        {
            name : formData.name ,
            email : formData.email,
            password : formData.password,
            dob : formData.dob
        }  
        
       )
    .then(response=>{
        alert("User Registration is successfull")
        setFormData(
            {
                name : "",
                email : "",
                dob : "",
                password : "",
                confirmPassword : ""
            }
        )
    }).catch(error=>{
        alert(error);
    });
    


    console.log("User Data:", formData);
  }

  return (
    <div className="h-full flex items-center justify-center text-white pt-6">
      <div className="bg-[#1E293B] shadow-lg rounded-2xl p-8 w-full max-w-md hover:shadow-cyan-500 transition duration-300" >
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 ">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            
            Sign Up
          </button>
        </form>

       
      </div>
    </div>
  );
}

export default Signup;

import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

const Login = () => {

  const [agreement, setAgreement] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (event) => {
    setAgreement(event.target.checked);
  }

  async function handleLogin(e){
    e.preventDefault();
    const userInfo = await axios.post("/login",{
      email,
      password,
    })
    alert("succesfully logged in")
    
  }


  return (
    <div>
      
      <form className="flex flex-col justify-center items-center" onSubmit={handleLogin}>
            <h1 className="text-4xl py-6 font-mono antialiased">Login</h1>
            
            <div className="flex gap-4 justify-center">
              <input type="checkbox" name="" id="" onChange={handleChange} className="rounded-full" />
              <label htmlFor="">I agree to the terms and conditions</label>
            </div>

            <button disabled={!agreement}   className="mt-6 border py-3 px-3 rounded-2xl my-3 disabled:bg-gray-300">
              Login
            </button>
          </form>

    </div>
  )
}

export default Login

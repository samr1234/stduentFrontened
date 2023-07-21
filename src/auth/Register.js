import React from "react";
import { useState ,useEffect } from "react";
import axios from "axios";
import Login from "./Login";
import { Link } from "react-router-dom";

const Register = () => {

                  const [agreement, setAgreement] = useState(false);
                  const [login, setLogin] = useState(false);
                  
                  const [name, setName] = useState("");
                  const [email, setEmail] = useState("");
                  const [password, setPassword] = useState("");

                  async function registerUser(e) {
                    e.preventDefault();
                      await axios.post("/register", {
                        name,email,password,
                      });
                      alert("succesfully registered user");
                  }

                  const handleChange = (event) => {
                    setAgreement(event.target.checked);
                  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <div className="sm:flex justify-center gap-x-7 items-center  border mx-16 rounded-2xl px-4 ">
        <div className="order-last">
          <img
            src="https://hopingminds.com/wp-content/uploads/2023/01/Asset-5.png"
            alt=""
            className="mt-0"
          />
        </div>
        <div className="md:block hidden w-[1px] h-[40rem]  bg-gray-200 order-2"></div>
        {login === false && (
          
          <form className="flex flex-col justify-center items-center" onSubmit={registerUser}>
            <h1 className="text-4xl py-10 font-mono antialiased">Sign Up</h1>

            <input type="text"   onChange={(e) => setName(e.target.value)} placeholder="name" />
            <input type="email"  onChange={(e) => setEmail(e.target.value)} placeholder="email" />
            <input type="password"  onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            <div className="flex gap-4 justify-center">
              <input type="checkbox" id=""  name="agreement" className="rounded-full"  onChange={handleChange}/>
              <label htmlFor="">I agree to the terms and conditions</label>
            </div>

            <button disabled={!agreement} className="mt-6 border py-3 px-3 rounded-2xl my-3">
              Register
            </button>
            <div className="flex gap-4 my-4 ">
            <a href=""><img src="../src/assets/images/googleicon.png" className="w-12 cursor-pointer"alt=""/></a>
            <a href=""><img src="../src/assets/images/githubicon.png" className="w-12 cursor-pointer"alt=""/></a>
            <a href=""><img src="../src/assets/images/facebookicon.png" className="w-12 cursor-pointer" alt=""/></a>
            </div>
            <Link to="/auth/login">
            <p onClick={() => setLogin(true)} className="cursor-pointer text-center">
              Already have an account? <a className=" text-blue-300">Login</a>
            </p>
            </Link>
            
          </form>
         
        )}

        {/* login form  */}

        {login === true && 
        <div>
         <Login login={login}/> 
        <Link to="/auth/register"className="text-center mr-0">
         <p onClick={() => setLogin(!true)} className="cursor-pointer">
              Dont have an account? <a className=" text-blue-300">Register</a>
            </p>
        </Link>
            </div>
         
        }

      </div>

    </div>
  );
};



export default Register;

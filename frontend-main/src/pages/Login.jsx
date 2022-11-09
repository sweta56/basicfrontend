import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.jpg'

import { LockClosedIcon } from '@heroicons/react/solid'

import InputGroup from "../components/Reuseable/InputGroup";



const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="relative"  >
      <div className='min-h-screen bg-pink-100 flex flex-col justify-center'>
        <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 pr-6 border border-gray-300'>
          <form action="" className="space-y-6" onSubmit = {navigate("/home")}>
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src={logo}
                alt={logo}
              />
              <h2 className="mt-6 text-center text-3xl font-bold text-black">Sign in to your account</h2>
            </div>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md ">
            <InputGroup placeholder = "Email"  type="email" />

            <InputGroup placeholder = "Password"  type="password" />
            </div>

            <div className="flex items-center justify-center">
              <div className="flex ">
            

                <div className="text-sm">
                  <a href="/forgot-password" className="font-medium pl-7 text-pink-400 hover:text-pink-400">
                    Forgot your password?
                  </a>
                </div>
              </div>




            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="group relative w-[200px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-pink-400 group-hover:text-pink-400" aria-hidden="true" />
                </span>
                Sign In
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>








  )


}

export default Login;
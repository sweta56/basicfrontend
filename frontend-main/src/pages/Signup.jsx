
import { useNavigate } from "react-router-dom";


import avatar from '../assets/avatar.jpg'

import InputGroup from "../components/Reuseable/InputGroup"


const Signup = () => {

	const navigate = useNavigate()

  return (
    <div className="relative">
      <div className='min-h-screen bg-pink-100 flex flex-col justify-center'>
        <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 pr-6 border border-gray-300'>
        <h1 className='text-4xl md:text-4xl lg:text-6xl font-bold mb-4 text-center'>Sign Up</h1>
          <h2 className='mb-3 text-gray-500 text-sm md:text-lg lg:text-lg pl-[50px]'>Already have an account? <a className='text-pink-400' href='/login'>LogIn</a></h2>

          <form action="" className="space-y-6" onSubmit = {navigate("/home") }>
            <div>
            <div className='flex justify-center'>
              <img className='w-md h-[125px] mb-5 rounded-full' src={avatar}
                alt={avatar} />
            </div>

            {/* <input type="hidden" name="remember" defaultValue="true" /> */}
            <div className="rounded-md ">
				<InputGroup placeholder = "Username" />

        <InputGroup placeholder = "Email"/>

       

          <InputGroup placeholder = "Password"  type="password" />

			
   
              <div class=" items-center justify-between relative flex flex-col pt-5">
              <button class="bg-pink-400 hover:bg-pink-300 hover:text-pink-400 text-white font-bold w-half  py-2 mr-5 mb-4 rounded-full focus:outline-none focus:shadow-outline border-pink-400 text-xl lg:px-20" type="submit" onClick = { navigate("/home") }
			  >
                Sign Up
                </button>
                </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>

  )
}
export default Signup;
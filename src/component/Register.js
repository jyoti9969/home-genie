import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import '../App.css';
import '../index.css'
// import { FontAwesomeIcon } from '../@fortawesome/react-fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {  faHome } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const Register=()=>{
    return(
<>


	<div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
	<div className='float-right pr-8 pt-4  '>	<span classNameName="text-green"> <FontAwesomeIcon icon={faHome} size="lg" /> | </span>
	<span >Home Genie</span>
	</div>
            <div className="py-8 px-8 rounded-xl">
                <h1 className="font-medium text-2xl mt-5 text-center">Register</h1>
                <form action="" className="mt-6">
                    <div className="my-5 text-sm">
                        <label for="username" className="block text-black">Username</label>
                        <input type="text" autofocus id="username" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username" />
                    </div>
                    <div className="my-5 text-sm">
                        <label for="username" className="block text-black">Email</label>
                        <input type="text" autofocus id="email" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Email" />
                    </div>
                    <div className="my-5 text-sm">
                        <label for="password" className="block text-black">Password</label>
                        <input type="password" id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
                       
                    </div>

                    <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Register</button>
                </form>

                

                <p className="mt-12 text-xs text-center font-light text-gray-400"> Already have an account? <Link to="/login" className="text-black font-medium"> login now </Link>  </p> 

            </div>
        </div>
</>
    )
}
export default Register
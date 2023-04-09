import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import '../App.css';
import '../index.css'
// import { FontAwesomeIcon } from '../@fortawesome/react-fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import {  faHome } from '@fortawesome/free-solid-svg-icons'


const Login=()=>{
    return(
<>

{/* <div classNameNameName="container h-100">
		<div classNameName="d-flex justify-content-center h-100">
			<div classNameName="user_card">
				<div classNameName="d-flex justify-content-center">
					<div classNameName="brand_logo_container ">
						<img src="/images/companyLogo.png" classNameName="brand_logo" alt="Logo"/>
					</div>
				</div>
                <div classNameName='inner-margin'>

                </div>
				<div classNameNameName="d-flex justify-content-center form_container   ">
					<form>
					
						<div classNameName="input-group mb-2 ">
							<div classNameName="input-group-append ">
								<span classNameName="input-group-text"> <FontAwesomeIcon icon={faUser} size="2x" /> </span>
							</div>
							<input type="password" name="" classNameName="form-control input_pass" value="" placeholder="username"/>
						</div>
                        <div classNameName="input-group mb-2 ">
							<div classNameName="input-group-append ">
								<span classNameName="input-group-text">  <FontAwesomeIcon icon={faKey} size="2x"/> </span>
							</div>
							<input type="password" name="" classNameName="form-control input_pass" value="" placeholder="password"/>
						</div>
						<div classNameName="form-group">
							<div classNameName="custom-control custom-checkbox">
								<input type="checkbox" classNameName="custom-control-input" id="customControlInline" />
								<label classNameName="custom-control-label" for="customControlInline">Remember me</label>
							</div>
						</div>
							<div classNameName="d-flex justify-content-center mt-3 login_container">
				 	<button type="button" name="button" classNameName="btn login_btn">Login</button>
				   </div>
					</form>
				</div>
		
				<div classNameName="mt-4">
					<div classNameName="d-flex justify-content-center links">
						Don't have an account? <a href="#" classNameName="ml-2">Sign Up</a>
					</div>
					<div classNameName="d-flex justify-content-center links">
						<a href="#">Forgot your password?</a>
					</div>
				</div>
			</div>
		</div>
	</div>
    */}
	<div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
	<div className='float-right pr-8 pt-4  '>	<span classNameName="text-green"> <FontAwesomeIcon icon={faHome} size="lg" /> | </span>
	<span >Home Genie</span>
	</div>
            <div className="py-8 px-8 rounded-xl">
                <h1 className="font-medium text-2xl mt-5 text-center">Login</h1>
                <form action="" className="mt-6">
                    <div className="my-5 text-sm">
                        <label for="username" className="block text-black">Username</label>
                        <input type="text" autofocus id="username" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username" />
                    </div>
                    <div className="my-5 text-sm">
                        <label for="password" className="block text-black">Password</label>
                        <input type="password" id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
                        <div className="flex justify-end mt-2 text-xs text-gray-600">
                           <a href="/">Forget Password?</a>
                        </div>
                    </div>

                    <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Login</button>
                </form>

                 <div className="flex md:justify-between justify-center items-center mt-10">
                    <div  className="bg-gray-300 md:block hidden w-4/12   h-1"></div>
                    <p className="md:mx-2 text-sm font-light text-gray-400"> Login With Social </p> 
                    <div  className="bg-gray-300 md:block hidden w-4/12 h-1"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-2 mt-7">
                    <div>
                        <button className="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">Facebook</button>
                    </div>
                    <div>
                        <button className="text-center w-full text-white bg-blue-400 p-3 duration-300 rounded-sm hover:bg-blue-500">Twitter</button>
                    </div>
                </div>

                <p className="mt-12 text-xs text-center font-light text-gray-400"> Don't have an account? <Link to="/register" className="text-black font-medium"> Create One </Link>  </p> 

            </div>
        </div>
</>
    )
}
export default Login
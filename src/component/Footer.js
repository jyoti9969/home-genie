import React from 'react'
import "../css/Footer.css"
import'bootstrap/dist/css/bootstrap.css';
import'bootstrap/dist/js/bootstrap.js';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
   <>
    <div className="container backcolor w-100 " >
    <section style={{height:"40px"}}></section>
	
  
    <footer className="footer-bs">
        <div className="row">
        	<div className="col-md-4 footer-brand animated fadeInLeft">
            	<h2>About HomeGenie</h2>
                <p>
                Magicbricks is a full stack service provider for all real estate needs, with 15+ services including home loans, pay rent, packers and movers, legal assistance, property valuation, and expert advice. As the largest platform for buyers and sellers of property to connect in a transparent manner, Magicbricks has an active base of over 15 lakh property listings.
                </p>
                <p>© 2014 BS3 UI Kit, All rights reserved</p>

                <div className=" footer-social animated fadeInDown">
            	<h4>Follow Us</h4>
            	<ul  className="follow">
                	<li><Link to="/"><img className='img' src="https://cdn-icons-png.flaticon.com/128/3670/3670032.png" alt="/"/></Link></li>
                	<li><Link to="/"><img className='img' src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="/"/></Link></li>
                	<li><Link to="/"><img  className='img' src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="/"/></Link></li>
                	<li><Link to="/"><img className='img' src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="/"/></Link></li>
                    <li><Link to="/"><img className='img' src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png" alt="/"/></Link></li>
                </ul>
            </div>
            </div>
           
        	<div className="col-md-3 footer-nav animated fadeInUp">
            	<h3>Menu —</h3>
            	
            	<div className="col-md-5">
                    <ul className="list">
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Contacts</Link></li>
                        <li><Link to="/">Feedback</Link></li>
                        <li><Link to="/">Unsubscribe</Link></li>
                        <li><Link to="/">Help Center</Link></li>

                        <li><Link to="/">Terms & Condition</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
        	
        	<div className="col-md-5 footer-ns animated fadeInRight">
            	<h3>Properties in India</h3>
                <p>Property in New Delhi | Property in Mumbai | Property in Chennai | Property in Pune | Property in Noida | Property in Gurgaon | Property in Bangalore | Property in Ahmedabad</p>
           <h3>New Projects in India</h3>
           <p>New Projects in New Delhi New Projects in Mumbai New Projects in Chennai New Projects in Pune New Projects in Noida New Projects in Gurgaon New Projects in Bangalore New Projects in Ahmedabad</p>
            </div>
            
        </div>
    </footer>
    <section ><h7 className="last">Disclaimer: Magicbricks Realty Services Limited is only an intermediary offering its platform to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not and cannot be a party to or privy to or control in any manner any transactions between the Seller and the Customer/Buyer/User. All the offers and discounts on this Website have been extended by Read more</h7></section>

</div>
   </>
  )
}

export default Footer

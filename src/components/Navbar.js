import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

        return (
            <nav>
                <div>
                    <img src='' alt='Logo'/>
                </div>
                <div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='who-we-are'>Who we are</Link></li>
                        <li><Link to='what-we-do'>What we do</Link></li>
                        <li><Link to='get-involved'>Get involved</Link></li>
                        <li><Link to='sport-events'>Sport Events</Link></li>
                        <li><Link to='contact-us'>Contact us</Link></li>
                        <li><Link to='faq'>FAQs</Link></li>
                        <li><Link to='agl-gala'>ALG Gala</Link></li>
                        <li><Link to='data-protection-policy'>Data Protection Policy</Link></li>
                        <li><button>Search</button></li>
                    </ul>
                </div>
            </nav>
        )
    
}

export default Navbar 

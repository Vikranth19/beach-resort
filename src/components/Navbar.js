import React, {useState} from 'react'
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    
    const handleToggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <nav className='navbar'>
          <div className="nav-center">
            <div className="nav-header">
              <Link to='/'>
                <img src={logo} alt="Beach Resort"/>
              </Link>
              <button type='button' className='nav-btn' onClick={handleToggle}>
                 <FaAlignRight className='nav-icon'/>
              </button>
            </div>
            <ul className={isOpen?'nav-links show-nav':'nav-links'}>
                <Link to="/">Home</Link>
                <Link to="/rooms">Rooms</Link>
            </ul>
           </div>
        </nav>
    )
}

export default Navbar
//it's better to render the ul links from some other component if there are more Links
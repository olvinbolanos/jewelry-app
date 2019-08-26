import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';


const Header = () => {
    return (
        <header>
            <ul>
                <li><Link to='/profile'><div className="column"><i className="user icon"></i>Profile</div></Link></li>
                <li><Link to='/clientContainer'><div className="column"><i className="home icon"></i>Home</div></Link></li>
                <li><Link to='/shippingForm'><div className="column"><i className="cart arrow down icon"></i>Cart</div></Link></li>
                <li><Link to='/logout'><div className="column"><i className="key icon"></i>logout</div></Link></li>
                <li><Link to='/jewelry'><div className="column"><i class="box icon"></i>Jewelry</div></Link></li>
            </ul> 
        </header>
    )
}

export default Header;
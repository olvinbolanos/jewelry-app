import React from 'react'
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import '../App.css'


const Header = () => {
    return (
        <header>
            <div className="ui tabular menu">
                <Link to='/profile'><div className="item"><i className="user icon"></i>Profile</div></Link>
                <Link to='/clientContainer'><div className="item"><i className="home icon"></i>Home</div></Link>
                <Link to='/shippingForm'><div className="item"><i className="cart arrow down icon"></i>Cart</div></Link>
                <Link to='/jewelry'><div className="item"><i className="box icon"></i>Jewelry</div></Link>
                <Link to='/logout'><div className="item"><i className="key icon"></i>logout</div></Link>
            </div>
        </header>
    )
}

export default Header;
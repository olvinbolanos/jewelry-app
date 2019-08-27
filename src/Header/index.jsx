import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import '../App.css'


const Header = () => {
    return (
        <header>
            <div class="ui tabular menu">
                    <a><Link to='/profile'><div class="item"><i className="user icon"></i>Profile</div></Link></a>
                    <a><Link to='/clientContainer'><div class="item"><i className="home icon"></i>Home</div></Link></a>
                    <a><Link to='/shippingForm'><div class="item"><i className="cart arrow down icon"></i>Cart</div></Link></a>
                    <a><Link to='/jewelry'><div class="item"><i class="box icon"></i>Jewelry</div></Link></a>
                    <a><Link to='/logout'><div class="item"><i className="key icon"></i>logout</div></Link></a>
            </div>
        </header>
    )
}

export default Header;
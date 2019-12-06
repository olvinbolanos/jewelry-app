import React, { Component } from 'react'
import '../App.css'

class ShippingForm extends Component {
    constructor() {
        super();
        
        this.state = {
            firstName: '',
            lastName: '',
            address1: '',
            address2: '',
            city: '',
            country: 'USA',
            state: '',
            postal: '',
            phone: '',
            orderNumber: '',
            cvc: '',
            cardType : '',
            cardNumber : '',
            expireMonth: '',
            expireYear: '',
            subTotal: 0,
            tax: 0,
            shipping: 0,
            totalAmount: 0,

            orderItems: []
        }
    }

    getSubTotal = () => {
        let subTotal = 0;

        console.log(`===>GETSUBTOTAL:  subtotal = ${this.state.subTotal}`)
        //get order info from localStorate
        let orderList = localStorage.getItem('orderList') || '';
        let orderItems = orderList ? JSON.parse(orderList) : [];
        orderItems.map((elem) => subTotal += (elem.price * elem.quantity))
        this.setState({subTotal:subTotal}, this.calcTotals)
    }
    

    _getInputData = (data) => {
        this.setState(data);
    }

    getContactInfo = (firstName, lastName, address1, address2, city, state, postal, country) => {
        this.setState({ 
            firstName: firstName,
            lastName: lastName,
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            postal: postal,
        })
    }

    getExtras
    
    render() {
        console.log(this.state, this.props.userInfo, 'in ShowPage < props');

        return(
          <div>
            <form className="ui form App-form">
                <h4 className="ui dividing header">Shipping Information</h4>
                <div className="field">
                    <label>Name</label>
                    <div className="two fields">
                    <div className="field">
                        <input type="text" name="firstName" placeholder="First Name" />
                    </div>
                    <div className="field">
                        <input type="text" name="lastName" placeholder="Last Name" />
                    </div>
                    </div>
                </div>
                <div className="field">
                    <label>Billing Address</label>
                    <div className="fields">
                    <div className="twelve wide field">
                        <input type="text" name="address1" placeholder="Street Address" />
                    </div>
                    <div className="four wide field">
                        <input type="text" name="address2" placeholder="Apt #" />
                    </div>
                    </div>
                </div>
                <div className="two fields">
                    <div className="field">
                    <label>State</label>
                   
                </div>
                    <div className="field">
                    <label>Country</label>
                    <div className="ui fluid search selection dropdown">
                        <input type="hidden" name="country" />
                        <i className="dropdown icon"></i>
                        <div className="text">Select Country</div>
                   
                    </div>
            </div>
        </div>
    
                <h4 className="ui dividing header">Billing Information</h4>
                <div className="field">
                    <label>Card Type</label>
                    <div className="ui selection dropdown">
                    <input type="hidden" name="cardType" />
                    <div className="text">Type</div>
                    <i className="dropdown icon"></i>
                    <div className="menu">
                        <div className="item" data-value="visa">
                        <i className="visa icon"></i>
                        Visa
                        </div>
                        <div className="item" data-value="amex">
                        <i className="amex icon"></i>
                        American Express
                        </div>
                        <div className="item" data-value="discover">
                        <i className="discover icon"></i>
                        Discover
                        </div>
                    </div>
                </div>
            </div>
            

                
                <div className="fields">
                    <div className="seven wide field">
                    <label>Card Number</label>
                        <input type="text" name="cardNumber" maxLength="16" placeholder="Card #" />
                    </div>
                    <div className="three wide field">
                    <label>CVC</label>
                        <input type="text" name="cvc" maxLength="3" placeholder="CVC" />
                    </div>
                    <div className="six wide field">
                    <label>Expiration</label>
                    <div className="two fields">
                        <div className="field">
                        <select className="ui fluid search dropdown" name="expireMonth">
                            <option value="">Month</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                        </div>
                        <div className="field">
                        <input type="text" name="expireYear" maxLength="4" placeholder="Year" />
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className="ui button" tabIndex="0">Submit Order</div>
                </form>  
          </div>
        )
    }
}

export default ShippingForm;
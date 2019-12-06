import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
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

    getContactInfo = (
      firstName, 
      lastName, 
      address1, 
      address2, 
      city, 
      state, 
      postal, 
      ) => {
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
                <input type="text" 
                name="firstName" 
                placeholder="First Name" 
                />
              </div>

              <div className="field">
                <input type="text" 
                  name="lastName" 
                  placeholder="Last Name" 
                />
              </div>
            </div>
          </div>

          <div className="field">
            <label>Billing Address</label>
            <div className="fields">
              <div className="twelve wide field">
                <input type="text" 
                  name="address1" 
                  placeholder="Street Address" 
                />
              </div>
              <div className="four wide field">
                <input type="text" 
                  name="address2" 
                  placeholder="Apt #" 
                />
              </div>
            </div>
        </div>

        <div className="two fields">
          <div className="field">
            <label>StateUS</label> 
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
        <div className="ui button" tabIndex="0">Submit Order</div>
    </form>  
  </div>
        )
    }
}

export default ShippingForm;
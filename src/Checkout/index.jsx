import React, { Component } from 'react'
import Payment from './Payment'
import CheckoutContactInfo from '../CheckoutContactInfo'
import CheckoutTotals from '../CheckoutTotals'

class Checkout extends Component {
  state= {
    firstname: '',
    lastname: '',
    address1: '',
    city: '',
    state: '',
    postal: '',
    country: '',
    phone: '',
    emailAddress: '',
    cc_fullname: '',
    orderNumber: '',
    subTotal: 0,
    tax: 0,
    shipping: 0,
    totalAmount: 0,

    orderItems: []
  }

  getSubTotal = () => {
    let subTotal = 0;
    let cb = () => {
      console.log(`===> GetSubTotal: subTotal = ${this.state.subTotal}`)
    }

    //get order info from localStorage
    let orderList = localStorage.getItem('orderList') || '';
    let orderItems = orderList ? JSON.parse(orderList) : [];
    orderItems.map((elem) => {
      subTotal += (elem.price * elem.quantity)
    })

    this.setState({
      subTotal: subTotal}, 
      this.calcTotals)
  }

  _getInputData = (data) => {
    this.setState(data);
  }

  getContactInfo = 
    (
      firstname, 
      lastname, 
      address1, 
      city, 
      state, 
      postal, 
      country,
      phone,
      emailAddress,
      cc_fullname,
    ) => {
      this.setState({
        firstname: firstname,
        lastname,
        address1,
        city,
        state,
        postal, 
        country,
        phone,
        emailAddress,
        cc_fullname,
      })
    }

    getExtras = (
      tax, 
      shipping, 
      totalAmount) => {
        this.setState({
          tax,
          shipping,
          totalAmount},
          () => {
            console.log(`Extra: ${this.state.tax}, 
            ${this.state.shipping}, 
            ${this.state.totalAmount}`)}
         )
    }

    componentDidMount = () => {
      this.getSubTotal();
    }

    render = () => {
      //console.log('subTotal: ', this.state.subTotal)
      const {
        firstname, 
        lastname, 
        address1, 
        city, 
        state, 
        postal, 
        email, 
        phone, 
        cc_fullname,
        subTotal,
        orderNumber
      } = this.state;

      let visibility = (
        firstname && 
        lastname && 
        address1 && 
        city && 
        state && 
        postal && 
        email && 
        phone, 
        cc_fullname);


    return (
      <div style={styles.boxBorder}>
        <div style={styles.pageTitle}>
          <h2>Check Out: </h2>
        </div>

        <CheckoutContactInfo 
        _getInputData={this._getInputData} 
        />
        <CheckoutTotals 
        subTotal= {subTotal} 
        state = {state}
        _getInputData = {this._getInputData} 
        />

        <div style = {
          Object.assign(
            {}, 
            styles.rightInDiv, 
            visibility
            )
        }>
        <div style = {styles.paymentContainer}>
          <Payment
            name= {cc_fullname}
            description= {orderNumber}
            amount= {subTotal}
          />
        </div>
      </div>
    </div>
    )
  }
}

export default Checkout

let styles = {
  boxBorder: {
    margin: '10px 10px 40px',
    color: '#555'
  },
  pageTitle: {
    marginLeft: '10px'
  },
  paymentContainer: {
    backgroundColor: 'white',
    padding: '30px',
    border: '1px solid grey',
    borderRadius: '5px'
  },
  note: {
    fontSize: 14,
    marginLeft: 15,
    fontStyle: 'normal'
  },
  note2me: {
    color: 'red'
  },
  visible: {
    display: 'flex'
  },
  invisible: {
    visibility: 'hidden'
  }
}
import React, {Component} from 'react'
import { Input } from 'semantic-ui-react'
import  CheckoutStateUS from '../CheckoutStateUS' 


class CheckoutContactInfo extends Component {
    state = {
      firstname: '',
      lastname: '',
      address1: '',
      address2: '',
      city: '',
      stateUS: '',
      postal: '',
      country: 'USA',
      phone: '',
      emailaddress: '',
      cc_fullname:''
    }

    onChangeContact = (e) => {
      this.props._getInputData({
          [e.target.name]: e.target.value //send to parent
      })
    }

    getStateUS = (stateUS) => {
      this.props._getInputData({
        'stateUS': stateUS
      })

      this.setState({
        'stateUS': stateUS
      })
    }

    valid_us_postcode = postcode => {
      postcode = postcode.replace(/\s/g, '') // git rid of spaces
      let isValidUSZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(postcode)
      return isValidUSZip
    }

    render(){
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
              required
              />
            </div>

            <div className="field">
              <input type="text" 
                name="lastName" 
                placeholder="Last Name"
                required 
              />
            </div>
          </div>
        </div>

        <div className="field">
          <label>Billing Address</label>
          <div className="fields">
            <div className="twelve wide field">
              <input 
                type="text" 
                name="address1" 
                placeholder="Street Address" 
                required
              />
            </div>
          </div>
      </div>

      <div className="two fields">
        <div className="field">
          <label>StateUS</label> 
          <CheckoutStateUS getStateUS = {this.getStateUS} />
          {this.state.stateUS ? 
          <p></p> 
          : <p style={ styles.reqd_note }>(required)</p>
          }
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

export default CheckoutContactInfo

let styles = {
  boxBorder: {
    margin: '10px 10px 40px',
    color: '#666'
  },
  topMargin: {
    marginTop: '30px'
  },
  layout2col: {
    display: 'grid',
    gridTemplateColumns: 'white',
    backgroundColor: 'white',
    border: '1px solid grey',
    borderRadius: '5px',
  },
  contact: {
    display: 'grid',
    gridTemplateColumns: '10',
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'start',
    justifySelf: 'start',
    margin: '10px',
    gridRowGap: '10px'
  },
  input: {
    fontSize: 16,
    height: 30
  },
  orderInfoBox: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '5%',
    backgroundColor: 'white',
    alignSelf: 'center',
    justifySelf: 'center',
    width: '100%',
    margin: '2% 0 2% 2%'
  },
  required: {
    color: 'red'
  },
  reqd_note: {
    fontSize: 14,
    margin: '8px 15px',
    fontStyle: 'normal',
    color: 'red'
  },
  note: {
    fontSize: 14,
    marginLeft: 15,
    fontStyle: 'normal'
  },
  note2me: {
    color: 'red'
  }
}
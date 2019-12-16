import React, {Component} from 'react'
import { Input, Button, Label } from 'semantic-ui-react'
import  CheckoutStateUS from '../CheckoutStateUS' 


class CheckoutContactInfo extends Component {
    state = {
      firstname: '',
      lastname: '',
      address1: '',
      city: '',
      stateUS: '',
      postal: '',
      country: 'USA',
      phone: '',
      emailaddress: '',
      cc_fullname:''
    }

    onChangeContact = (e) => {
      e.preventDefault()

      const validationFailed = false;

      this.props._getInputData({
        [e.target.name]: e.target.value //send to parent
      })
      this.setState({
        [e.target.name] : e.target.value
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

    valid_us_postcode = (postcode) => {
      postcode = postcode.replace(/\s/g, ""); //get rid of spaces
      let isValidUSZip = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/.test(postcode);
      return isValidUSZip;
    }

    render(){
      return(
        <div>
        <form className="ui form App-form" onChange = {this.onChangeContact}>
        <h4 className="ui dividing header">Shipping Information</h4>
        <div className="field">
          <label>Name</label>
          <div className="two fields">
            <div className="field">
              <input 
              type="text" 
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

          <label>City</label>
          <div className="fields">
            <div className="twelve wide field">
              <input 
                type="text" 
                name="city" 
                placeholder="City" 
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
          <label>Postal Code</label>
          <input 
            type="text" 
            name="postal" 
            required 
            style={styles.input} 
            placeholder = "Post Code"
            min="5"
            max="9"
            />
            {this.valid_us_postcode(this.state.postal) ?
            <></> 
            : <p style = {styles.reqd_note}>(invalid zip)</p>
            }
        </div> 
      </div> 

      <div 
        className="field"
        style = {styles.contact}
        onChange = { this.onChangeContact }
      >
      
      <h3>Contact Info:
        <span style = {styles.note}>(Needed for Delivery.)</span>
      </h3>
        
      <label>Email</label>
      <input 
        type="email"
        name="emailaddress"
        required
        style={styles.input}
        placeholder= "Email"
      />

      <label>Phone</label>
      <div className="fields">
        <input 
        type="number" 
        name="phone"
        style={ styles.input }
        placeholder= 'Phone #'
        required
        minlength="4"
        maxlength="9"
        />
      </div>
    </div>

    <Button className="ui button" tabIndex="0">Submit Order</Button>
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
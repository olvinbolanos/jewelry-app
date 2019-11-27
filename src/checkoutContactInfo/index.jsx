import React, {Component} from 'react'

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
        <div style={styles.layout2col}>
          <div style={styles.contact}>
            <h3>shipping address: <span style={styles.note}>(USA only)</span></h3>
          </div>
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
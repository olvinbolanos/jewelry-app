import React, {Component} from 'react'
import CheckoutTaxTable from '../CheckoutTaxTable'
import CheckoutShippingTable from '../CheckoutShippingTable'

class CheckoutTotal extends Component {
  state = {
    orderNumber: '',
    stateUS: '',
    tax: 0,
    shippping: 0,
    totalAmount: 0
  }

  getTaxShipping = (taxOrShipping) => {
    let type = taxOrShipping.toLowerCase();
    let rate = '';
    if(type === 'tax' || type === 'shipping') {
      rate = (type === 'tax' ? CheckoutTaxTable[this.state.stateUS] : CheckoutShippingTable[this.state.stateUS])
    } 

    rate = (rate ? rate : 0)

    return (Number((rate * this.props.subTotal).toFixed(2)))
  }

  calcTotals = () => {
    let tax = this.getTaxShipping('shipping')
    this.props._getInputData({'tax': tax}); //send to request

    let shipping = this.getTaxShipping('shipping');
    this.props._getInputData({"shipping": shipping})

    let totalAmount = this.props.subTotal + shipping + tax
    this.props._getInputData({'totalAmount': totalAmount}) //send to parent

  }
  getOrderNumber = () => {
    this.setState.orderNumber = 'X1001';
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.subTotal !== this.props.subTotal && nextProps.stateUS) {
      this.setState({subTotal: nextProps.subTotal, stateUS: nextProps.stateUS}, this.calcTotals());
    } else if(nextProps.stateUS !== this.props.stateUS) {
        this.setState({ stateUS: nextProps.stateUS}, this.calcTotals)
    } else if(nextProps.subTotal !== this.props.subTotal) {
        this.setState({subTotal: nextProps.subTotal}, this.calcTotals);
    }
  }

  componentDidMount = () => {
    this.setState({subTotal: this.props.subTotal, stateUS: this.props.stateUS})
  }

  render = () => {
    return (
      <div style={styles.total_box}>
       <></>
       <h4 style={styles.total}>Subtotal: </h4>
       <h4 style={styles.total}>${this.props.subTotal}</h4>

       <></>
       <h4 style={styles.total}>Tax: </h4>
       <h4 style={styles.total}>${this.state.tax} </h4>
       
       <></>
       <h3 style={styles.total}>Total: </h3>
       <h3 style={styles.total}>${this.state.totalAmount}</h3>
      </div>
    )
  }
}

export default CheckoutTotal;

let styles = {
  total : {
    paddingLeft: 0,
    margin: 5
  },
  total_box: {
    display: 'grid',
    gridTemplateColumns: '14fr 1fr 2fr',
    gridGap: '0',
    backgroundColor: 'white',
    alignSelf: 'center',
    justifySelf: 'center',
    border: '1px solid grey',
    marginTop: '10px',
    borderRadius: '5px'
  }
}
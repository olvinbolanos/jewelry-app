import React, {Component} from 'react'
import CartItem from '../CartItem'
import NavButton from '../NavButton'

class Cart extends Component {
    state = {
        subTotal : 0,
        orderItems : []
    }
 componentDidMount() {
    this.getOrderList()
 }

 getSubTotal = () =>  {
     let subTotal = 0
     this.state.orderItems.map(elem => {
         subTotal += (elem.price * elem.quantity)
     });
     //update the total in state
     this.setState({
       subTotal: subTotal
     })
 }

  getOrderList = () => {
    let cb = () => {
      this.getSubTotal();
      console.log(`orderItems: ${this.state.orderItems}`)
    }
    //get order info from localStorage
    let orderList = localStorage.getItem('orderList') || '';
    let orderItems = orderList ? JSON.parse(orderList) : [];
    this.setState({orderItems: orderItems }, cb)
  }

  updateOrderList = () => {
      let orderList = JSON.stringify(this.state.orderItems)
      localStorage.setItem('orderList', orderList)
      // this will be set in local storage for the user to retrieve items
  }

  updateTotal= () => {
      this.updateOrderList()
      this.getSubTotal()
  }

  changeQuant = (position, quant) => {
    let orderItems = this.state.orderItems
    orderItems[position].quantity = quant
    this.setState({orderItems: orderItems}, this.updateTotal) // reset the state back to 0
  }

  deleteItem = (position) => {
    let orderItems = this.state.orderItems.slice() // copy from state
    orderItems.splice(position, 1); // remove this item that client doesn't want to purchase
    this.setState({ orderItems : orderItems}, this.updateTotal) //reset the state to update
  }

  render() {
    let visibility = (this.state.subTotal > 0) ? Styles.visible : Styles.invisible
    const { orderItems } = this.state
    return (
    <div>
    <div style={Styles.boxBorder}>
      <div style = {Styles.pageTitle}>
        <h2>Shopping Cart:</h2>
      </div>
    </div>
    {/* Items in Cart */}
    {
      orderItems.map( (elem, i) => {
        return (
          <CartItem key={i} 
          item={elem} idx={i} 
          deleteItem={this.deleteItem}
          changeQuant={this.changeQuant} 
          />
        )
      })
    }
    <div styles= {Styles.total_line}>
      <div></div>
      <h4 style={Styles.total}>Subtotal: ${this.state.subTotal}</h4>
    </div>

    <div style={Object.assign({}, Styles.checkoutContainer, visibility)}>
      <NavButton url='/checkout' bText='Proceed to checkout' />
    </div>
    </div>
      )
  }
}

export default Cart

const Styles = {
  boxBorder: {
      margin: '10px',
      marginBottom: '40px'
  },

  leftBorder: {
      borderLeft: '1px grey solid'
  },

  pageTitle: {
      marginLeft: '10px'
  },

  total_line: {
    display: 'grid',
    gridTemplateColumns: '14fr 1fr 2fr',
    gridGap: 0,
    backgroundColor: 'black',
    width: '95%',
    alignSelf: 'center',
    justifySelf: 'center',
    border: '1px grey solid',
    borderRadius: 5,
    margin: '0 10px'
  },

  total: {
    paddingLeft: 10,
    margin: 5
  },
  checkoutContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      width: '95%',
      marginTop: '10px'
  },
  visible: {
    display: 'flex'
  },
  invisible: {
    display: 'none'
  }
}
import React, {Component} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'

class CartItem extends Component {
  onChange = (e) => {
      // target the changeQuant function in Cart Items page
      this.props.changeQuant(this.props.idx, e.target.value)
      //send to parent component to update
  }

  render = () => {
    const item = this.props.item
    return (
        <div>
        <div idx={this.props.idx}>
          <div>
            <img src={item.imgurl} width="300px" alt='item.description'/>
            <p>{this.props.idx+1}</p>
          </div>
        </div>
        <div>
        <p>Print with Image '{item.name}'</p>
        {/* <p> {item.id} */}
        <p>Size: {item.size} </p>
        <label>Quantity:</label>
        <input type="number" name="quantity" min="1" defaultValue={item.quantity} onChange={this.onChange} />
        </div>

        <div style={{display: 'flex'}}>
          <div onClick={() => this.props.deleteItem(this.props.idx)}>
            <p><i className="trash icon"></i>Delete item  </p>
          </div>
        <div>
        </div>
      </div>
    </div>
    )
  } 
}

export default CartItem;
import React, {Component} from 'react'
import '../App.css'

class CartItem extends Component {

    onChange(e) {
        // target the changeQuant function in Cart Items page
        this.props.changeQuant(this.props.idx, e.target.value)
    }

    render() {
        const item = this.props.item
        return (
          <div>
            <div idx={this.props.idx}>
                <div>
                    <img src={item.imgurl} width="300px" alt=''/>
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
                    <i className="trash icon">Delete item</i>
                </div>
                <div>
                    <h3>${item.quantity * item.price}</h3>
                </div>
            </div>
          </div>
        )
    } 
}

export default CartItem;
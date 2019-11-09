import React, { Component } from 'react'
// import { fontAwesomeIcon } from '@fontawesome/react-fontawesome' //needed - dont believe the warning
import { NavLink } from 'react-router-dom'
import Message from '../Message'

class ShopItem extends Component { //Artwork
    state = {
      jewelryInfo: '',
      showMsg: false,
      size: '1',
      quantity: '1'
    }

    getData = async () => {
        //find one
        try {
            let response = await fetch(`process.env.REACT_APP_BACKEND_URL/api/v1/${this.props.match.params._id}`) //get statement doesn't need any params

            console.log(response)
        } catch(err) {
            console.log('in getData catch ', err)
        }
    }

    componentDidMount = () => {
        this.getData(); //read in jewelry database ==> id
    }

    addCart = () => {
        console.log(`add to cart item #: ${this.state.JewelryInfo._id}`)

        let itemInfo = {_id: this.state.jewelryInfo._id, size: this.state.size, quantity: this.state.quantity,
        name: this.state.jewelryInfo.description, price: this.state.JewelryInfo.price, imgurl: this.state.jewelryInfo.image}
    }

    render = () => {
        let itemInfo = this.state.jewelryInfo

        return (
          <div style = {styles.layout4_1col} >
            <div style = {styles.floating_product}>
              <NavLink to='/what'>
                <div style= {styles.closeMe}>
                  {/* <fontAwesomeIcon icon="times-circle" /> */}
                  fontAwesome Icon Here
                </div>
              </NavLink>
            <div style = {styles.imgContainer} >
              <img style={styles.imgurl} src={itemInfo.imgurl} alt={itemInfo.description} />
            </div>
            </div>

          <div style={styles.jewelryInfobox}>
             <p style={styles.jewelryInfo}>{itemInfo.description}</p> 
             {/* <p style={styles.jewelryInfo}></p> */}
          </div>

          {(this.state.showMsg) ? 
          // (<div style = {style.overlay}) >
          (<div>
              <Message msg1 = {"Item Added to Cart"}
              button1Msg = {"Continue Shopping"} 
              button1Url = {"/what"}
              button2Msg = {"Go To Cart"}
              button2Url = '/cart' />
          </div>) 
            : ''} 
          </div>
        )
    }
}

export default ShopItem

let styles = {
    layout4_1col: {
      display: 'grid',
      gridTemplateColumns: '4fr 1fr',
      gridGap: '2%',
      backgroundColor: 'white',
      //height: '92vh',
      width: '95%',
      alignSelf: 'center',
      justifySelf: 'center',
      marginLeft: '3%',
      zIndex: '5',
      visibility: 'visible' //hidden
    },
    layout2col: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: '5%',
      backgroundColor: 'white',
      alignSelf: 'center',
      justifySelf: 'center'
    },
    floating_product: {
      //alignSelf: 'center';
      justifySelf: 'center',
      backgroundColor: 'white',
      padding: '2%',
      borderf: 'lightgrey solid 1px'
    },
    imgContainer: {
      width: '100%'
    },
    artImg: {
      width: '100%',
      maxWidth: '600px'
    },
    closeMe: {
      float: 'right',
      marginBottom: '5px',
      color: 'black'
    },
    jewelryHeading: {
      fontSize: '16px',
      padding: '10px'
    },
    jewelryInfo: {
      fontSize: '14px',
      padding: '0 10px'
    },
    jewelryInfobox: {
      width: '100%',
      border: 'lightgrey solid 1px',
      margin: '2%'
    },
    relatedItems: {
      width: '100%',
      minHeight: '200px',
      border: 'lightgrey 1px solid',
      margin: '2%'
    },
    addCartButton: {
        border: "1px solid black",
        margin:"15px auto",
        height: '30px',
        padding: '0 20px',
        width: "200px"
    },
    centerInDiv: {
        width: "100%",
        marginLeft: "3%",
        textAlign: "center"
    },
    overlay: {
        zIndex: "10",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "80px",
        left: "0",
        backgroundColor: "green",
        opacity: ".8", 
        visibility: "visible"        //"hidden"
    },
    small_input: {
        width: "30px",
    }
}
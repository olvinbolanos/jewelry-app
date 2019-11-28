import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavButton extends Component {
  render = () => {
      let width = this.props.width;
      let navStyle = Object.assign(styles.navLink, (width ? { width: width } : '')) //override width

      return (
        <NavLink to={this.props.url} style={navStyle} history={this.props.history} >
          <div style={styles.navButton}>
             <p style={styles.bText}>{this.props.bText}</p>
          </div>
        </NavLink>
      )
  }
}

export default NavButton

let styles = {
    navLink: {
      textDecoration: 'none',
      margin: 0,
      color: 'black',
      display: 'flex',
      alignItems: 'center',
      width: '30%'
    },
    navButton: {
      border: '1px solid black',
      borderRadius: 5,
      margin: '15px',
      padding: '15px',
      backgroundColor: 'lightGrey',
      fontSize: '20px',
      width: '100%'
    },
    bText: {
        textAlign: 'center',
        margin: '0'
    }
}
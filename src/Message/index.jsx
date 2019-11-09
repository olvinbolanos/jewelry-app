import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Message extends Component {
  state = {
    visible: true
  }

  onHandleClick = () => {
    this.setState({visible: false})
  }

  onHandleClick2 = () => {
    this.setState({visible: false})
  }

  render = () => {
    const {msg1, button1Msg, button1Url, button2Msg, button2Url} = this.props
  

  return (
    (this.state.visible ?
      <div style={styles.allOverlay}>
        <div style={styles.overlayMsgBox}>
          <h2 style={styles.message}>{msg1}</h2>
          <div style={styles.overlayButtonBox}>
            <NavLink to={button1Url} style={styles.navLink}>
            <p>{button1Msg}</p>
            </NavLink>
            <NavLink to={button2Url} style={styles.navLink}>
                <div style={styles.fakebutton}>
                    <p>{button2Msg}</p>
                </div>
            </NavLink>
          </div>
        </div>
      </div>: '')
    )
  }   
}

export default Message

let styles = {
    allOverlay: {
        visibility: "visible",
        zIndex: "10",
        width: "80%",
        height: "70%",
        position: "absolute",
        top: "100px",
        left: "0",
        backgroundColor: "#f4f4f4",
        opacity: "1", 
        margin:"0 5%",
        border: "lightgrey 1px solid",
        borderRadius: 5
    },
    overlayMsgBox: {
        width: "80%",
        height: "200px",
        margin: "10% 10%",
        marginBottom: "20px",
        color: "#3e90bc",
        textAlign: "center",
        borderRadius:5

    },
    message: {
        alignSelf: 'center',
        justifySelf: 'center',
        padding: "40px",
        margin: 0
    },
    overlayButtonBox: {
        width: "80%",
        margin: "0 10%",
        color: "#f9f0c7",
        display: "grid",
        gridTemplateColumns: "1fr 1fr"
    },
    fakebutton: {
        border: "1px solid black",
        margin:"0 auto",
        height: '50px',
        padding: '0 20px',
        width: "70%",
        backgroundColor: "lightgrey",
        fontSize: "20px",
        borderRadius:5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    navlink: {
        textDecoration: "none",
        margin:0,
        color: "black",
        display: "flex",
        alignItems: "center"
    },

}


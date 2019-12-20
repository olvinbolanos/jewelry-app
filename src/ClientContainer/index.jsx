import React, { Component } from 'react'
import Banner from '../Banner'
import GalleryOneImg from '../GalleryOneImg'
import GalleryCol from  '../GalleryCol'
import { NavLink } from 'react-router-dom'
import '../App.css'


class ClientContainer extends Component {
  constructor() {
    super();
      this.state = {
        users: []
      }
  }

  async componentDidMount() {
    this.getUsers()
  }

  getUsers = async () => {
      console.log("hitting!!!!!")
      try {
        const clientResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/`, {
            method: 'GET'
        })
        const parsedResponse = await clientResponse.json()
        this.setState({
          users : parsedResponse.data
        })
      }
      catch (err) {
        console.log(err)
      }
  }

  render() {
      const { users } = this.state
      return (
          <div>
              <Banner />
              <div className="App-flex-cards">
              { 
                users.map((user, i) => { 
                  return (
                    <div key={i}>
                      <div className="ui special cards">
                      <div className="card">
                        <div className="blurring dimmable image">
                          <div className="ui dimmer">
                            <div className="content">
                              <div className="center">
                                <div className="ui button visible" 
                                  style={{visibility: "visible !important", 
                                  display: "flex !important"}}>
                                  <NavLink key={i} to={`/jewelry/${user.id}`}><GalleryOneImg key={i} jewelryInfo={user} /> Add to Shopping Cart<i className="shopping cart icon"></i></NavLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/profile_pics/${user.image}`} alt={user.user.username} />
                        </div>

                        <div className="content">
                          <a className="header" href="#">{user.user.username}</a>
                          <div className="meta">
                            <span className="date">Posted on {user.created_at}</span>
                          </div>
                        </div>

                        <div className="extra content">
                          <a href="#">
                              <i className="users icon"></i>
                              {user.description}
                          </a>
                        </div>

                        <div className="extra content">
                        <NavLink key={i} to={`/jewelry/${user.id}`} > 
                          Add to Shopping Cart
                          <i className="shopping cart icon"></i>
                        </NavLink>
                          <div className="extra content">
                            <a href="#">
                            <i>${user.price}</i>
                            </a>
                          </div>
                        </div>
                    </div>
                  </div> 
                </div>
                )
            })
        }
      </div>
    </div>
   )
  }
}

export default ClientContainer;




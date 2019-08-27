import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button, Form, Image, Header, Message, Card, Icon} from 'semantic-ui-react'
import { parse } from '@babel/core';


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

    getUsers = async (data) => {
        console.log("hitting!!!!!")
        try {
            const clientResponse = await fetch('http://localhost:8000/api/v1/', {
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
                <h1>Welcome to the Home Page</h1>
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
                                        <div className="ui button visible" style={{visibility: "visible !important", display: "flex !important"}}>Add to Shopping Cart<i className="shopping cart icon"></i></div>
                                    </div>
                                    </div>
                                </div>
                                <img src={`http://localhost:8000/profile_pics/${user.image}`} alt={user.user.username} />
                                </div>
                                <div className="content">
                                <a className="header">{user.user.username}</a>
                                <div className="meta">
                                    <span className="date">Posted on {user.created_at}</span>
                                </div>
                                </div>
                                <div className="extra content">
                                <a>
                                    <i className="users icon"></i>
                                    {user.description}
                                </a>
                                </div>
                                <div className="extra content">
                                <a>
                                Add to Shopping Cart
                                <i className="shopping cart icon"></i>
                                </a>
                                <div className="extra content">
                                    <a>
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
        )
    }
}

export default ClientContainer;




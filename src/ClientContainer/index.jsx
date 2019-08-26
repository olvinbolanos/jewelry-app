import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button, Form, Image, Header, Message, Card, Icon} from 'semantic-ui-react'


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
                                <img src={'http://localhost:8000/profile_pics/' + user.image} alt={user.user.username} />
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



{/* <div key={i} className='item'>
                            <div className='middle aligned content'>
                            <div className='header'>
                            <i className='large caret up icon' />
                            <b>{user.name} </b>
                            </div>
                            <div className='description'>
                            <a  href={user.name}>{user.title}
                              This will be the link to see the item</a>
                            <p>{user.owner}</p>
                            </div>
                            <div className='extra'>
                            <span>Published by: </span>
                            <span  className='author'>{user.name} ;</span>
                            <span  className='author'>  Date: {user.created_at} </span>
                            </div>
                                <div className="image">
                                    <img src={"http://localhost:8000/profile_pics/" + user.image} />
                                </div>  
                            <div>
                                <i>${user.price}</i>
                            </div>
                            </div>
                        </div> */}
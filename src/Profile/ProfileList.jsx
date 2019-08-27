import React from 'react'
import { Header} from 'semantic-ui-react'


const Profilees = (props) => {
    return (
        <div>
        <Header as='h2' textAlign='center'>
          {props.userInfo.username}'s List Of Jewelry
        </Header>
        <div className="App-flex-cards-2">
        {
          props.userInfo.loading ?
          'Loading.....' :
          props.clientele.map((client, i) => {
            return(
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
                    <img src={`http://localhost:8000/profile_pics/${client.image}`} alt={props.userInfo.username} />
                  </div>
                  <div className="content">
                    <a className="header">{props.userInfo.username}</a>
                    <div className="meta">
                      <span className="date">Posted on {client.created_at}</span>
                    </div>
                  </div>
                  <div className="extra content">
                    <a>
                      <i className="users icon"></i>
                      {client.description}
                    </a>
                  </div>
                  <div className="extra content">
                    <a>
                      <i className="dollar icon"></i>
                      {client.price}
                    </a>
                  </div>
                  <div className="extra content" style={{display: "flex !important"}}>
                    <button onClick={props.showModal.bind(null, client)} style={{cursor: "pointer !important"}}>Edit Jewelry</button>
                  
                    <button onClick={props.deleteClient.bind(null, client.id)} style={{cursor: "pointer !important"}}>Delete Jewelry</button>
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

export default Profilees
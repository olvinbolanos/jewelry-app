import React, { Component } from 'react'
import Banner from '../Banner'
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

  sortJewelryWorks = (userArray) => {
    let sortedArr = [];
    let newIdx = 0
    userArray.map((elem,i)=> {  //place all sorted elems first into array
      if (elem.sortId && !(isNaN(elem.sortId))) {   //if sortId is a number
        //copy the elem to index of sortId
          newIdx = elem.sortId - 1    //(sortId starts at #1)
        while (sortedArr[newIdx]) {  //while there is something here, go on -make sure nothing already in this slot
            newIdx ++;
        }
        sortedArr[newIdx]= JSON.parse(JSON.stringify(elem))
      }
    })
    newIdx = 0;    //reset idx
    userArray.map((elem,i)=> { //test if elem is null, if so, stick in the element
      if (!(elem.sortId)) {
        while (sortedArr[newIdx]) {  //find next open slot
          newIdx ++;
        }
        sortedArr[newIdx]= JSON.parse(JSON.stringify(elem))    //write the elem
      }
    })   
    // sortedArr.map((elem, i)=>{console.log(elem.sortId,elem.name)})
    return (sortedArr) 
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
                                  Add to Shopping Cart<i className="shopping cart icon"></i>
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
                          <a href="#">
                          Add to Shopping Cart
                          <i className="shopping cart icon"></i>
                          </a>
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




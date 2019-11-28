import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Cart from './Cart'
import ShopItem from './ShopItem'
import Header from './Header'
import Login from './Login'
import Profile from './Profile'
import Register from './Register'
import ShippingForm from './ShippingForm'
import ClientContainer from './ClientContainer'
import Jewelry from './Jewelry'
import Checkout from './Checkout'
import UserLogout from './UserLogout';
import './App.css'

const My404 = () => {
  return(
    <div>
      <p>You are lost Buddy</p>
    </div>
  )
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      username: '',
      email: '',
      loading: true
    }
  }

  async componentDidMount() {
    if(localStorage.getItem('user')) {
      this.getClient()
    }
  }

  logIn = async (loginInfo) => {
    try {
      const loginResponse = 
        await fetch(`http://localhost:8000/user/login`, 
        {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(loginInfo),
          headers: {
            'Content-Type': 'application/json'
          }
        })

      const parsedResponse = await loginResponse.json()
      
      if (parsedResponse.status.code === 200) {
        setTimeout(() => {
          if(this.state.loading) {
            this.setState({
              ...parsedResponse.data,
              loading: false
            })
          }
        }, 500) //this will slow down before it uploads
      } else if (localStorage.getItem('user')) {
        console.log('I hit the user in local storage')
      } else {
        console.log(parsedResponse.status.message)
      }
      return parsedResponse
    } catch (err) {
      console.log(err)
    }
  }

  register = async (data) => {
    try {
      const registerResponse = await fetch(`http://localhost:8000/user/register`, {
        method: 'POST',
        credentials: 'include',
        body: data,
        headers: {
          'enctype': 'multipart/form-data'
        }
      })

      const parsedResponse = await registerResponse.json()

      this.setState({
        ...parsedResponse.data,
        loading: false
      })

      return parsedResponse
    } catch (err) {
      console.log(err)
    }
  }
  jewelry = async (info) => {
    try {
      const registerResponse = await fetch('http://localhost:8000/api/v1/', {
        method: 'POST',
        credentials: 'include',
        body: info,
        headers: {
          'enctype': 'multipart/form-data'
        }
      })

      const parsedResponse = await registerResponse.json()
      this.setState({
        ...parsedResponse.data
      })

      return parsedResponse
    } catch (err) {
      console.log(err)
    }
  }

  getClient = async () => {
    console.log("hitting!!!!!")
    try {
      const clientResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/`)

      if (clientResponse.status !== 200) {
        throw Error('server 404, error!!!')
      }

      const parsedResponse = await clientResponse.json()

      const user = JSON.parse(localStorage.getItem('user'))

      const userRoute = parsedResponse.data.filter(item =>
        item.user.id = user.id
      )
        this.setState({
          ...userRoute.user,
          loading: false

        })      
    } catch (err) {
      console.log(err)
    }
  }
  updateUser = user => {
    this.setState({
      ...user,
      loading: true
    })
  }

  render() {
    return (
      <main> 
        {
          this.state.loading ?
          <Switch>
            <Route exact path='/' render={(props) => <Login {...props} logIn={this.logIn} />} />
            <Route exact path='/register' render={(props) => <Register {...props} register={this.register} /> } />
          </Switch> :
          <main>
            <Header />
            <Switch>
              <Route exact path='/profile' render={(props) => <Profile {...props} userInfo={this.state} /> } />
              <Route exact path='/clientContainer' render={(props) => <ClientContainer {...props} userInfo={this.state} /> } /> 
              <Route exact path='/jewelry' render={(props) => <Jewelry {...props}  jewelry={this.jewelry} userInfo={this.state}/> } />
              <Route exact path='/jewelry/:_id' component={ShopItem} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/checkout' component={Checkout} />
              {/* <Route exact path='/payment' component={Payment} /> */}
              <Route exact path='/shipping' component={ShippingForm} />
              <Route exact path='/logout' render={(props) => <UserLogout {...props} userInfo={this.state} updateUser={this.updateUser}/> } />
              <Route exact component={My404} />
            </Switch>
          </main>
        }
      </main>
    )
  }
}

export default App;

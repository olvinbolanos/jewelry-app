import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom'
import Header from './Header'
import Banner from './Banner'
import Login from './Login'
import Profile from './Profile'
import Register from './Register'
import ShippingForm from './ShippingForm'
import ClientContainer from './ClientContainer'
import Jewelry from './Jewelry'
import './App.css'

const My404 = () => {
  return (
    <div>
      You are lost Buddy
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

  

  logIn = async (loginInfo) => {
    try {
      const loginResponse = await fetch(`http://localhost:8000/user/login`, {
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

  render() {
    return (
      <main> 
        {
          this.state.loading ?
          <Switch>
            <Route exact path='/' render={(props) => <Login {...props} logIn={this.logIn} />} />
            <Route path='/register' render={(props) => <Register {...props} register={this.register} /> } />
          </Switch> :
          <main>
            <Header />
            <Switch>
              <Route exact path='/' render={(props) => <Login {...props} logIn={this.logIn} />} />
              <Route path='/register' render={(props) => <Register {...props} register={this.register} /> } />
              <Route path='/profile' render={(props) => <Profile {...props} userInfo={this.state} /> } />
              <Route path='/shippingForm' render={(props) => <ShippingForm {...props} userInfo={this.state} /> } />
              <Route path='/clientContainer' render={(props) => <ClientContainer {...props} userInfo={this.state} /> } /> 
              <Route path='/jewelry' render={(props) => <Jewelry {...props}  jewelry={this.jewelry} userInfo={this.state}/> } />
              <Route path='/logout' />
              <Route component={My404} />
            </Switch>
          </main>
        }
        
      </main>
    )
  }
}

export default App;

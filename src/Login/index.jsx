import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
class Login extends Component {
  constructor(){
    super();

    this.state = {
      email: '',
      password: ''
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    const login = this.props.logIn(this.state);

    login.then((data) => {
      if(data.status.message === 'Success'){
        this.props.history.push('/profile')
        console.log('hitting success')
      } else {
        console.log(data, this.props)
      }
    }).catch((err) => {
      console.log(err)
    })

  }
  render(){
    return (
      <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh'}}>
        <Grid.Column style={{maxWidth: 450}}>
          <Header as='h2' textAlign='center'>
            Login
          </Header>
          <Form onSubmit={this.handleSubmit}>
              <Segment stacked>
              Email:
              <Form.Input fluid icon='mail' iconPosition='left' placeholder='email' type='text' name='email' onChange={this.handleChange}/>
              password:
              <Form.Input fluid icon='lock' iconPosition='left' type='password' name='password' onChange={this.handleChange}/>
              <Button fluid size='large' type='sumbit'>Login</Button>
              <Message>
                Not a member? <Link to='/register'>Register</Link>
              </Message>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
      )
  }
}

export default withRouter(Login);

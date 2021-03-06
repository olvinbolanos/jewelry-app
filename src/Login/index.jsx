import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
class Login extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      email: '',
      password: '',
      error: null
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: null
    });
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    let login = this.props.logIn(this.state)

    login.then((data) => {
      if(data.status.message === 'Success'){
        localStorage.setItem('user', JSON.stringify(data.data))
        this.props.history.push('/jewelry')
      } else {
        console.log(data, this.props)
        this.setState({
          error: data.status.message
        })
      }
    }).catch((err) => {
      console.log(err)
    })
  }
  render(){
    const {error} = this.state
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
              {error ? error : null}
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

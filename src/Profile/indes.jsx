import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Header, Image, Message, Card, Icon} from 'semantic-ui-react'

class Profile extends Component {
    constructor(){
      super();
  
      this.state = {
       id: 1,
       email: '',
       image: '',
       username: ''
      }
    }
    render(){
      console.log(this.state, this.props.userInfo, 'in profile< props')
  
      return (
        <Grid columns={2} padded style={{ height: '100vh'}}>
          <Grid.Row>
            <Grid.Column width={4}>
              {
                this.props.userInfo.loading ?
                'Loading.....' :
  
                <Card
                  image={'http://localhost:8000/profile_pics/' + this.props.userInfo.image}
                  header={this.props.username}
                  meta={this.props.email}
                  description='most of the time I cant even be sure if she was ever with me'
                  style={{'marginLeft': '5vw'}}
                  />
               }
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as='h2' textAlign='center'>
                {this.props.userInfo.username}'s Clients
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        )
    }
  }
  export default Profile;
  

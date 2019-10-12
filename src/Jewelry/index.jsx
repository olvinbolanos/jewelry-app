import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Grid, Button, Form, Header, Segment} from 'semantic-ui-react'


class Jewelry extends Component {
    constructor() {
        super();
        this.state = {
            owner: '',
            price: '',
            description: '',
            image: {}
        }
    }

    handleChange = (e) => {
        if(e.target.name !== 'image'){
          this.setState({[e.target.name]: e.target.value});
        } else {
          // file upload
          console.log(e.target.files[0])
          this.setState({image: e.target.files[0]});
        } 
    }
    handleSubmit = async (e) => {
        e.preventDefault();
    
        const data = new FormData();
       
        data.append('owner', this.state.owner)
        data.append('price', this.state.price);
        data.append('description', this.state.description);
        data.append('file', this.state.image);

        
        console.log(data.entries(), ' this is data')
        for (let pair of data.entries()){
          console.log(pair[0]  ,', ', pair[1])
        }
    
        const registerCall = this.props.jewelry(data);
    
        registerCall.then((data) => {
          console.log(data, '<-- this is my data response in jewelry')
            if(data.status.message === "Success"){
              this.props.history.push('/profile')
            } else {
              console.log(data, ' this should have an error message? How could you display that on the screen')
            }
        })
      }

      
    render(){
      return (
        <div>
        {
          this.props.userInfo.loading ?
          "Sorry, you are not logged in, make sure to login first to post on our site":
        <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh'}}>
          <Grid.Column style={{maxWidth: 450}}>
            <Header as='h2' textAlign='center'>
              Post up your jewelry on our site and get your money's worth
            </Header>
            <Form onSubmit={this.handleSubmit}>
                <Segment stacked>
                 Bargain Price:
                 <Form.Input fluid icon='dollar sign' iconPosition='left' placeholder='price' type='text' name='price' onChange={this.handleChange}/>
                 Owner of Jewelry ("Person or Business name"):
                 <Form.Input fluid icon='user circle' iconPosition='left' placeholder='owner' type='text' name='owner' onChange={this.handleChange}/>
                 <div className="field">
                   <label>Description of Item</label>
                   <textarea name="description" onChange={this.handleChange}></textarea>
                </div>
                Image:
                <Form.Input fluid icon='image' iconPosition='left' type="file" name='image' onChange={this.handleChange}/>
                <Button fluid size='large' type='sumbit'>Register</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
        }
        </div>
        )
      }
    }
  
  export default withRouter(Jewelry);
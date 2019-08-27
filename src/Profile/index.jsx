import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import { Grid, Button, Form, Header, Image, Message, Card, Icon} from 'semantic-ui-react'
import  EditClient  from "./EditClient";
import  Profilees from './ProfileList';
class Profile extends Component {
    constructor(){
      super();
  
      this.state = {
       id: '',
       email: '',
       image: '',
       username: '',
       clients: [],
       showEditModal: false,
       clientToEdit: {
         id: null,
         owner: '',
         price: '',
         description: ''
       }
      }
    }

    async componentDidMount() {
      this.getClient()
    }

    getClient = async (data) => {
      console.log("hitting!!!!!")
      try {
        const clientResponse = await fetch(`http://localhost:8000/user/${this.props.userInfo.id}/clients`, {
          method: 'GET'
        })
        const parsedResponse = await clientResponse.json()
        // localStorage.Item('user', JSON.stringify(parsedResponse))


        console.log(parsedResponse.data)
          this.setState({
          clients : parsedResponse.data
        })
      } catch (err) {
        console.log(err)
      }
    }

    handleFormChange = (e) => {
      this.setState({
        clientToEdit: {
          ...this.state.clientToEdit,
          [e.target.name] : e.target.value
        }
      })
    }

    showModal = (client) => {
      console.log(client)
      delete client.user
      this.setState({
        clientToEdit : client,
        showEditModal: !this.state.showEditModal,
        id: client.id
      })
    }

    closeAndEdit = async (e) => {
      e.preventDefault();
      try {
        const editRequest = await fetch(`http://localhost:8000/api/v1/${this.state.id}`, {
          method: 'PUT',
          credentials: 'include',
          body: JSON.stringify(this.state.clientToEdit),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if(editRequest.status !== 200) {
          throw Error('editRequest not working right')
        }
        const editResponse = await editRequest.json()

        const editClientArray = this.state.clients.map((client) => {
          if(client.id === editResponse.data.id) {
            client = editResponse.data
          }
          return client
        })
        this.setState({
          clients : editClientArray,
          showEditModal: false
        })
      } catch (err) {
        console.log(err, ' error closeAndEdit')
        return err
      }
    }

    deleteClient = async (id) => {
      try{
        const deleteClient = await fetch(`http://localhost:8000/api/v1/${id}`, {
          method: "DELETE",
          credentials: 'include'
        }) 
        console.log(deleteClient)
        if (deleteClient.status !== 200) {
          throw Error('something went wrong while deleting')
        }
        const deleteClientJSON = await deleteClient.json()
        console.log(deleteClientJSON.status.message)
        this.setState({
          clients: this.state.clients.filter((client) => client.id !== id)
        })
      } catch(err) {
        console.log(err)
        return err
      }
    }
    render(){
      console.log(this.state, this.props.userInfo, 'in profile< props')
      const { clients } = this.state
      return (
        <div>
          <Profilees clientele={this.state.clients} showModal={this.showModal} deleteClient={this.deleteClient} userInfo={this.props.userInfo}/>
          {this.state.showEditModal ? <EditClient closeAndEdit={this.closeAndEdit} clientToEdit={this.state.clientToEdit} handleFormChange={this.handleFormChange} /> : null}
        </div>
        )
    }
  }
  
  export default Profile;
  


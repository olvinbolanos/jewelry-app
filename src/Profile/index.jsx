import React , {Component} from 'react'
import 'semantic-ui-css/semantic.min.css';
import  EditClient  from "./EditClient";
import  Profilees from './ProfileList';
class Profile extends Component {
    constructor(){
      super();
  
      this.state = {
       id: '',
       email: '',
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
      const client = localStorage.getItem('user')
      let newClient = JSON.parse(client)
      
      if(newClient.id) {
        this.setState({
          ...newClient,
          loading: false,
        })
        this.getClient()
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
            clients: [...userRoute]
          })
          console.log(userRoute, '<--- this is userRoute getClient')
        
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
      console.log(client, 'in modal')
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
        const editRequest = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/${this.state.id}`, {
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
        const deleteClient = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/${id}`, {
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
      console.log(this.state, this.props.userInfo, 'in profile < props')
      const { clients } = this.state
      return (
        <div>
          <Profilees clientele={clients} showModal={this.showModal} deleteClient={this.deleteClient} userInfo={this.state}/>
          {this.state.showEditModal ? <EditClient closeAndEdit={this.closeAndEdit} clientToEdit={this.state.clientToEdit} handleFormChange={this.handleFormChange} /> : null}
        </div>
        )
    }
  }
  
  export default Profile;
  


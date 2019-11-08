import React, {Component} from 'react'


class UserLogout extends Component{
   
    componentDidMount(){
      let removedItem = localStorage.removeItem('user');
      return removedItem
    }
    render() {
        setTimeout(() => {
            console.log('coming from updateUser ', this.props.updateUser())
            this.props.history.push('/')
        }, 1500)
        return(
            <div>
                <div>
                    <h2>User has successfully logged out, Thank you for visiting Jewelry Shop</h2>
                </div>
            </div>
        )   
    }
}

export default UserLogout;
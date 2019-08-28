import React from 'react'


const UserLogout = () => {
    //   delete user from localStorage
    let removedItem = localStorage.removeItem('user');
    return(
        <div>
            <div>
                <h2>User has successfully logged out, Thank you for visiting Jewelry Shop</h2>
            </div>
        </div>
    )   
}

export default UserLogout;
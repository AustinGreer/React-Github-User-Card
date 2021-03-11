import React from 'react'
import axios from 'axios'

class User extends React.Component {
    state = {
        user: null,
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/AustinGreer')
        .then (res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>User Component</div>
        )
    }
}

export default User
import axios from 'axios'
import React from 'react'
import Follower from './Follower'

class Followers extends React.Component {
    state = {
        followers: []
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/AustinGreer/followers')
        .then(res => {
            console.log('Success! Here is the data', res)
            this.setState({
                followers: res.data,
            })
        })
        .catch(err => {
            console.log('Oh no! Here is the error ', err)
        })
    }

    render() {
        return (
            <div>
                
                {this.state.followers.map(follower => {
                    return (
                        <Follower key={follower.id} follower={follower}/>
                    )
                })}

            </div>
            
        )
    }
}

export default Followers
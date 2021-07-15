import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

class User extends React.Component {
    state = {
        user: [],
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/AustinGreer')
        .then (res => {
            
            this.setState({
                user: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    // componentDidUpdate() {

    // }

    render() {
        const { user } = this.state

        return (
            <StyledSection>
                <img src={user.avatar_url} style={{width: '180px', borderRadius: '50%'}} alt={user.login} />
                <div>
                    <h3>Username: {user.login}</h3>
                    <h3>Location: {user.location}</h3>
                    <h3>Followers: {user.followers}</h3>
                    <h3>Following: {user.following}</h3>
                </div>
            </StyledSection>
        )
    }
}



const StyledSection = styled.section`
    display: flex;
    justify-content: space-evenly;
    background: white;
    width: 40%;
    margin: 0 auto;
    padding: 2%;
    border-radius: 10%;
`

export default User
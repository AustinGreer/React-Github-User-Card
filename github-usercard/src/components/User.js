import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

class User extends React.Component {
    state = {
        user: {},
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/AustinGreer')
        .then (res => {
            console.log(res)
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
        return (
            <StyledSection>
                <img src={this.state.user.avatar_url} style={{width: '180px', borderRadius: '50%'}} alt={this.state.user.login} />
                <div>
                    <h3>Username: {this.state.user.login}</h3>
                    <h3>Location: {this.state.user.location}</h3>
                    <h3>Followers: {this.state.user.followers}</h3>
                    <h3>Following: {this.state.user.following}</h3>
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
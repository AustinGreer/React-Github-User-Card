import React from 'react'
import styled from 'styled-components'

class Follower extends React.Component {

    render() {
        const { follower } = this.props
        
        return (
            <StyledSection>
                <img style={{width: '180px', borderRadius: '50%'}} src={follower.avatar_url} alt={follower.login} />
            
                    <h3>Username: {follower.login}</h3>
                
            </StyledSection>
        )
    }
}

const StyledSection = styled.section`
    display: flex;
    justify-content: space-evenly;
    background: white;
    width: 40%;
    margin: 5% auto;
    padding: 2%;
    border-radius: 10%;
`

export default Follower
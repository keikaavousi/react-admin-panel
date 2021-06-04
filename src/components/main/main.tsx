import styled from 'styled-components'
import Form from '../form/form'


const StyledMain = styled.main`
    width:80%;
    height:100vh;
    display:flex;
    
`

const inputs = [
    {
        label:'Name',
        placeholder:"your name",
        type:'text'
    },
    {
        label:'Email',
        placeholder:"your email",
        type:'email'
    },
    {
        label:'Message',
        placeholder:"your message",
        type:'textarea'
    },
]


const Main : React.FC = () => {
    const handleSubmit = () => {
        alert('submited!')
    }

    return(
        <StyledMain>
                <Form inputs={inputs} onSubmit={handleSubmit}/>
        </StyledMain>
    )
}

export default Main;
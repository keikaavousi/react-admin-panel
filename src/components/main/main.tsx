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
        label:'Family',
        placeholder:"your family",
        type:'text'
    },
    {
        label:'Email',
        placeholder:"your email",
        type:'email'
    },
    {
        label:'Password',
        placeholder:"your password",
        type:'password'
    },
    {
        label:'Message',
        placeholder:"your message",
        type:'textarea'
    },
]


const Main : React.FC = () => {
    return(
        <StyledMain>
                <Form inputs={inputs}/>
        </StyledMain>
    )
}

export default Main;
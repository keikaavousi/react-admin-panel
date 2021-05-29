import ReactDOM from 'react-dom'
import './index.css'
import './assets/css/icons.css'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import Main from './components/main/main'
import styled from 'styled-components'

const Wrapper = styled.div`
    width:100%;
    display:flex;
`

const Index = () => {
    return(
        <>
        <Header title="Admin Panel" name="Mohammad Reza"/>
        <Wrapper>
            <Sidebar/>
            <Main/>
        </Wrapper>
       </>
    )
}

ReactDOM.render(<Index/>,document.querySelector("#root"))
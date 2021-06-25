import ReactDOM from 'react-dom'
import './index.css'
import './assets/css/icons.css'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import Main from './components/main/main'
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
import routes from './routes'
import Login from './containers/login/index'


const Wrapper = styled.div`
    width:100%;
    display:flex;
`

interface IPrivate{
    children: any
    rest?:any
    exact:boolean
    path:string
}



const PrivateRoute : React.FC<IPrivate> = ({children,...rest}) => {
    const token = sessionStorage.getItem('auth')

    return(
        <Route
        {...rest}
        render={({location})=>
            token ? (
                children
            ):(
                // <Redirect
                //     to='/login'
                // />
                <Redirect
                    to={{
                        pathname:'/login',
                        state: {from: location}
                    }}
                />
            )
        }
        
        />
    )

}



const Index = () => {
    return(
        <>
        <Header title="Admin Panel" name="Mohammad Reza"/>
        <Wrapper>

            <Router>
                <Sidebar/>
                <Switch>

                    <Route path="/login">
                        <Login/>
                    </Route>

                   {routes.map(({containerPath,name,path})=>{
                      let Container = require(`${containerPath}`).default

                       return(
                            <PrivateRoute key={name} exact path={path}>
                                <Container/>
                            </PrivateRoute>
                       )
                   }
                       
                   )}
                </Switch>
            </Router>

        </Wrapper>
       </>
    )
}

ReactDOM.render(<Index/>,document.querySelector("#root"))
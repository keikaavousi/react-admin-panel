import styled from 'styled-components'
import Button from '../button/button'
import SidebarItem from './sidebarItem'


const Aside = styled.aside`
    width:20%;

    @media only screen and (max-width:768px){
        width:100%;
    }
`

const SidebarList = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
`

const items = [
    {
        title:'Dashboard',
        link:'/',
        icon:'th-list'
    },
    {
        title:'Products',
        link:'/products',
        icon:'book'
    },
    {
        title:'Users',
        link:'/users',
        icon:'users'
    },
    {
        title:'Carts',
        link:'/carts',
        icon:'doc'
    },
]

const Sidebar : React.FC = () => {
    return(
        <Aside>
            <SidebarList>
                    {items.map((item,index)=>{
                        return(
                            <SidebarItem key={index} title={item.title} link={item.link} icon={item.icon}/>
                        )
                    })}
            </SidebarList>
            <Button title="logout" styleType="primary"/>
        </Aside>
    )
}

export default Sidebar;
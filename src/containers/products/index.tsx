import {useState,useEffect} from 'react'
import Table from '../../components/table/table'
import styled from 'styled-components'


const HeaderTitle = styled.h1`
display:block;
text-align:left;
`
const Container = styled.div`
padding:15px;
`

const Index:React.FC = () => {
    const [products,setProducts] = useState<{id:number;title:string;price:number}[] | undefined >()

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(result=>setProducts(result))
    },[])

    return(
        // <ul>
        //     {
        //         products?.map((product)=>{
        //             return(
        //                <li key={product.id}>
        //                    <h3>{product.title}</h3>
        //                    <h5>{product.price}</h5>
        //                    {/* <p>{product.description}</p> */}
        //                </li> 
        //             )
        //         })
        //     }
        // </ul>
        <Container>
        <h1>Products</h1>
        <Table data={products}/>
        </Container>
    )
}
export default Index;
import {useRef,useEffect} from 'react'
import Main from "../../components/main/main"

const Index = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    useEffect(()=>{
        // if(!inputRef.current){
        //     return;
        // }else{
        //     inputRef.current.focus()
        // }
        inputRef.current?.focus()
    },[])

return(
    // <Main/>
    <input type="text" ref={inputRef}/>
)
}
export default Index
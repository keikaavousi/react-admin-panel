import styled,{keyframes} from 'styled-components'


const loadingAnimation = keyframes`
    0%{
        width:100px;
        height:100px;
    }
    100%{
        width:150px;
        height:150px;
    }
`

const StyledLoading = styled.div`
    width:100px;
    height:100px;
    background-color:#000;
    border-radius:50%;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    animation: ${loadingAnimation} 0.3s ease infinite alternate;
`

const Loading:React.FC = () => {
    return(
        <StyledLoading/>
    )
}
export default Loading;
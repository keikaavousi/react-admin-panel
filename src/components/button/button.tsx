import styled from 'styled-components'


const StyledButton = styled.button<{color:string,type:string}>`
    border:none;
    outline:none;
    background-color:${props => props.type==='primary' ? "#000" : 'blue'};
    color:#fff;
    border-radius:5px;
    display:inline-block;
    padding:6px 12px;

`

interface ButtonProps{
    title:string
    color:string
}

const Button : React.FC<ButtonProps> = ({title,type}) => {
    return(
        <StyledButton type="button" className="btn" type={type}>{title}</StyledButton>
    )
}

export default Button;
import {StyledForm,FormGroup,Label,Input,TextArea} from './styled'
import Button from '../button/button'


const Form = ({inputs}) => {

    const handleSubmit = () => {
            
    }


    return(
        <StyledForm onSubmit={handleSubmit}>

            {inputs.map(input=>{
                input.type === 'textarea' ?
                (
                <FormGroup>
                    <Label>{input.label}</Label>
                     <TextArea placeholder={input.placeholder}/>
                    </FormGroup> 
                   
                ) : (
                    <FormGroup>
                    <Label>{input.label}</Label>
                    <Input placeholder={input.placeholder} type={input.type}/>
                </FormGroup>
                )
            })}

            <Button title="submit" color="#000"/>
        </StyledForm>
    )
}

export default Form;
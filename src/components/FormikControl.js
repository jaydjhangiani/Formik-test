import CheckBox from "./controls/CheckBox"
import DatePicker from "./controls/DatePicker"
import Input from "./controls/Input"
import RadioButtons from "./controls/RadioButtons"
import Password from "./controls/Password"
import Select from "./controls/Select"
import TextArea from "./controls/TextArea"

const FormikControl = (props) => {
    const {control, ...rest} = props
    switch(control ){
        case 'input': return <Input {...rest}/>
        case 'password' : return <Password {...rest}/>
        case 'textarea': return <TextArea {...rest}/>
        case 'select': return <Select {...rest}/>
        case 'radio': return <RadioButtons {...rest} />
        case 'checkbox': return <CheckBox {...rest} />
        case 'date': return <DatePicker {...rest} />
        default: return null
    }
}

export default FormikControl

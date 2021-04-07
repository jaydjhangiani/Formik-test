import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {

    const dropDownOptions = [
        {key: "Option 1", value: "option1"},
        {key: "Option 2", value: "option2"},
        {key: "Option 3", value: "option3"},
    ]

    const radioOptions = [
        {key: "Option 1", value: "roption1"},
        {key: "Option 2", value: "roption2"},
        {key: "Option 3", value: "roption3"},
    ]

    const checkboxOptions = [
        {key: "Option 1", value: "coption1"},
        {key: "Option 2", value: "coption2"},
        {key: "Option 3", value: "coption3"},
    ]

    const initialValues = {
        email: "",
        password: "",
        description: "",
        selectOption: "",
        radioOption: "",
        checkboxOption: [],
        birthDate: null,

    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email Format").required("Required!"),
        description: Yup.string().required("Required!"),
        selectOption: Yup.string().required("Required!"),
        checkboxOption: Yup.array().required("Required!"),
        radioOption: Yup.string().required("Required!"),
        birthDate: Yup.date().required("Required!").nullable(),
        password: Yup.string().required("Required!")
        
    })

    const onSubmit = values => {
        console.log(values)
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => 
                    <Form>
                        <FormikControl control='input' type="email" label="Email" name="email" />
                        <FormikControl control='password' label="Password" name="password" />
                        <FormikControl control='textarea' label="Description" name="description" />
                        <FormikControl control='select'  label="Select a topic" name="selectOption" options={dropDownOptions}/>
                        <FormikControl control='radio'  label="Radio topic" name="radioOption" options={radioOptions}/>
                        <FormikControl control='checkbox'  label="Checkbox topic" name="checkboxOption" options={checkboxOptions}/>
                        <FormikControl control='date' label="Pick a date" name="birthDate"/>
                        <button type="submit">Submit</button>
                    </Form>
            }
        </Formik>
    )
}

export default FormikContainer

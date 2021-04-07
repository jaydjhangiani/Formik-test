import {Formik, Form, Field, ErrorMessage, FieldArray, FastField} from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const YoutubeForm = () => {

    const initialValues = {
        name: "",
        email: "",
        channel: "",
        comments: "",
        social: {
            facebook:"",
            twitter:"",
        },
        phoneNumbers: ["",""],
        phNumbers: [""]
    }

    const onSubmit = (values, onSubmitProps) =>{
        console.log(values);
        onSubmitProps.resetForm()
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Required."),
        email: Yup.string().email("Invalid email format.").required("Required."),
        channel: Yup.string().required("Required."),
    })

    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            // validateOnMount
            // validateOnChange={false}
            // validateOnBlur={false}
        >   
            {
                formik => {
                    return(
                        <Form>
                        <div className="form-control">
                            <label htmlFor="name">Name</label>
                            <Field type="text" id="name" name="name" />
                            <ErrorMessage name="name" component={TextError} />
                        </div>
        
                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <Field type="email" id="email" name="email"  />
                            <ErrorMessage name="email">
                                {
                                    (errorMsg) => <div className="error">{errorMsg}</div>
                                }
                            </ErrorMessage>
                        </div>
        
                        <div className="form-control">
                            <label htmlFor="channel">Channel</label>
                            <Field type="text" id="channel" name="channel" /> 
                            <ErrorMessage name="channel" component={TextError} />
                        </div>
        
                        <div className="form-control">
                            <label htmlFor="address">Address</label>
                            <FastField name="address">
                                {
                                    props => {
                                        console.log("Field Render")
                                        const {field,meta} = props
                                        return (
                                            <div>
                                                <input type="text" id="address" {...field} />
                                                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                            </div>
                                        )
                                    }
                                }
                            </FastField>
                        </div>
        
                        <div className="form-control">
                            <label htmlFor="facebook">Facebook</label>
                            <Field type="text" id="facebook" name="social.facebook" />
                        </div>
        
                        <div className="form-control">
                            <label htmlFor="twitter">Twitter</label>
                            <Field type="text" id="twitter" name="social.twitter" />
                        </div>
        
                        <div className="form-control">
                            <label htmlFor="primaryPh">Primary Phone Number</label>
                            <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
                        </div>
        
                        <div className="form-control">
                            <label htmlFor="primaryPh">Secondary Phone Number</label>
                            <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
                        </div>
        
                        <div className="form-control">
                            <label htmlFor="">List of phone numbers</label>
                            <FieldArray name="phNumbers">
                                {
                                    (fieldArrayProps) => {
                                        // console.log(fieldArrayProps)
                                        const {push,remove,form} = fieldArrayProps
                                        const {values} = form
                                        const {phNumbers} = values
                                        console.log('Form Errors',form.errors)
                                        return(
                                            <div>
                                                {
                                                    phNumbers.map((phNumber,index) => (  
                                                        <div key={index}>
                                                            <Field name={`phNumber[${index}]`} />
                                                            <button type="button" onClick={() => remove(index)}> - </button>
                                                            <button type="button" onClick={() => push("")}> + </button>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                }
                            </FieldArray>
                        </div>
                        
                        <button type="submit" disabled={!formik.isValid}>Submit</button>
                    </Form>
                    )
                }
            }

        </Formik>
    )
}

export default YoutubeForm

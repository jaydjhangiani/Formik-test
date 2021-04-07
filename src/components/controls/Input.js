import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

const Input = (props) => {
    const {label, name, meta, ...rest} = props
    console.log(meta)
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest}>
                {
                    prop => {
                        console.log(prop)
                        const {field,meta} = prop
                        return(
                            <div className={meta.touched && meta.error ? `test` : null}>
                                <input type="text" {...field}/>
                            </div>

                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}


export default Input

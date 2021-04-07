import { ErrorMessage, Field } from 'formik'
import React, { useState } from 'react'
import TextError from './TextError'
import {AiFillLock,AiFillUnlock} from 'react-icons/ai'

const Input = (props) => {
    const {label, name, meta, ...rest} = props

    const showPassword = (e) => {
        e.preventDefault();
        setShowPass(!showPass)
    }

    const [showPass, setShowPass] = useState(false)

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
                                <div className="password">
                                <input 
                                    type={showPass ?  "text" : "password" } 
                                    {...field}
                                />
                                <button onClick={showPassword}>
                                    {showPass ? <AiFillUnlock/> : <AiFillLock/> }
                                </button>
                                </div>
                                
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

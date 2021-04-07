import {useFormik} from 'formik';
import * as Yup from 'yup';

const OldForm = () => {

    const initialValues = {
        name: "",
        email: "",
        chanel: "",
    }

    const onSubmit = values =>{
        console.log(values);
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Required."),
        email: Yup.string().email("Invalid email format.").required("Required."),
        channel: Yup.string().required("Required."),
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    })

    // console.log('Form values : ', formik.touched)

    return (
        <div onSubmit={formik.handleSubmit}>
            <form>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
                    {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
                    {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur}/> 
                    {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default OldForm

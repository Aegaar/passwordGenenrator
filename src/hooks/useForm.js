import React, { useState } from 'react'

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues)
  

    return [
        values,
        (event) => {
            setValues({
                ...values,
                [event.target.name]: [event.target.type === 'checkbox' ? event.target.checked : event.target.value]
            })
        }
    ]
}

export default useForm
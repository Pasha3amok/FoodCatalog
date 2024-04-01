import { useState } from 'react';

export default function useForm(getFreshModelObject) {
    const [values, setValues] = useState(getFreshModelObject());
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { email, value } = e.target;
        setValues({
            ...values,
            [email]: value,
        });
    };

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
    };
}

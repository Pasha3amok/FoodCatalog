import React from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../components/validationSchemas';

import Button from '../components/Button';
import Field from '../components/Field';

const defaultValues = {
    userName: '',
    password: '',
};
console.log();

export default function SignUp() {
    const { handleSignUp } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues,
        resolver: yupResolver(signUpSchema),
    });

    return (
        <>
            <div class="module form-module">
                <div class="form">
                    <h2>Create an account</h2>
                    <form
                        className="wrapper"
                        onSubmit={handleSubmit(handleSignUp)}
                    >
                        <input
                            type="text"
                            placeholder="Username"
                            register={register}
                            error={Boolean(errors.userName)}
                            helperText={errors.userName?.message}
                        />
                        <Field type="password" placeholder="Password" />
                        <Button disabled={isSubmitting} type="submit">
                            Register
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}

export { SignUp };

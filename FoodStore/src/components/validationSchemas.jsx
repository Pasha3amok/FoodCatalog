import * as Yup from 'yup';

export const signInSchema = Yup.object({
    body: Yup.object({
        userName: Yup.string()
            .required('Fild is required!')
            .max(25, 'Max length is 25 symbols.'),
        password: Yup.string()
            .required('Fild is required!')
            .min(8, 'Password is too short min length is 8 symbols.')
            .max(50, 'Max length is 50 symbols.'),
    }),
});

export const signUpSchema = Yup.object({
    body: Yup.object({
        userName: Yup.string()
            .required('Fild is required!')
            .max(25, 'Max length is 25 symbols.'),
        password: Yup.string()
            .required('Fild is required!')
            .min(8, 'Password is too short min length is 8 symbols.')
            .max(50, 'Max length is 50 symbols.'),
        role: Yup.number()
            .required('Fild is required!')
            .typeError('It must be a number!')
            .min(1, 'min length is 1 symbols.')
            .max(9, 'Max length is 9 symbols.'),
    }),
});

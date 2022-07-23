import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetAuth, signupUser } from 'redux/actions';
import { useRedux } from 'hooks';
import { UserData } from '../Register';

export default function useRegister() {
    const { t } = useTranslation();
    const { dispatch, appSelector } = useRedux();

    const { loading, userSignUp, error } = appSelector((state) => ({
        loading: state.Auth.loading,
        error: state.Auth.error,
        userSignUp: state.Auth.userSignUp,
    }));

    useEffect(() => {
        dispatch(resetAuth());
    }, [dispatch]);

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            fullname: yup.string().required(t('Please enter your full name')),
            email: yup.string().required('Please enter your email').email('Please enter a valid email address'),
            password: yup.string().required(t('Please enter password')),
        })
    );

    /*
     * handle form submission
     */
    const onSubmit = (formData: UserData) => {
        dispatch(signupUser(formData['fullname'], formData['email'], formData['password']));
    };

    return {
        loading,
        userSignUp,
        error,
        schemaResolver,
        onSubmit,
    };
}

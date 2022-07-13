import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserData } from '../LockScreen';

export default function useLockScreen() {
    const { t } = useTranslation();

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            password: yup.string().required(t('Please enter Password')),
        })
    );

    /*
     * handle form submission
     */
    const onSubmit = (formData: UserData) => {
        console.log(formData);
    };

    return {
        schemaResolver,
        onSubmit,
    };
}

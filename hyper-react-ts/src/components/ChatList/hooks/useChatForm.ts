import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormValues = {
    newMessage: string;
};

export default function useChatForm() {
    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            newMessage: yup.string().required('Please enter your messsage'),
        })
    );

    const methods = useForm<FormValues>({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
        reset,
    } = methods;

    /**
     * Handle valid form submission
     */
    const handleValidMessageSubmit = (value: Record<string, string>, callback: (message: string) => void) => {
        const message = value['newMessage'];
        callback(message);
        reset();
    };

    return {
        register,
        control,
        errors,
        handleSubmit,
        handleValidMessageSubmit,
    };
}

import { useToggle } from 'hooks';

export default function useFormValidation() {
    const [isValidated, , setValidated] = useToggle();

    /*
     * handle form submission
     */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated();
    };

    return {
        isValidated,
        handleSubmit,
    };
}

// @flow
import React from 'react';
import { useForm } from 'react-hook-form';

type VerticalFromProps = {
    defaultValues?: Object,
    resolver?: any,
    children?: any,
    onSubmit?: (value: any) => void,
    formClass?: string,
};

const VerticalForm = ({
    defaultValues,
    resolver,
    children,
    onSubmit,
    formClass,
}: VerticalFromProps): React$Element<any> => {
    /*
     * form methods
     */
    const methods = useForm({ defaultValues, resolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={formClass} noValidate>
            {Array.isArray(children)
                ? children.map((child) => {
                      return child.props && child.props.name
                          ? React.createElement(child.type, {
                                ...{
                                    ...child.props,
                                    register,
                                    key: child.props.name,
                                    errors,
                                    control,
                                },
                            })
                          : child;
                  })
                : children}
        </form>
    );
};

export default VerticalForm;

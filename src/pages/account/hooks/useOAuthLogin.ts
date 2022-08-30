import { useEffect } from 'react';
import { Location, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { resetAuth, oauthLoginUser } from 'redux/actions';
import { useRedux } from 'hooks';

type LocationState = {
    from?: Location;
};

export default function useOAuthLogin() {
    const { t } = useTranslation();
    const { dispatch, appSelector } = useRedux();

    const location: Location = useLocation();
    let redirectUrl: string = '/';

    if (location.state) {
        const { from } = location.state as LocationState;
        redirectUrl = from ? from.pathname : '/';
    }

    useEffect(() => {
        dispatch(resetAuth());
    }, [dispatch]);

    const { loading, userLoggedIn, user, error } = appSelector((state) => ({
        loading: state.Auth.loading,
        user: state.Auth.user,
        error: state.Auth.error,
        userLoggedIn: state.Auth.userLoggedIn,
    }));

    /*
    handle form submission
    */
    const onSubmit = (token: string) => {
        dispatch(oauthLoginUser(token));
    };

    return {
        loading,
        userLoggedIn,
        user,
        error,
        onSubmit,
        redirectUrl,
    };
}

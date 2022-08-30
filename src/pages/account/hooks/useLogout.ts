import { useEffect } from 'react';
import { logoutUser } from 'redux/actions';
import { useRedux } from 'hooks';

export default function useLogout() {
    const { dispatch } = useRedux();

    useEffect(() => {
        dispatch(logoutUser());
    }, [dispatch]);
}

import { readAllWhiteboard } from 'redux/actions';
import { useRedux } from 'hooks';

export default function useReadAllWhiteboard() {
    const { dispatch, appSelector } = useRedux();

    const { loading, whiteboards, error, hasBeenSet } = appSelector((state) => ({
        loading: state.Whiteboard.loading,
        whiteboards: state.Whiteboard.whiteboards,
        error: state.Whiteboard.error,
        hasBeenSet: state.Whiteboard.hasBeenSet,
    }));

    const onDashboardLoad = async () => {
        const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!);
        if(!hasBeenSet) {dispatch(readAllWhiteboard(user.token))} ;
    };

    return {
        loading, whiteboards, error, onDashboardLoad
    }
}
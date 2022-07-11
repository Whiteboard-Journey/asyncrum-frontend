import { useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import { useRedux } from 'hooks';
import { hideRightSidebar } from 'redux/actions';
import { ThemeCustomizer } from 'components';

const RightSideBar = () => {
    const { dispatch, appSelector } = useRedux();

    const rightBarNodeRef = useRef<HTMLDivElement>(null);

    const { showRightSidebar } = appSelector((state) => ({
        showRightSidebar: state.Layout.showRightSidebar,
    }));

    /**
     * Handles the close
     */
    const handleClose = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(hideRightSidebar());
    };

    /**
     * Handle the click anywhere in doc
     */
    const handleOtherClick = useCallback(
        (e) => {
            if (showRightSidebar) {
                if (rightBarNodeRef && rightBarNodeRef.current && rightBarNodeRef.current.contains(e.target)) {
                    return;
                } else {
                    dispatch(hideRightSidebar());
                }
            }
        },
        [rightBarNodeRef, dispatch, showRightSidebar]
    );

    useEffect(() => {
        document.addEventListener('mousedown', handleOtherClick, false);
        return () => {
            document.removeEventListener('mousedown', handleOtherClick, false);
        };
    });

    return (
        <>
            <div className="end-bar" ref={rightBarNodeRef}>
                <div className="rightbar-title">
                    <Link to="#" className="end-bar-toggle float-end" onClick={handleClose}>
                        <i className="dripicons-cross noti-icon"></i>
                    </Link>
                    <h5 className="m-0">Settings</h5>
                </div>

                <SimpleBar style={{ maxHeight: '100%', zIndex: 10000 }} timeout={500} scrollbarMaxSize={320}>
                    <div className="rightbar-content h-100">
                        {' '}
                        <ThemeCustomizer />
                    </div>
                </SimpleBar>
            </div>

            <div className="rightbar-overlay"></div>
        </>
    );
};

export default RightSideBar;

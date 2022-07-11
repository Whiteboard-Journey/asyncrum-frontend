// @flow
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import SimpleBar from 'simplebar-react';

// actions
import { hideRightSidebar } from '../redux/actions';

type RightSideBarProps = {
    hideRightSidebar?: () => void,
    title?: string,
    children?: any,
};

const RightSideBar = (props: RightSideBarProps): React$Element<React$FragmentType> => {
    const dispatch = useDispatch();

    const rightBarNodeRef: any = useRef(null);

    RightSideBar.defaultProps = {
        title: 'Settings',
    };

    const title = props.title;
    const component = props.children || null;

    const { showRightSidebar } = useSelector((state) => ({
        showRightSidebar: state.Layout.showRightSidebar,
    }));

    /**
     * Handles the close
     */
    const handleClose = (e: any) => {
        e.preventDefault();
        dispatch(hideRightSidebar());
    };

    /**
     * Handle the click anywhere in doc
     */
    const handleOtherClick = (e: any) => {
        if (showRightSidebar) {
            if (rightBarNodeRef && rightBarNodeRef.current && rightBarNodeRef.current.contains(e.target)) return;
            // else hide the right sidebar
            else dispatch(hideRightSidebar());
        }
    };

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
                    <h5 className="m-0">{title}</h5>
                </div>

                <SimpleBar style={{ maxHeight: '100%', zIndex: 10000 }} timeout={500} scrollbarMaxSize={320}>
                    <div className="rightbar-content h-100">{component}</div>
                </SimpleBar>
            </div>

            <div className="rightbar-overlay"></div>
        </>
    );
};

export default RightSideBar;

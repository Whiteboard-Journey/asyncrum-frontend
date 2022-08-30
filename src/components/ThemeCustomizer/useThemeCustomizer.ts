import { useState, useEffect, useCallback } from 'react';
import {
    changeLayout,
    changeLayoutColor,
    changeLayoutWidth,
    changeSidebarTheme,
    changeSidebarType,
} from 'redux/actions';
import * as layoutConstants from 'appConstants';
import { useRedux } from 'hooks';

export default function useThemeCustomizer() {
    const { dispatch, appSelector } = useRedux();

    const { layoutColor, layoutType, layoutWidth, leftSideBarType, leftSideBarTheme } = appSelector((state) => ({
        layoutColor: state.Layout.layoutColor,
        layoutType: state.Layout.layoutType,
        layoutWidth: state.Layout.layoutWidth,
        leftSideBarTheme: state.Layout.leftSideBarTheme,
        leftSideBarType: state.Layout.leftSideBarType,
    }));

    const [disableLayoutWidth, setDisableLayoutWidth] = useState<boolean>(false);
    const [disableSidebarTheme, setDisableSidebarTheme] = useState<boolean>(false);
    const [disableSidebarType, setDisableSidebarType] = useState<boolean>(false);

    /**
     * change state based on props changes
     */
    const _loadStateFromProps = useCallback(() => {
        setDisableLayoutWidth(
            layoutType !== layoutConstants.LayoutTypes.LAYOUT_DETACHED &&
                layoutType !== layoutConstants.LayoutTypes.LAYOUT_FULL
        );

        setDisableSidebarTheme(
            layoutType !== layoutConstants.LayoutTypes.LAYOUT_HORIZONTAL &&
                layoutType !== layoutConstants.LayoutTypes.LAYOUT_DETACHED
        );
        setDisableSidebarType(layoutType !== layoutConstants.LayoutTypes.LAYOUT_HORIZONTAL);
    }, [layoutType]);

    useEffect(() => {
        _loadStateFromProps();
    }, [_loadStateFromProps]);

    /**
     * On layout change
     */
    const changeLayoutType = (value: string) => {
        var layout = value;
        switch (layout) {
            case 'topnav':
                dispatch(changeLayout(layoutConstants.LayoutTypes.LAYOUT_HORIZONTAL));
                break;
            case 'detached':
                dispatch(changeLayout(layoutConstants.LayoutTypes.LAYOUT_DETACHED));
                break;
            case 'full':
                dispatch(changeLayout(layoutConstants.LayoutTypes.LAYOUT_FULL));
                break;
            default:
                dispatch(changeLayout(layoutConstants.LayoutTypes.LAYOUT_VERTICAL));
                break;
        }
    };

    /**
     * Change the layout color
     */
    const changeLayoutColorScheme = (value: string) => {
        var mode = value;
        switch (mode) {
            case 'dark':
                dispatch(changeLayoutColor(layoutConstants.LayoutColor.LAYOUT_COLOR_DARK));
                break;
            default:
                dispatch(changeLayoutColor(layoutConstants.LayoutColor.LAYOUT_COLOR_LIGHT));
                break;
        }
    };

    /**
     * Change the width mode
     */
    const changeWidthMode = (value: string) => {
        var mode = value;

        switch (mode) {
            case 'boxed':
                dispatch(changeLayoutWidth(layoutConstants.LayoutWidth.LAYOUT_WIDTH_BOXED));
                break;
            default:
                dispatch(changeLayoutWidth(layoutConstants.LayoutWidth.LAYOUT_WIDTH_FLUID));
                break;
        }
    };

    /**
     * Changes the theme
     */
    const changeLeftSidebarTheme = (value: string) => {
        var theme = value;
        switch (theme) {
            case 'default':
                dispatch(changeSidebarTheme(layoutConstants.SideBarTheme.LEFT_SIDEBAR_THEME_DEFAULT));
                break;
            case 'light':
                dispatch(changeSidebarTheme(layoutConstants.SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT));
                break;
            default:
                dispatch(changeSidebarTheme(layoutConstants.SideBarTheme.LEFT_SIDEBAR_THEME_DARK));
                break;
        }
    };

    /**
     * Change the leftsiderbar type
     */
    const changeLeftSiderbarType = (value: string) => {
        var type = value;
        switch (type) {
            case 'condensed':
                dispatch(changeSidebarType(layoutConstants.SideBarWidth.LEFT_SIDEBAR_TYPE_CONDENSED));
                break;
            case 'scrollable':
                dispatch(changeSidebarType(layoutConstants.SideBarWidth.LEFT_SIDEBAR_TYPE_SCROLLABLE));
                break;
            default:
                dispatch(changeSidebarType(layoutConstants.SideBarWidth.LEFT_SIDEBAR_TYPE_FIXED));
                break;
        }
    };

    /**
     * Reset everything
     */
    const reset = () => {
        changeLayoutType(layoutConstants.LayoutTypes.LAYOUT_VERTICAL);
        changeLayoutColorScheme(layoutConstants.LayoutColor.LAYOUT_COLOR_LIGHT);
        changeWidthMode(layoutConstants.LayoutWidth.LAYOUT_WIDTH_FLUID);
        changeLeftSidebarTheme(layoutConstants.SideBarTheme.LEFT_SIDEBAR_THEME_DEFAULT);
        changeLeftSiderbarType(layoutConstants.SideBarWidth.LEFT_SIDEBAR_TYPE_FIXED);
    };

    return {
        layoutColor,
        layoutType,
        layoutWidth,
        leftSideBarType,
        leftSideBarTheme,
        disableLayoutWidth,
        disableSidebarTheme,
        disableSidebarType,
        changeLayoutType,
        changeLayoutColorScheme,
        changeWidthMode,
        changeLeftSidebarTheme,
        changeLeftSiderbarType,
        reset,
    };
}

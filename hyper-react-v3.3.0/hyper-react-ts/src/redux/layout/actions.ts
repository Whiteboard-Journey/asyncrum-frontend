import { LayoutActionTypes } from './constants';

export type LayoutActionType<TPayload> = {
    type:
        | LayoutActionTypes.CHANGE_LAYOUT
        | LayoutActionTypes.CHANGE_LAYOUT_COLOR
        | LayoutActionTypes.CHANGE_LAYOUT_WIDTH
        | LayoutActionTypes.CHANGE_SIDEBAR_THEME
        | LayoutActionTypes.CHANGE_SIDEBAR_TYPE
        | LayoutActionTypes.SHOW_RIGHT_SIDEBAR
        | LayoutActionTypes.HIDE_RIGHT_SIDEBAR;
    payload?: TPayload;
};

export const changeLayout = (layout: string): LayoutActionType<string> => ({
    type: LayoutActionTypes.CHANGE_LAYOUT,
    payload: layout,
});

export const changeLayoutColor = (color: string): LayoutActionType<string> => ({
    type: LayoutActionTypes.CHANGE_LAYOUT_COLOR,
    payload: color,
});

export const changeLayoutWidth = (width: string): LayoutActionType<string> => ({
    type: LayoutActionTypes.CHANGE_LAYOUT_WIDTH,
    payload: width,
});

export const changeSidebarTheme = (sidebarTheme: string): LayoutActionType<string> => ({
    type: LayoutActionTypes.CHANGE_SIDEBAR_THEME,
    payload: sidebarTheme,
});

export const changeSidebarType = (sidebarType: string): LayoutActionType<string> => ({
    type: LayoutActionTypes.CHANGE_SIDEBAR_TYPE,
    payload: sidebarType,
});

export const showRightSidebar = (): LayoutActionType<null> => ({
    type: LayoutActionTypes.SHOW_RIGHT_SIDEBAR,
});

export const hideRightSidebar = (): LayoutActionType<null> => ({
    type: LayoutActionTypes.HIDE_RIGHT_SIDEBAR,
});

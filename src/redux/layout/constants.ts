import { LayoutTypes, LayoutColor, LayoutWidth, SideBarTheme, SideBarWidth } from 'appConstants';

enum LayoutActionTypes {
    CHANGE_LAYOUT = '@@layout/CHANGE_LAYOUT',
    CHANGE_LAYOUT_COLOR = '@@layout/CHANGE_LAYOUT_COLOR',
    CHANGE_LAYOUT_WIDTH = '@@layout/CHANGE_LAYOUT_WIDTH',
    CHANGE_SIDEBAR_THEME = '@@layout/CHANGE_SIDEBAR_THEME',
    CHANGE_SIDEBAR_TYPE = '@@layout/CHANGE_SIDEBAR_TYPE',
    SHOW_RIGHT_SIDEBAR = '@@layout/SHOW_RIGHT_SIDEBAR',
    HIDE_RIGHT_SIDEBAR = '@@layout/HIDE_RIGHT_SIDEBAR',
}

export type LayoutStateType = {
    layoutColor: LayoutColor.LAYOUT_COLOR_LIGHT | LayoutColor.LAYOUT_COLOR_DARK;
    layoutType:
        | LayoutTypes.LAYOUT_VERTICAL
        | LayoutTypes.LAYOUT_HORIZONTAL
        | LayoutTypes.LAYOUT_DETACHED
        | LayoutTypes.LAYOUT_FULL;
    layoutWidth: LayoutWidth.LAYOUT_WIDTH_FLUID | LayoutWidth.LAYOUT_WIDTH_BOXED;
    leftSideBarTheme:
        | SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT
        | SideBarTheme.LEFT_SIDEBAR_THEME_DARK
        | SideBarTheme.LEFT_SIDEBAR_THEME_DEFAULT;
    leftSideBarType:
        | SideBarWidth.LEFT_SIDEBAR_TYPE_FIXED
        | SideBarWidth.LEFT_SIDEBAR_TYPE_CONDENSED
        | SideBarWidth.LEFT_SIDEBAR_TYPE_SCROLLABLE;
    showRightSidebar: boolean;
};

export { LayoutActionTypes };

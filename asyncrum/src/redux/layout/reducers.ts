import { LayoutTypes, LayoutColor, LayoutWidth, SideBarTheme, SideBarWidth } from 'appConstants';
import { getLayoutConfigs } from 'utils';
import { LayoutActionType } from './actions';
import { LayoutActionTypes, LayoutStateType } from './constants';

const INIT_STATE: LayoutStateType = {
    layoutColor: LayoutColor.LAYOUT_COLOR_LIGHT,
    layoutType: LayoutTypes.LAYOUT_VERTICAL,
    layoutWidth: LayoutWidth.LAYOUT_WIDTH_FLUID,
    leftSideBarTheme: SideBarTheme.LEFT_SIDEBAR_THEME_DARK,
    leftSideBarType: SideBarWidth.LEFT_SIDEBAR_TYPE_FIXED,
    showRightSidebar: false,
};

const Layout = (state: LayoutStateType = INIT_STATE, action: LayoutActionType<string | boolean | null>) => {
    switch (action.type) {
        case LayoutActionTypes.CHANGE_LAYOUT:
            return {
                ...state,
                layoutType: action.payload,
            };
        case LayoutActionTypes.CHANGE_LAYOUT_COLOR:
            return {
                ...state,
                layoutColor: action.payload,
            };
        case LayoutActionTypes.CHANGE_LAYOUT_WIDTH:
            return {
                ...state,
                layoutWidth: action.payload,
                ...getLayoutConfigs(action.type, action.payload!),
            };
        case LayoutActionTypes.CHANGE_SIDEBAR_THEME:
            return {
                ...state,
                leftSideBarTheme: action.payload,
            };
        case LayoutActionTypes.CHANGE_SIDEBAR_TYPE:
            return {
                ...state,
                leftSideBarType: action.payload,
            };
        case LayoutActionTypes.SHOW_RIGHT_SIDEBAR:
            return {
                ...state,
                showRightSidebar: true,
            };
        case LayoutActionTypes.HIDE_RIGHT_SIDEBAR:
            return {
                ...state,
                showRightSidebar: false,
            };
        default:
            return state;
    }
};

export default Layout;

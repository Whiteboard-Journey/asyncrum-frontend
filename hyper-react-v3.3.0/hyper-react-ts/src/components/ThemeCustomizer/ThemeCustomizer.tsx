import * as layoutConstants from 'appConstants';
import LayoutTypes from './LayoutTypes';
import LayoutColor from './LayoutColor';
import LayoutWidth from './LayoutWidth';
import LeftSideBarTheme from './LeftSideBarTheme';
import LeftSideBarType from './LeftSideBarType';
import useThemeCustomizer from './useThemeCustomizer';

const ThemeCustomizer = () => {
    const {
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
    } = useThemeCustomizer();

    return (
        <div className="p-3">
            <div className="alert alert-warning" role="alert">
                <strong>Customize </strong> the overall color scheme, sidebar menu, etc.
            </div>

            {/* Layouts */}
            <LayoutTypes
                changeLayoutType={changeLayoutType}
                layoutType={layoutType}
                layoutConstants={layoutConstants.LayoutTypes}
            />

            {/* color scheme */}
            <LayoutColor
                changeLayoutColorScheme={changeLayoutColorScheme}
                layoutColor={layoutColor}
                layoutConstants={layoutConstants.LayoutColor}
            />

            {/* Width */}
            {disableLayoutWidth && (
                <LayoutWidth
                    changeWidthMode={changeWidthMode}
                    layoutWidth={layoutWidth}
                    layoutConstants={layoutConstants.LayoutWidth}
                />
            )}

            {/* Left Sidebar */}
            {disableSidebarTheme && (
                <LeftSideBarTheme
                    changeLeftSidebarTheme={changeLeftSidebarTheme}
                    leftSideBarTheme={leftSideBarTheme}
                    layoutConstants={layoutConstants.SideBarTheme}
                />
            )}

            {/* Left Sidebar Size */}
            {disableSidebarType && (
                <LeftSideBarType
                    changeLeftSiderbarType={changeLeftSiderbarType}
                    leftSideBarType={leftSideBarType}
                    layoutConstants={layoutConstants.SideBarWidth}
                />
            )}

            <div className="d-grid mt-4">
                <button className="btn btn-primary" id="resetBtn" onClick={() => reset()}>
                    Reset to Default
                </button>
            </div>
        </div>
    );
};

export default ThemeCustomizer;

import { MENU_ITEMS, MenuItemType } from 'appConstants';

const getMenuItems = () => {
    // NOTE - You can fetch from server and return here as well
    return MENU_ITEMS;
};

const findAllParent = (menuItems: MenuItemType[], menuItem: MenuItemType): string[] => {
    let parents: string[] = [];
    const parent = findMenuItem(menuItems, menuItem['parentKey']);

    if (parent) {
        parents.push(parent['key']);
        if (parent['parentKey']) parents = [...parents, ...findAllParent(menuItems, parent)];
    }

    return parents;
};

const findMenuItem = (
    menuItems: MenuItemType[] | undefined,
    menuItemKey: MenuItemType['key'] | undefined
): MenuItemType | null => {
    if (menuItems && menuItemKey) {
        for (var i = 0; i < menuItems.length; i++) {
            if (menuItems[i].key === menuItemKey) {
                return menuItems[i];
            }
            var found = findMenuItem(menuItems[i].children, menuItemKey);
            if (found) return found;
        }
    }
    return null;
};

export { getMenuItems, findAllParent, findMenuItem };

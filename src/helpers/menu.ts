import { MENU_ITEMS, MenuItemType } from 'appConstants';
const getMenuItems = (teams: any) => {
  const menu: MenuItemType[] =
    teams && teams.length > 0
      ? [
          ...MENU_ITEMS,
          {
            key: 'teams',
            label: 'Teams',
            icon: 'mdi mdi-account-group-outline',
            isTitle: false,
            children:
              teams.length > 0
                ? teams.map((team: any) => {
                    const teamObject = {
                      key: team.code,
                      label: team.name,
                      isTitle: false,
                      parentKey: 'teams',
                      teamId: team.id,
                      url: '/',
                    };
                    return teamObject;
                  })
                : [],
          },
        ]
      : MENU_ITEMS;
  return menu;
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
    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].key === menuItemKey) {
        return menuItems[i];
      }
      const found = findMenuItem(menuItems[i].children, menuItemKey);
      if (found) return found;
    }
  }
  return null;
};

export { getMenuItems, findAllParent, findMenuItem };

import { MENU_ITEMS, MenuItemType } from 'appConstants';
import { Team } from 'pages/settings/types';
const getMenuItems = (teams: Team[]) => {
  const menu: MenuItemType[] = [
    ...MENU_ITEMS,
    { 
      key: 'teams', 
      label: 'Teams', 
      isTitle: false,
      children: teams.map((team: Team) => {
        return {
          key: team.code,
          label: team.name,
          isTitle: false,
          parentKey: 'teams'
        }
      })
    },
  ];
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

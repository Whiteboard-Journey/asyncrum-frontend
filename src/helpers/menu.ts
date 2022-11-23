import { MENU_ITEMS, MenuItemType } from 'appConstants';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const getMenuItems = (teams: any, currentTeam: any) => {
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
                      url: '#',
                    };
                    return teamObject;
                  })
                : [],
          },
          {
            key: 'members',
            label: 'Members',
            icon: 'mdi mdi-account-multiple',
            isTitle: false,
            url: '',
          },
          ...currentTeam.members.map((member: any) => {
            const memberObject = {
              key: member.fullname,
              get label(): string {
                return `${this.time.format('hh:mm A')} ${this.key}`;
              },
              isTitle: false,
              parentKey: 'members',
              url: '',
              time: dayjs(new Date()).tz(member.timeZone),
            };
            return memberObject;
          }),
          {
            key: 'settings',
            label: 'Settings',
            isTitle: false,
            icon: 'mdi mdi-cog-outline',
            url: '/settings/user',
          },
          {
            key: 'logout',
            label: 'Logout',
            isTitle: false,
            icon: 'mdi mdi-logout',
            url: '/account/logout',
          },
        ]
      : [
          ...MENU_ITEMS,
          {
            key: 'settings',
            label: 'Settings',
            isTitle: false,
            icon: 'mdi mdi-cog-outline',
            url: '/settings/user',
          },
          {
            key: 'logout',
            label: 'Logout',
            isTitle: false,
            icon: 'mdi mdi-logout',
            url: '/account/logout',
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

export type MenuItemType = {
  key: string;
  label: string;
  isTitle?: boolean;
  icon?: string;
  url?: string;
  badge?: {
    variant: string;
    text: string;
  };
  parentKey?: string;
  target?: string;
  children?: MenuItemType[];
  teamId?: number;
};

const MENU_ITEMS: MenuItemType[] = [
  // { key: 'docs', label: 'Documents', isTitle: true },
  // {
  //   key: 'docs-recent',
  //   label: 'Recent',
  //   isTitle: false,
  //   icon: 'uil-clock-three',
  //   url: '/docs/recent',
  // },
  // {
  //   key: 'docs-starred',
  //   label: 'Starred',
  //   isTitle: false,
  //   icon: 'uil-star',
  //   url: '/docs/starred',
  // },
  {
    key: 'docs-dashboard',
    label: 'Dashboard',
    isTitle: false,
    icon: 'mdi mdi-bulletin-board',
    url: '/dashboard',
  },
  // { key: 'meetings', label: 'Meetings', isTitle: true },
  // {
  //   key: 'meetings-meeting',
  //   label: 'Meeting',
  //   isTitle: false,
  //   icon: 'mdi mdi-account-group-outline',
  //   url: '/meeting',
  // },
];

export { MENU_ITEMS };

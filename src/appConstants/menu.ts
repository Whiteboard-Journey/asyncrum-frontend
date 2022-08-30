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
};

const MENU_ITEMS: MenuItemType[] = [
  { key: 'docs', label: 'Documents', isTitle: true },
  {
    key: 'docs-recent',
    label: 'Recent',
    isTitle: false,
    icon: 'uil-clock-three',
    url: '/docs/recent',
  },
  {
    key: 'docs-starred',
    label: 'Starred',
    isTitle: false,
    icon: 'uil-star',
    url: '/docs/starred',
  },
  {
    key: 'docs-dashboard',
    label: 'Dashboard',
    isTitle: false,
    icon: 'mdi mdi-bulletin-board',
    url: '/dashboard',
  },
  { key: 'meetings', label: 'Meetings', isTitle: true },
  {
    key: 'meetings-meeting',
    label: 'Meeting 1',
    isTitle: false,
    icon: 'mdi mdi-account-group-outline',
    url: '/docs/whiteboards',
  },
  { key: 'teams', label: 'Teams', isTitle: true },
  {
    key: 'teams-team1',
    label: 'Whiteboard Journey',
    isTitle: false,
  },
  {
    key: 'teams-team2',
    label: 'Another Team',
    isTitle: false,
    url: '/teams/team2',
  },
];

export { MENU_ITEMS };

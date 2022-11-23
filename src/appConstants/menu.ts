import { Dayjs } from 'dayjs';

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
  time?: Dayjs;
};

const MENU_ITEMS: MenuItemType[] = [
  {
    key: 'docs-dashboard',
    label: 'Dashboard',
    isTitle: false,
    icon: 'mdi mdi-bulletin-board',
    url: '/dashboard',
  },
];

export { MENU_ITEMS };

import { MenuItemType } from 'appConstants';

export type SubMenus = {
    item: MenuItemType;
    linkClassName?: string;
    subMenuClassNames?: string;
    activeMenuItems?: Array<string>;
    toggleMenu?: (item: MenuItemType, status: boolean) => void;
    className?: string;
};

import { MenuItemType } from 'appConstants';

export type MenuItems = {
    item: MenuItemType;
    tag?: React.ElementType;
    linkClassName?: string;
    className?: string;
    subMenuClassNames?: string;
    activeMenuItems?: string[];
    toggleMenu?: (item: MenuItemType, status: boolean) => void;
};

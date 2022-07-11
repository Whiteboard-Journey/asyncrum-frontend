export type QuickAccessItem = {
    icon: string;
    name: string;
    size: string;
};
type Member = {
    image: string;
    name: string;
};
export type RecentFileItem = {
    name: string;
    modifiedDate: string;
    modifiedBy: string;
    size: string;
    owner: string;
    members: Member[];
};

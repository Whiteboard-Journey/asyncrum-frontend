export type TableRecord = {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
};

export type Employee = {
    id: number;
    age: number;
    name: string;
    company: string;
    phone: string;
    subRows?: Employee[];
};

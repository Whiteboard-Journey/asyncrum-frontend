export type AssignTo = {
    avatar: string;
};

export type Project = {
    icon: string;
    variant: string;
    title: string;
    subTitle: string;
    hours: number;
    task: number;
    assignTo: Array<AssignTo>;
};

export type Client = {
    avatar: string;
    name: string;
    companyName: string;
    date: string;
};

export type MonthlyProgressItem = {
    avatar: string;
    name: string;
    emailId: string;
    projectName: string;
    status: string;
};

export type Task = {
    icon: string;
    variant: string;
    title: string;
    totalTask?: number;
    completedTask?: number;
    progressValue?: number;
};

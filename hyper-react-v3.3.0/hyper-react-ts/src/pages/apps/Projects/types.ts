export type Project = {
    id: number;
    title: string;
    state: string;
    shortDesc?: string;
    totalTasks: number;
    totalComments: number;
    totalMembers: number;
    progress: number;
    image?: string;
    startDate?: string;
    startTime?: string;
    endDate?: string;
    endTime?: string;
    totalBudget?: string;
};

export type TeamMember = {
    value: string;
    name: string;
    image: string;
};

export type GanttProjectItem = {
    id: string;
    name: string;
    status: string;
    icon: string;
};

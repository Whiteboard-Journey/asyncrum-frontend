type CheckListItem = {
    id: number;
    title: string;
    completed: boolean;
};

type Comment = {
    id: number;
    author: string;
    text: string;
    posted_on: string;
    author_avatar: string;
    replies?: Comment[];
};

type AttachmentItem = {
    id: number;
    filename: string;
    size: string;
};

export type ListTaskItem = {
    id: number;
    title: string;
    assignee_avatar: string;
    assigned_to: string;
    due_date: string;
    description: string;
    checklists: CheckListItem[];
    attachments: AttachmentItem[];
    comments: Comment[];
    completed: boolean;
    stage: string;
    subtasks?: string;
    priority: string;
};

export type KanbanTaskItem = {
    id: number;
    title: string;
    status: string;
    priority: string;
    userAvatar: string;
    project: string;
    totalComments: number;
    totalSubTasks: number;
    user: string;
    dueDate: string;
};

export interface Task {
    id: number;
    title: string;
    description: string;
    taskCreated: Date;
    deadline: Date;
    tags: string;
    status: string;
}

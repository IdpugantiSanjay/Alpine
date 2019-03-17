export interface Task {
  id: string;
  title: string;
  description: string;
  taskCreated: Date;
  deadline: Date;
  tags: string;
  status: string;
}

import { TodoCategoryType } from './TodoCategoryType';

export type TodoItemType = {
  id: string;
  categoryId: string;
  deadline: Date;
  text: string;
  isDone: boolean;
};
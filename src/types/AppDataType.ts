import { TodoCategoryType } from './TodoCategoryType';
import { TodoItemType } from './TodoItemType';

export type AppDataType = {
  categories: TodoCategoryType[];
  todos: TodoItemType[];
};

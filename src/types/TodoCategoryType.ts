import { TodoItemType } from "./TodoItemType";

export interface TodoCategoryType {
  id: string;
  name: string;
  isAllDone: boolean;
  todos: TodoItemType[];
}

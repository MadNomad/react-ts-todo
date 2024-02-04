export type TodoCategoryType = {
  id: string;
  name: string;
  isAllDone: boolean;
};

export enum isAllDone {
  Done = 'Assignment',
  Pending = 'AssignmentTurnedIn',
}

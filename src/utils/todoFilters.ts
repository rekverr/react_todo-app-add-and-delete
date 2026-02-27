import { Todo } from '../types/Todo';

export type FilterType = 'All' | 'Active' | 'Completed';

export const filterTodos = (
  todos: Todo[],
  filter: FilterType,
  tempTodo: Todo | null = null,
): Todo[] => {
  const filtered = (() => {
    switch (filter) {
      case 'Active':
        return todos.filter(todo => !todo.completed);
      case 'Completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  })();

  return tempTodo ? [...filtered, tempTodo] : filtered;
};

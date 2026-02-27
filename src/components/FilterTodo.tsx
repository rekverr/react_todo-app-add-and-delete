import { Todo } from '../types/Todo';

type Props = {
  todos: Todo[];
  filter: 'All' | 'Active' | 'Completed';
  setFilter: (filter: 'All' | 'Active' | 'Completed') => void;
  handleClearCompleted: () => void;
};

export const FilterTodo = ({
  todos,
  filter,
  setFilter,
  handleClearCompleted,
}: Props) => {
  return (
    <>
      {todos.length > 0 && (
        <footer className="todoapp__footer" data-cy="Footer">
          <span className="todo-count" data-cy="TodosCounter">
            {todos.filter(todo => !todo.completed).length} items left
          </span>

          {/* Active link should have the 'selected' class */}
          <nav className="filter" data-cy="Filter">
            <a
              href="#/"
              className={`filter__link ${filter === 'All' ? 'selected' : ''}`}
              data-cy="FilterLinkAll"
              onClick={() => setFilter('All')}
            >
              All
            </a>

            <a
              href="#/active"
              className={`filter__link ${filter === 'Active' ? 'selected' : ''}`}
              data-cy="FilterLinkActive"
              onClick={() => setFilter('Active')}
            >
              Active
            </a>

            <a
              href="#/completed"
              className={`filter__link ${filter === 'Completed' ? 'selected' : ''}`}
              data-cy="FilterLinkCompleted"
              onClick={() => setFilter('Completed')}
            >
              Completed
            </a>
          </nav>

          {/* this button should be disabled if there are no completed todos */}
          <button
            type="button"
            className="todoapp__clear-completed"
            data-cy="ClearCompletedButton"
            disabled={!todos.some(todo => todo.completed)}
            onClick={handleClearCompleted}
          >
            Clear completed
          </button>
        </footer>
      )}
    </>
  );
};

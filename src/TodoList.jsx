import { TodoListItem } from "./TodoListItem"
export function TodoList({ todos, toggleTodo, deleteTodo }) {
    console.log(todos);
    return (
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return (
                    <TodoListItem 
                    id={todo.id}
                    completed={todo.completed}
                    title={todo.title}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    />    
                )
            })}
        </ul>
    )
}
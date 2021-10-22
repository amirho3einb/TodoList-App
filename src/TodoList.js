import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onComplete, onDelete, onUpdateTodo }) => {
    const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });
    console.log(edit);

    const editTodo = (newValue) => {
        console.log(newValue);
        onUpdateTodo(edit.id, newValue);
        console.log(edit);
        setEdit({ id: null, text: "" });
        console.log(edit);
    };

    const renderTodos = () => {
        if(todos.length === 0) return <p>add some todos</p>
        return todos.map(todo => {
            return <Todo
                key={todo.id} 
                todo={todo} 
                onComplete = {(id) => onComplete(todo.id)} 
                onDelete = {(id) => onDelete(todo.id)}
                onEdit = {(id) => setEdit(todo)}
            />
        });
    };
    
    return (
        <div>
            {edit.id ? <TodoForm submitTodo={editTodo} edit={edit}/> : renderTodos()}
        </div>
    );
}
 
export default TodoList;
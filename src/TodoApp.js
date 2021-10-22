import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const addTodoHandler = (input) => {
        // console.log(input);
        const newTodo = {id: Math.floor(Math.random() * 1000), text: input, isCompleted: false,};
        setTodos( [...todos, newTodo] )
    }
    const completeTodo = (id) => {
        const index = todos.findIndex((item) => item.id === id);
        const selectedTodo = { ...todos[index] };
        selectedTodo.isCompleted = !selectedTodo.isCompleted;
        const upatedTodos = [...todos];
        upatedTodos[index] = selectedTodo;
        setTodos(upatedTodos);
    }
    return ( 
        <div className="container">
            <TodoForm addTodoHandler={addTodoHandler}/>
            <TodoList todos={todos} onComplete={completeTodo}/>
        </div>
    );
}
 
export default TodoApp;
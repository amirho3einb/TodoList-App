import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const[filterdTodos, setFilterdTodos] = useState([]);
    const [selectedOption, setsSelectedOption] = useState("ALL");
    useEffect(() => {
        filterTodos(selectedOption.value);
    }, [todos, selectedOption] )
    const addTodo = (input) => {
        // console.log(input);
        const newTodo = {id: Math.floor(Math.random() * 1000), text: input, isCompleted: false,};
        setTodos( [...todos, newTodo] )
    };

    const completeTodo = (id) => {
        const index = todos.findIndex((item) => item.id === id);
        const selectedTodo = { ...todos[index] };
        selectedTodo.isCompleted = !selectedTodo.isCompleted;
        const upatedTodos = [...todos];
        upatedTodos[index] = selectedTodo;
        setTodos(upatedTodos);
    };

    const removeTodo = (id) => {
        const filteredTodos = todos.filter((item) => item.id !== id);
        setTodos(filteredTodos);
    };

    const updateTodo = (id, newValue) => {
        console.log(id);
        const index = todos.findIndex((item) => item.id === id);
        const selectedTodo = { ...todos[index] };
        selectedTodo.text = newValue;
        const upatedTodos = [...todos];
        upatedTodos[index] = selectedTodo;
        setTodos(upatedTodos);
    };

    const filterTodos = (status) => {
        console.log(status);
        switch (status){
            case "Completed" : 
                setFilterdTodos(todos.filter((todo)=> todo.isCompleted));
                break;
            case "Uncompleted" : 
                setFilterdTodos(todos.filter((todo)=> !todo.isCompleted));
                break;
            default:
                setFilterdTodos(todos);

        }
    }
    return ( 
        <div className="container">
            <NavBar 
                todos={todos} 
                filterTodos={filterTodos}
                selectedOption = {selectedOption}
                setsSelectedOption= {setsSelectedOption}
            />
            <TodoForm submitTodo={addTodo}/>
            <TodoList 
                todos={filterdTodos} 
                onComplete={completeTodo} 
                onDelete={removeTodo}
                onUpdateTodo = {updateTodo}
            />
        </div>
    );
}
 
export default TodoApp;
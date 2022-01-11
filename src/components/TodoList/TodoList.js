import { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = ({ todos, onComplete, onDelete, onUpdateTodo, addTodo, openAddForm, setOpenAddForm,openNewTaskBtn }) => {

    const [edit, setEdit] = useState({id:null, Text: "", isCompleted :false})

    const editTodo = (newValue) => {
        onUpdateTodo(edit.id,newValue)
        setEdit({ id: null, text:"" })
    }
    
    const renderTodos = () => {
        // if (todos.length === 0) return <p>add some todos</p>;
        if(openAddForm){
            return(<TodoForm submitTodo={addTodo} setOpenAddForm={setOpenAddForm}/>)
        }
        else{
            return(
                <div>
                    <div>
                        {
                            todos.map((todo) => {
                                return(
                                    <Todo 
                                    key={todo.id} 
                                    todo={todo} 
                                    onComplete={() => onComplete(todo.id)} 
                                    onDelete={() => onDelete(todo.id)}
                                    onEdit={() => setEdit(todo)}
                                    />
                                )
                            })
                        }
                    </div>
                    <div><button onClick={openNewTaskBtn}>Add New Task</button></div>
                </div>
            )
        }
    }

    return (
         <div>
           {edit.id ? <TodoForm submitTodo={editTodo} edit={edit} setOpenAddForm={setOpenAddForm}/> : renderTodos()}
         </div>
    )
}
 export default TodoList;
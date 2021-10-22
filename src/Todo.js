const Todo = ({todo, onComplete}) => {
    return ( 
        <div className="todo" key={todo.id}>
            <div className={todo.isCompleted ? "completed" : ""}>{todo.text}</div>
            <div>
                <button>Edit</button>
                <button onClick={onComplete}>Complete</button>
            </div>
        </div>
    );
}
 
export default Todo;
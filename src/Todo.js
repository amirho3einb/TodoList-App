const Todo = ({todo, onComplete, onDelete, onEdit}) => {
    return ( 
        <div className="todo" key={todo.id}>
            <div onClick={onComplete} className={`todoText ${todo.isCompleted ? "completed" : ""}`}>{todo.text}</div>
            <div>
                <button className="button" onClick={onEdit}>Edit</button>
                <button className="button remove" onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
}
 
export default Todo;
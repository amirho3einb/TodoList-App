

const NavBar = ({todos, filterTodos, status, setStatus}) => {
    const filterdTodos = todos.filter((todo)=>todo.isCompleted !== true);
    const unCompletedTodos = filterdTodos.length;
    
    const changeHandler = (e) => {
        setStatus(e.target.value);
        filterTodos(e.target.value);
    }
    if(!unCompletedTodos) return <h2 className="counter">set your today todos !</h2>
    return (
        <header>
            <h2 className="counter">{unCompletedTodos} are not completed</h2>
            <select onChange={changeHandler} value={status}>
                <option value="ALL">ALL</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>
        </header>
    );
}
 
export default NavBar;
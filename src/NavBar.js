const NavBar = ({todos}) => {
    const filterTodos = todos.filter((todo)=>todo.isCompleted !== true);
    const numberOfFilterdTodos = filterTodos.length;
    console.log(numberOfFilterdTodos);
    return ( 
        <header>
            {
                numberOfFilterdTodos ? (
                    <>
                        <h2 className="counter">{numberOfFilterdTodos} are not completed</h2>
                    </>
                ) : (
                    <h2 className="counter">set your today todos !</h2>
                )
            }
        </header>
    );
}
 
export default NavBar;
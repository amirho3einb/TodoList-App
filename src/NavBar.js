import Select from 'react-select';

const NavBar = ({todos, filterTodos, setsSelectedOption, selectedOption}) => {
    const filterdTodos = todos.filter((todo)=>todo.isCompleted !== true);
    const unCompletedTodos = filterdTodos.length;
    const options = [
        { value: 'ALL', label: 'ALL' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Uncompleted', label: 'Uncompleted' },
    ];
    const changeHandler = (e) => {
        setsSelectedOption(e);
        filterTodos(e.value);
    }
    if(!unCompletedTodos) return <header><h2 className="nothing">set your today todos !</h2></header> 
    return (
        <header>
            <h2 className="counter"><span className="numberCounter">{unCompletedTodos}</span> are not completed</h2>
            <Select onChange={changeHandler} value={selectedOption} options={options} className="select"/>
            {/* <select onChange={changeHandler} value={selectedOption}>
                <option value="ALL">ALL</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select> */}
        </header>
    );
}
 
export default NavBar;
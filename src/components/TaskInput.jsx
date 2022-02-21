import '../styles/TaskInput.css'

const TaskInput = ({inputValue, setInputValue, tasks, setTasks}) => {

    const createTaskObjectOnKeyPress = (value) => {
        if(value.key === 'Enter'){
            setTasks([...tasks, {text: inputValue, completed: false, id: Math.random()*1000}])
            setInputValue("")
        }
    }

    const storeAndSetInputValue = (inputVal) => {
        setInputValue(inputVal.target.value)
    }

    return <div className="input-container">
        <input type="text" className="task-input" onChange={storeAndSetInputValue} onKeyPress={createTaskObjectOnKeyPress} value={inputValue}/>
        <p className="task-count">No tasks, add a task</p>
    </div>
}

export default TaskInput
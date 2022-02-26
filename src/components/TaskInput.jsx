import '../styles/TaskInput.css';
import { useState } from 'react';

const TaskInput = ({tasks, setTasks }) => {
    const [inputValue, setInputValue] = useState("")


	const createTaskObjectOnKeyPress = (value) => {
		if (value.key === 'Enter') {
			if (value.target.value === '') {
				return null;
			} else {
				setTasks([
					...tasks,
					{ label: inputValue, done: false, key: Math.random() * 1000, id: Math.random() * 1000 }
				]);

				setInputValue('');
			}
		}
	};

	const storeAndSetInputValue = (inputVal) => {
		setInputValue(inputVal.target.value);
	};

	return (
		<div className="input-container">
			<input
				type="text"
				className="task-input"
				onChange={storeAndSetInputValue}
				onKeyPress={createTaskObjectOnKeyPress}
				value={inputValue}
				autoFocus
				placeholder="What needs to be done?"
			/>
			<p className="task-count">{tasks.length === 0 ? 'No tasks, add a task' : `${tasks.length} item(s) left`}</p>
		</div>
	);
};

export default TaskInput;

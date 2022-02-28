import { useEffect, useState } from 'react';
import './styles/App.css';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

// Components
import Clock from './components/Clock';
import TaskInput from './components/TaskInput';
import Task from './components/Task';
import { getToDoList, updateToDoList } from './Api';

function App() {
	const [ tasks, setTasks ] = useState([]);
	const [ hasLoaded, setHasLoaded ] = useState(false);


	useEffect(() => {
		if (!hasLoaded) {
			setHasLoaded(true);

			// only get the list once
			getToDoList(tasks, setTasks)
		}

		updateToDoList(tasks)
	}, [hasLoaded, tasks]);

	return (
		<>
			<Clock />
			<main className="main-content">
				<h1 className="app-name">To-Do App</h1>
				<TaskInput setTasks={setTasks} tasks={tasks} />
				<SimpleBar className="tasks" autoHide={false}>
					{//  Loop thru tasks array [] which contains objects
					tasks.map(({ key, id, label, done }) => (
						<>
							<Task key={key} id={id} label={label} done={done} setTasks={setTasks} tasks={tasks} />
						</>
					))}
				</SimpleBar>
			</main>
		</>
	);
}

export default App;

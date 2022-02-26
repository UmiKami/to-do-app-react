import { useEffect, useState } from 'react';
import './styles/App.css';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

// Components
import Clock from './components/Clock';
import TaskInput from './components/TaskInput';
import Task from './components/Task';

function App() {
	const [ tasks, setTasks ] = useState([]);
	const [ hasLoaded, setHasLoaded ] = useState(false);

	let counter = 0;

	useEffect(() => {
		if (!hasLoaded) {
			setHasLoaded(true);

			fetch('https://assets.breatheco.de/apis/fake/todos/user/umikami', {
				method: 'GET',
				headers: {}
			})
				.then((response) => {
					return response.json();
				})
				.then((result) => {
					counter++;
					console.log(counter);
					if (JSON.stringify(result) !== JSON.stringify(tasks)) {
						setTasks(result);
					}
				})
				.catch((err) => {
					console.error(err);
				});
		}

		fetch('https://assets.breatheco.de/apis/fake/todos/user/umikami', {
			method: 'PUT',

			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(tasks)
		})
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				console.log(result);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [hasLoaded, tasks, counter]);

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

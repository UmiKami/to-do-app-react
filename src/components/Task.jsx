import '../styles/Task.css';

const Task = ({ id, label, done, tasks, setTasks }) => {
	const deleteCurrentTask = () => {
		let newTaskList = tasks.filter((task) => task.id !== id);
		setTasks(newTaskList);
	};

	return <>
	<section className="task-container" key={id}>
			<p className="task-text-content">{label}</p>
			<div className="buttons">
				<div className="calendar-btn">
					<i className="fa-solid fa-calendar-days" />
				</div>
				<div className="close-btn" onClick={deleteCurrentTask}>
					<i className="fa-solid fa-rectangle-xmark" />
				</div>
			</div>
		</section>
	
	</>
};

export default Task;

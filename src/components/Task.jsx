import '../styles/Task.css';
// import DateTimePicker from './DateTimePicker'

const Task = ({ key, id, text, completed, tasks, setTasks }) => {
	const deleteCurrentTask = () => {
		let newTaskList = tasks.filter((task) => task.id !== id);
		setTasks(newTaskList);
	};

    // const renderCalendar = () =>{
    //     <DateTimePicker/>
    // }

	return (
		<section className="task-container" key={key}>
			<p className="task-text-content">{text}</p>
			<div className="buttons">
				<div className="calendar-btn">
					<i className="fa-solid fa-calendar-days" />
				</div>
				<div className="close-btn" onClick={deleteCurrentTask}>
					<i className="fa-solid fa-rectangle-xmark" />
				</div>
			</div>
		</section>
	);
};

export default Task;

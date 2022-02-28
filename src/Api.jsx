export const getToDoList = (tasks, setTasks) => {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/umikami', {
				method: 'GET',
				headers: {}
			})
				.then((response) => {
					return response.json();
				})
				.then((result) => {
					if (JSON.stringify(result) !== JSON.stringify(tasks)) {
						setTasks(result);
					}
				})
				.catch((err) => {
					console.error(err);
				});
}

export const updateToDoList = (tasks) => {
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
}
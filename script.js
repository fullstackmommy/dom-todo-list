const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];

function displayTasks() {
// create li
// add text to li
// find ul
//	append li to ul
	for (i = 0; i < tasks.length; i++) {
		addTask(tasks[i]);
	}
}


function addTask(inputTask) {
	// const ul = document.querySelector('ul');
	// const li = document.createElement('li');
	// li.textContent = inputTask;
	// li.addEventListener('click', (event) => {
	// 	li.classList.toggle("done");
	// })

	// ul.appendChild(li);

	const ul = document.querySelector('ul');
	const li = document.createElement('li');

	const newInput = document.createElement('span');
	const newTrash = document.createElement('span');
	//newTrash.classList.add("trash");

	newInput.textContent = inputTask;
	newInput.addEventListener('click' , (event) => {
		newInput.classList.toggle("done");
	})

	li.append(newInput, newTrash);
	ul.appendChild(li);

	newTrash.textContent = " Remove";
	newTrash.addEventListener('click', (event) => {
		newInput.parentNode.removeChild(newInput);
	})
}

displayTasks();

// Append text input into the list
const input = document.querySelector('#textinput');
const btn = document.querySelector('#buttonid');

btn.addEventListener('click', () => {
	addTask(input.value)
});

input.addEventListener('keypress', (e) => {
 	if (e.key === 'Enter')
		addTask(input.value)
 });
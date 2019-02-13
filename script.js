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

// consider using tasks.foreach(addTask)
	for (i = 0; i < tasks.length; i++) {
		addTask(tasks[i]);
	}
}

function addTask(inputTask) {

	const ul = document.querySelector('ul');
	const li = document.createElement('li');

	const newInput = document.createElement('div');
	const newTrash = document.createElement('div');
	newTrash.classList.add("trash");

	newInput.textContent = inputTask;
	newInput.addEventListener('click' , (event) => {
		newInput.classList.add('animated', 'bounce');
		newInput.classList.toggle("done");
		if (!newInput.classList.value.includes("done"))
			newInput.classList.remove('animated', 'bounce');
	})

	li.append(newInput, newTrash);
	ul.appendChild(li);

	//newTrash.textContent = "Remove";
	newTrash.innerHTML = "<i class=\"fas fa-trash-alt\"></i>";
	newTrash.addEventListener('click', (event) => {
		newTrash.parentNode.classList.add('animated', 'bounceOutLeft');
		newTrash.parentNode.addEventListener('animationend', () => {
			newTrash.parentNode.remove();
		})
	})
}

displayTasks();

// Append text input into the list
const input = document.querySelector('#textinput');
const btn = document.querySelector('#buttonid');

btn.addEventListener('click', () => {
	addTask(input.value);
	input.value = "";
});

input.addEventListener('keypress', (e) => {
 	if (e.key === 'Enter') {
		addTask(input.value);
		input.value = "";
	 }
 });
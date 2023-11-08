window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input1 = document.querySelector("#new-task-input1");
    const input2 = document.querySelector("#new-task-input2");
    const input3= document.querySelector("#new-task-input3");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task1 = input1.value;
        const task2 = input2.value;
        const task3 = input3.value;

		const task_el = document.createElement('div');
		//task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		//task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task1+"-"+task2+"-"+task3;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		//task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		//task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		//task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input1.value = '';
        input2.value = '';
        input3.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				//task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});
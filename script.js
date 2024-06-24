(function() {
    document.addEventListener('DOMContentLoaded', () => {
        const addTaskInput = document.querySelector('.add-task input[type="text"]');
        const addTaskDate = document.querySelector('.add-task input[type="date"]');
        const taskList = document.querySelector('.task-list');

        addTaskInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                addTask();
            }
        });

        addTaskDate.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                addTask();
            }
        });

        let addTaskButton = document.querySelector('.add-task .add-btn');
        if (!addTaskButton) {
            addTaskButton = document.createElement('button');
            addTaskButton.textContent = 'Add Task';
            addTaskButton.classList.add('add-btn');
            document.querySelector('.add-task').appendChild(addTaskButton);
        }
        
        // Always add event listener to the addTaskButton
        addTaskButton.addEventListener('click', addTask);

        function addTask() {
            const taskText = addTaskInput.value.trim();
            const taskDate = addTaskDate.value || 'No date';
            if (taskText === '') return;

            const taskItem = document.createElement('li');
            taskItem.classList.add('task');
            taskItem.innerHTML = `
                <input type="checkbox">
                <span>${taskText}</span>
                <span class="task-date">${taskDate}</span>
                <button class="delete-btn">🗑️</button>
            `;

            taskList.appendChild(taskItem);
            addTaskInput.value = '';
            addTaskDate.value = '';

            taskItem.querySelector('input[type="checkbox"]').addEventListener('change', function() {
                const taskTitle = this.nextElementSibling;
                if (this.checked) {
                    taskTitle.style.textDecoration = 'line-through';
                    taskTitle.style.opacity = '0.5';
                } else {
                    taskTitle.style.textDecoration = 'none';
                    taskTitle.style.opacity = '1';
                }
            });

            taskItem.querySelector('.delete-btn').addEventListener('click', () => {
                taskItem.remove();
            });
        }
    });
})();

document.addEventListener('DOMContentLoaded', function() {
    const teamForm = document.querySelector('.team-form');
    const taskForm = document.querySelector('.task-form');
    const taskList = document.getElementById('task-list');
    const notificationsList = document.getElementById('notifications-list');

    // Array para armazenar os membros do time
    let teamMembers = [];

    // Evento para atribuir novo membro ao time
    document.getElementById('assign-member').addEventListener('click', function(event) {
        event.preventDefault();
        const newMemberName = document.getElementById('new-member-name').value;
        if (newMemberName.trim() !== '') {
            teamMembers.push(newMemberName);
            displayTeamMembers();
            teamForm.reset();
        } else {
            alert('Por favor, insira o nome do novo membro.');
        }
    });

    // Função para exibir membros do time
    function displayTeamMembers() {
        const membersContainer = document.createElement('div');
        membersContainer.classList.add('members-container');
        membersContainer.innerHTML = `<p><strong>Membros do Time:</strong> ${teamMembers.join(', ')}</p>`;
        document.getElementById('add-members').appendChild(membersContainer);
    }

    // Evento para atribuir nova tarefa
    document.getElementById('assign-task').addEventListener('click', function(event) {
        event.preventDefault();
        const taskName = document.getElementById('task-name').value;
        const taskDuration = document.getElementById('task-duration').value;
        const taskTeam = document.getElementById('task-team').value;
        
        if (taskName.trim() !== '' && taskDuration !== '' && taskTeam !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `<strong>${taskName}</strong> - ${taskDuration} horas (${taskTeam})`;
            taskList.appendChild(taskItem);
            taskForm.reset();
        } else {
            alert('Por favor, preencha todos os campos para atribuir a tarefa.');
        }
    });

    // Função para notificação de prazo (simulação)
    function addNotification(taskName, taskDuration) {
        const notificationItem = document.createElement('li');
        notificationItem.textContent = `A tarefa "${taskName}" está próxima do prazo (${taskDuration} horas).`;
        notificationsList.appendChild(notificationItem);
    }

    // Simulação de notificação após 5 segundos
    setTimeout(function() {
        addNotification('Tarefa Importante', '24');
    }, 5000);
});

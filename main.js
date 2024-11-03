function addNewTask() {
  const taskName = document.getElementById('nome_tarefa').value;

  if (taskName.trim() === '') {
    alert('Digite o nome da tarefa.');
    return; 
  }

  const li = document.createElement('li');
  li.textContent = taskName; 

  document.getElementById('list').appendChild(li);

  document.getElementById('nome_tarefa').value = '';
}

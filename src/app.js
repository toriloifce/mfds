// Localização: todoapp-mfds/src/app.js

const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Função para buscar e renderizar as tarefas vindas da API Docker
async function listarTarefas() {
    try {
        const response = await fetch('/api/tarefas');
        const tarefas = await response.json();
        
        taskList.innerHTML = "";

        tarefas.forEach(tarefa => {
            const li = document.createElement("li");
            li.className = `task-item ${tarefa.concluida ? 'completed' : ''}`;
            
            li.innerHTML = `
                <span>${tarefa.titulo}</span>
                <div class="task-actions">
                    <button class="btn-check" onclick="alternarTarefa(${tarefa.id})">✔️</button>
                    <button class="btn-delete" onclick="deletarTarefa(${tarefa.id})">❌</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    } catch (error) {
        console.error("Erro ao carregar tarefas do contêiner:", error);
    }
}

// Envia uma nova tarefa para ser gravada no JSON do servidor
async function adicionarTarefa() {
    const titulo = taskInput.value.trim();
    if (!titulo) return;

    await fetch('/api/tarefas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo })
    });

    taskInput.value = "";
    listarTarefas();
}

// Altera o status da tarefa diretamente no arquivo do contêiner
async function alternarTarefa(id) {
    await fetch(`/api/tarefas/${id}`, { method: 'PUT' });
    listarTarefas();
}

// Remove a tarefa de dentro do arquivo persistido no contêiner
async function deletarTarefa(id) {
    await fetch(`/api/tarefas/${id}`, { method: 'DELETE' });
    listarTarefas();
}

addBtn.addEventListener("click", adicionarTarefa);
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") adicionarTarefa();
});

// Executa a carga inicial ao abrir a página
listarTarefas();
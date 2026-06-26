# ToDo App - Projeto Final DevOps 🚀

Projeto prático desenvolvido para o Curso Técnico em Informática na disciplina de DevOps, sob a orientação do Professor César Olavo.

## 📋 Sobre o Projeto
A aplicação consiste em um sistema dinâmico de gerenciamento e cadastro de tarefas ("ToDo App") de uso interno corporativo. O objetivo principal é aplicar de ponta a ponta os conceitos de Git/GitHub, empacotamento com Docker e automação de pipelines de CI/CD.

## 🛠️ Tecnologias Utilizadas
* **Front-end:** HTML5, CSS3 (Estilização Monospace) e JavaScript Assíncrono.
* **Servidor Web:** Nginx (Alpine Image)
* **Containerização:** Docker
* **CI/CD Pipeline:** GitHub Actions & GitHub Container Registry (GHCR)

## 📦 Como Executar Localmente com Docker

Certifique-se de ter o Docker instalado em sua máquina. Para buildar e rodar o projeto localmente, execute os seguintes comandos no terminal:

```bash
# 1. Buildar a imagem local a partir do Dockerfile
docker build -t todo-app:local .

# 2. Executar o contêiner mapeando as portas e criando um volume de desenvolvimento
docker run -d -p 80:80 --name meu-todo-container -v $(pwd)/src:/usr/share/nginx/html todo-app:local
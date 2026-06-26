# Localização: todoapp-mfds/Dockerfile

# Usa uma imagem oficial e leve do Node.js recomendada para produção
FROM node:18-alpine

# Cria e define o diretório da aplicação no contêiner
WORKDIR /app

# Copia os arquivos de mapeamento de dependências
COPY package*.json ./

# Instala as dependências de forma limpa
RUN npm install

# Copia todo o restante do código do projeto (incluindo a pasta src)
COPY . .

# Expõe a porta de rede do contêiner
EXPOSE 80

# Inicia o servidor Node.js que gerencia o front e as gravações em arquivo
CMD ["npm", "start"]
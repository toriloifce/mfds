# Usa uma imagem oficial e leve do Nginx
FROM nginx:alpine

# Remove os arquivos padrão que vêm no Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia todo o conteúdo da sua pasta 'src' para a pasta pública do Nginx
COPY ./src /usr/share/nginx/html

# Expõe a porta 80 (padrão do Nginx)
EXPOSE 80
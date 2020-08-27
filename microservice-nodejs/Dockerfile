FROM node:12.18.2-alpine

# Ajuste da timezone
RUN ln -snf /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime && echo "America/Sao_Paulo" > /etc/timezone

# Cria o diretorio da aplicacao
WORKDIR /microservice-nodejs

# Copia o package.json e o package-lock.json e Instala as dependencias da aplicacao
COPY package*.json ./
RUN npm install

# Copia o projeto para o workdir do container
COPY . .

# Definindo comando padrao do container para iniciar a aplicacao.
CMD node server.js
